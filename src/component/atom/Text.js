import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
const Text = ({...props})=>{
    return(
        <Typography {...props}/>
    )
}

export default Text;