import React from "react";
import {Snackbar} from "@mui/material";

function LowAlert({text}){
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
        return(
              <Snackbar
                    style={{marginBottom: '-170px', marginLeft: "-500px"}}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message={text}
                />
        )
}

export default LowAlert;
