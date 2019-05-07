import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';
const InputText = ({...props})=>{
    return(
        <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <CalendarToday />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" {...props} />
            </Grid>
        </Grid>
    )
}

export default InputText;