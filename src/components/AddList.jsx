import { useState } from "react";
import Box from "@mui/material/Box"; // เพิ่ม Box component
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"; // เพิ่ม Typography component
import Paper from "@mui/material/Paper"; // เพิ่ม Paper component
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // ไอคอนสำหรับปุ่มเพิ่ม

export default function AddList(props) {
  const [target, setTarget] = useState("");
  const { data, setData } = props;

  function AddTarget(e) {
    e.preventDefault();
    if (target.trim() === "") { // เพิ่มการตรวจสอบไม่ให้เพิ่มค่าว่าง
      return;
    }
    const newList = {
      id: Math.floor(Math.random() * 100000), // เพิ่มเลขให้มากขึ้นเพื่อลดโอกาสซ้ำ
      target: target.trim(), // trim() เพื่อลบช่องว่างหัวท้าย
    };
    console.log(newList);
    setData([...data, newList]);
    setTarget("");
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2, // ปรับ padding โดยรวมให้เหมาะสมกับ TodoList
        backgroundColor: '#ffffff', // พื้นหลังสีขาว ให้สอดคล้องกับ TodoList
        display: 'flex',
        flexDirection: 'column', // จัดเรียงในแนวตั้ง
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Grid container justifyContent="center" sx={{ maxWidth: "550px", width: '100%', mt: 2 }}> {/* ปรับ mt ให้สอดคล้อง */}
        <Paper
          elevation={10} // ใช้ elevation เดียวกันกับ TodoList
          sx={{
            width: '100%',
            borderRadius: '16px', // มุมโค้งมนเหมือน TodoList
            overflow: 'hidden',
            backgroundColor: 'background.paper',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // เงาที่ละมุนเหมือน TodoList
            p: 3, // เพิ่ม padding ภายใน Paper
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3, // เพิ่มช่องว่างระหว่าง items
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: 700, color: 'primary.dark', mb: 1 }}> {/* ใช้ Typography แทน h1 */}
            เพิ่มรายการใหม่
          </Typography>

          <form onSubmit={AddTarget} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid sx={{ gridColumn: { xs: '1 / -1', sm: '1 / 10' } }}> {/* ปรับ Grid item ให้ยืดหยุ่นมากขึ้น */}
                <TextField
                  fullWidth // ให้ TextField กว้างเต็มพื้นที่ Grid item
                  id="add-todo-item" // เปลี่ยน id ให้สื่อความหมาย
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  label="เพิ่มสิ่งที่คุณต้องทำ"
                  placeholder="เขียนสิ่งที่คุณต้องทำ..."
                  variant="outlined" // ใช้ outlined variant ที่ดูทันสมัย
                  size="medium" // ขนาดมาตรฐาน
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px', // ทำให้ TextField มีมุมโค้งมน
                      backgroundColor: '#f9f9f9', // สีพื้นหลัง TextField
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main', // สีขอบเมื่อ focus
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: 'primary.main', // สี label เมื่อ focus
                    },
                  }}
                />
              </Grid>
              <Grid sx={{ gridColumn: { xs: '1 / -1', sm: '1 / 5' } }}>
                <Button
                  fullWidth // ให้ Button กว้างเต็มพื้นที่ Grid item
                  disabled={target.trim() === ""}
                  type="submit"
                  variant="contained"
                  color="primary" // เปลี่ยนเป็น color="primary" เพื่อให้สอดคล้องกับธีมหลัก
                  size="large"
                  startIcon={<AddCircleOutlineIcon />} // เปลี่ยนไอคอนให้ดูทันสมัยขึ้น
                  sx={{
                    height: "56px", // กำหนดความสูงให้เท่ากับ TextField
                    borderRadius: '8px', // มุมโค้งมนเหมือน TextField
                    fontWeight: 600, // เพิ่มความหนาตัวอักษร
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)', // เพิ่มเงาให้ปุ่ม
                    '&:hover': {
                      boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)', // เงาเมื่อ hover
                      transform: 'translateY(-2px)', // ยกปุ่มขึ้นเล็กน้อย
                    },
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  }}
                >
                  เพิ่มงาน
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Box>
  );
}