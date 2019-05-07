import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Fastfood from '@material-ui/icons/Fastfood'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class NavbarMenu extends React.Component {
    render() {
      return (
        <Button
          color="inherit"
          {...this.props}
        />
      )
    }
}
const NavBar = () => {
    return (
        <div>
            <AppBar position='static' color='inherit'>
                <Toolbar>
                  <Grid container alignItems='center' justify='space-between'>
                    <Grid item>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <Fastfood />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" color="inherit" >
                          <Link to="/Home" style={{ textDecoration: 'none' }}>iftaradvisor</Link>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>                    
                  </Grid>
                </Toolbar>
               </AppBar>
        </div>
    );
};

export default NavBar;