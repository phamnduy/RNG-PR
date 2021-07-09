import React, {useState} from "react";
import styled from 'styled-components';
import { Box, Grid, Button } from '@material-ui/core';
import PowerLogo from '../../assets/images/home_power.png'
import Dialog from '@material-ui/core/Modal';
import DialogComponent from "../common/DialogComponent";

const NavContainer = styled.div(() => ({
    width: '100%'
}))

const CustomImage = styled.img(() =>({
    width: '64px'
}))

const PaymentDetailContainer = styled(Grid)(({ theme }) => ({
    // border:  '1px solid black',
    borderBottom:  '1px solid black',
    // borderRadius: '8px',
    borderColor: '#E0E0E0',
    height: '80px',
    alignContent: 'center',
    marginBottom: '25px',
    padding: 0
  }));
const BookTicketBtn = styled.button(() => ({
    background: 'transparent',
    borderColor: '#ff6f23',
    borderWidth: '1px',
    color: '#ff6f23',
    transition: '0.2s all',
    height: '30px',
    padding:' 0px 12px',
    fontSize: '12px',
}))


const ThuDo = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(0);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    let menuItems = [];
    for (var i = 0; i < 5; i++) {
        menuItems.push(<PaymentDetailContainer container spacing={3}>
            <Grid item xs={8} container>
         <CustomImage src={PowerLogo}/>
         <div>
         <h1>5 tỷ</h1>
        <h6>02:15</h6>
         </div>
        </Grid>
            <Grid item xs={4} container justifyContent='center' direction='column'>
         <BookTicketBtn onClick={()=> handleOpen()}>Đặt vé</BookTicketBtn>
        </Grid>
        </PaymentDetailContainer>);
        
    }
    return (     
        <div>
                    {menuItems}
                  <DialogComponent isOpen={open} hideBackdrop onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
     <button onClick={()=> setOpen(false)}></button>
     <h1>test</h1>
    </DialogComponent>  
        </div>   
    );
};

export default ThuDo