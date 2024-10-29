import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";

const ShowCard = (props) => {

    return (
        <Dialog
        /**
         * Set the open state to false to close the dialog
         */
            open={props.open}
            onClose={props.handleClose}
            
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
            }}
        >

            <DialogContent>

            </DialogContent>

        </Dialog>
    )
}

export default ShowCard;