import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#424242',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        py: 0.5,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // ปรับความกว้างสูงสุดให้สอดคล้องกับ Grid หลักของ TodoList และ AddList
          // โดยทั่วไปคือ maxWidth ประมาณ 600px หรือที่เหมาะสมกับ Paper components
          maxWidth: '1200px', // ปรับค่า maxWidth ที่นี่
          margin: '0 auto', // จัดให้อยู่กึ่งกลาง
          width: '100%',
          px: { xs: 2, md: 0 }, // ปรับ padding ด้านข้าง โดยเฉพาะบนหน้าจอขนาดใหญ่
        }}
      >
        {/* ส่วนซ้าย: ชื่อแอป */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: 'white',
            fontWeight: 700,
            letterSpacing: 0.8,
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}
        >
          โปรแกรมจดบันทึกรายการสิ่งที่ต้องทำ
        </Typography>

        {/* ส่วนขวา: ปุ่ม Link */}
        <Box sx={{ display: 'flex', gap: 1 }}> {/* ลด gap ระหว่างปุ่มเล็กน้อย */}
          <Button
            variant="outlined"
            color="inherit"
            href="https://github.com/pnwboon/todo-react"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<CodeIcon />}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white',
                transform: 'translateY(-1px)',
              },
              transition: 'transform 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out',
              textTransform: 'none',
              fontSize: '0.75rem', // ลดขนาดตัวอักษรเล็กน้อยเพื่อให้กระชับ
              px: 1, // ลด padding แนวนอน
              py: 0.5, // ลด padding แนวตั้ง
              minWidth: 0, // ให้ปุ่มหดได้เมื่อพื้นที่จำกัด
            }}
          >
            Repo
          </Button>

          <Button
            variant="contained"
            color="secondary"
            href="https://github.com/pnwboon"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            sx={{
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '0.75rem', // ลดขนาดตัวอักษรเล็กน้อยเพื่อให้กระชับ
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(-1px)',
                backgroundColor: 'secondary.dark',
              },
              transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease-out',
              px: 1, // ลด padding แนวนอน
              py: 0.5, // ลด padding แนวตั้ง
              minWidth: 0, // ให้ปุ่มหดได้เมื่อพื้นที่จำกัด
            }}
          >
            My GitHub
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}