import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useState } from "react";

export default function AddList(props) {
    const [target, setTarget] = useState("");
    const { data, setData } = props;

    function AddTarget(e) {
        e.preventDefault();
        const AddList = {
            id: Math.floor(Math.random() * 1000),
            target: target,
        };
        console.log(AddList);
        setData([...data, AddList])
        setTarget("")
    }

    return (
        <Grid container alignContent="center" direction="column">
            <Grid sx={{ mt: 4, mb: 4 }}>
                <h1 style={{ margin: 0 }}>รายการสิ่งที่ต้องทำ</h1>
            </Grid>
            <form onSubmit={AddTarget}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid>
                        <TextField
                            id="outlined-textarea"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            label="เพิ่มสิ่งที่คุณต้องทำ"
                            placeholder="เขียนสิ่งที่คุณต้องทำ"
                            sx={{
                                width: {
                                    xs: "250px",
                                    sm: "250px",
                                    md: "450px",
                                    background: "white",
                                },
                            }}
                        />
                    </Grid>
                    <Grid>
                        <Button
                            disabled={target.trim() === ""}
                            type="submit"
                            variant="contained"
                            color="success"
                            size="large"
                            startIcon={<PostAddIcon />}
                            sx={{ height: "56px" }}
                        >
                            เพิ่มงาน
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}
