import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
const Text = ({...props})=>{
    return(
        <Button {...props}/>
    )
}

export default Text;