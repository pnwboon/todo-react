import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from '@mui/icons-material/DoneAll'; // เพิ่มไอคอนสำหรับกรณีทำเสร็จแล้ว
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'; // เพิ่มไอคอนสำหรับกรณีที่ยังไม่เสร็จ

export default function TodoList({ data, deleteTarget }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (id) => (e) => {
    setCheckedItems({
      ...checkedItems,
      [id]: e.target.checked,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2, backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Grid container justifyContent="center" sx={{ margin: "0 auto", maxWidth: "600px", mt: 4 }}>
        <Paper elevation={6} sx={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
          <List>
            {data.length === 0 ? (
              <ListItem>
                <ListItemText primary={
                  <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                    ไม่มีรายการที่ต้องทำในขณะนี้
                  </Typography>
                } />
              </ListItem>
            ) : (
              data.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={ // ใช้ secondaryAction สำหรับวางปุ่มหรือไอคอนด้านขวา
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteTarget(item.id)}
                      sx={{ color: 'error.main' }} // ใช้สี error จาก theme ของ MUI
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{
                    borderBottom: '1px solid #e0e0e0', // เพิ่มเส้นแบ่งระหว่างรายการ
                    '&:last-child': { borderBottom: 'none' }, // ลบเส้นแบ่งรายการสุดท้าย
                    backgroundColor: checkedItems[item.id] ? '#e8f5e9' : 'background.paper', // เปลี่ยนสีพื้นหลังเมื่อรายการถูกติ๊ก
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checkedItems[item.id] || false}
                      onChange={handleCheckboxChange(item.id)}
                      icon={<RadioButtonUncheckedIcon />} // ไอคอนเมื่อยังไม่ถูกเลือก
                      checkedIcon={<DoneAllIcon />} // ไอคอนเมื่อถูกเลือกแล้ว
                      sx={{
                        color: checkedItems[item.id] ? 'success.main' : 'primary.main', // เปลี่ยนสี Checkbox ตามสถานะ
                        '&.Mui-checked': {
                          color: 'success.main',
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1" // ใช้ variant body1 เพื่อขนาดที่เหมาะสม
                        sx={{
                          textDecoration: checkedItems[item.id] ? "line-through" : "none",
                          color: checkedItems[item.id] ? "text.secondary" : "text.primary",
                          fontWeight: checkedItems[item.id] ? 'normal' : 'medium', // ทำให้ข้อความที่ยังไม่เสร็จดูเด่นขึ้น
                          transition: 'color 0.3s ease, text-decoration 0.3s ease',
                        }}
                      >
                        {item.target}
                      </Typography>
                    }
                  />
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Grid>
    </Box>
  );
}