import Grid from "@mui/material/Grid";
import { Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {
  return (
    <div>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid size={2}>
          <Typography style={{ color: "white" }} variant="h6">To-Do List</Typography>
        </Grid>
        <Grid
          size={10}
          display="flex"
          justifyContent="end"
        >
          <Button style={{ marginRight: "10px" }} startIcon={<CodeIcon />} variant="contained" target="_blank" rel="noopener noreferrer" href="https://github.com/pnwboon/todo-react" >todo-react</Button>
          <Button style={{ marginLeft: "10px" }} startIcon={<GitHubIcon />} variant="contained" target="_blank" rel="noopener noreferrer" href="https://github.com/pnwboon" >My GitHub Profile</Button>
        </Grid>
      </Grid>
    </div>
  );
}
