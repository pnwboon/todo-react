import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./TodoList.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function TodoList({ data, deleteTarget }) {
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (id) => (e) => {
    setCheckedItems({
      ...checkedItems,
      [id]: e.target.checked,
    });
  };
  return (
    <div>
      <Grid container alignContent="center" direction="column" justifyContent="center" sx={{ margin: "0 auto", maxWidth: "500px", mt: 2 }}>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" spacing={0} alignItems="center">
                <FormControlLabel
                  control={<Checkbox checked={checkedItems[item.id] || false} onChange={handleCheckboxChange(item.id)} />}
                  label={
                    <p
                      style={{
                        margin: 10,
                        textDecoration: checkedItems[item.id] ? "line-through" : "none",
                        color: checkedItems[item.id] ? "#9e9e9e" : "inherit",
                      }}
                    >
                      {item.target}
                    </p>
                  }
                />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button onClick={() => deleteTarget(item.id)} variant="contained" startIcon={<DeleteIcon />}>
                  ลบ
                </Button>
              </Stack>
            </li>
          ))}
        </ul>
      </Grid>
    </div>
  );
}
