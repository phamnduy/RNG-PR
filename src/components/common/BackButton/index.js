import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from "react";
import { useEffect } from "react";
import { IconButton } from "@material-ui/core";


const BackButton = ({ display, onClick }) => {
    const [isDisplay, setIsDisplay] = useState(true)

    useEffect(() => {
        setIsDisplay(display)
    }, [])

    return (
        <IconButton style={{
            position: 'fixed',
            paddingTop: '13px',
            paddingLeft: '32px',
            cursor: 'pointer'
        }}
            onClick={() => onClick()}
        >
            {isDisplay && <ArrowBackIosIcon
                htmlColor='white'

            />}
        </IconButton>
    );
};

export default BackButton