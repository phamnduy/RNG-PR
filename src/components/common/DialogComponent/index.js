import React, { useState } from "react";
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import { Grid } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'red',

    },
};

const DialogContent = styled(Grid)(() => ({
    width: '375px',
    height: '100vh',
    background: 'white'
}))

const CustomGrid = styled(Grid)(() => ({
    background: 'white'
}))

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: white;
  }
  margin: 0,
  maxHeight: 100% !important,
`;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogComponent = ({ classes, children, isOpen }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(isOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <StyledDialog
                TransitionComponent={Transition}
                open={isOpen} onClose={handleClose} 
                PaperProps={{
                    style: {
                      maxHeight: '100vh',
                      backgroundColor: 'red',
                    },
                  }}
                  BackdropProps={{
                    classes: {
                      root: classes.backDrop,
                    },
                  }}
                >
                    
                <CustomGrid container justifyContent='center' >
                    <DialogContent>{children}</DialogContent>
                </CustomGrid>

            </StyledDialog>
        </div>
    );
};

export default withStyles(styles)(DialogComponent)