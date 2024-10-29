import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import TaskForm from "./TaskForm";

const CreateTaskModal = (props) => {

    return (
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        sx={{
        }}
        >
            <DialogTitle id="dialog-title">
                Create Task
            </DialogTitle>
            <DialogContent id="dialog-description">
            <TaskForm />
            </DialogContent>
        </Dialog>
    )
    }



export default CreateTaskModal;