import React, {useState} from "react";
import styled from 'styled-components';
import Dialog from '@material-ui/core/Modal';

const DialogContainer = styled(Dialog)(() => ({
    
    }))
const DialogComponent = ({children, isOpen}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(isOpen);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
 
    return (     
        <div>
                  <Dialog open={isOpen} onClose={handleClose} aria-labelledby="simple-dialog-title" >
     <DialogContainer>{children}</DialogContainer>
    </Dialog>  
        </div>   
    );
};

export default DialogComponent