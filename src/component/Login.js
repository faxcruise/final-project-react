import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock'
import Gambar from '../iftar.jpg';
import Button from '../component/atom/Button';
import {connect} from 'react-redux'
import {fetchMember} from '../component/action/userdata'
import { Link,Redirect } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        const { classes } = props;
        super(props)
        this.state={
            username:'',
            password:'',
        }
    }
    
    handleClick = () => {
      this.props.fetchMember()
    }

    render(){
        //console.log(this.props.lokasiuser.ip);
        if (this.props.lokasiuser.ip !== '') {
            return <Redirect push to="/home" />;
        }
        return (
            <div>
              <div>
              <Paper style={{
                        padding: 70,
                        margin: 'auto',
                        marginTop: '5%',
                        maxWidth: 400,
                    }}>
                <Grid container spacing={16} direction="column"
                  justify="center"
                  alignItems="center">
                  <Grid item>
                    <ButtonBase style={{
                            width: 128,
                            height: 128,
                        }}>
                      <img style={{
                            width: 128,
                            height: 128,
                        }} alt="complex" src={Gambar} />
                    </ButtonBase>
                  </Grid>
                  <Grid item>
                   <Typography variant="h5" color='inherit'>iftar advisor</Typography>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column"  justify="center" alignItems="center" spacing={16}>
                      <Grid item xs>
                        <div>
                            <Grid container spacing={8} alignItems="flex-end">
                              <Grid item>
                                <AccountCircle />
                              </Grid>
                              <Grid item>
                                <TextField id="input-with-icon-grid" label="User Name" ref = 'username' value={this.state.username} onChange={e => this.setState({ username: e.target.value })}/>
                              </Grid>
                            </Grid>
                          </div>
                      </Grid>
                      <Grid item xs>
                        <div> 
                            <Grid container spacing={8} alignItems="flex-end">
                              <Grid item>
                                <Lock />
                              </Grid>
                              <Grid item>
                                <TextField id="input-with-icon-grid" type="password" label="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                              </Grid>
                            </Grid>
                          </div>
                      </Grid>
                      <Grid item xs>
                        {/* <Link to="/home"> */}
                        <Button variant="outlined" color="primary" onClick ={this.handleClick} style={{ cursor: 'pointer',marginTop:'10%',marginBottom:  '20%' }}>Log In</Button>
                        {/* </Link> */}
                      </Grid>
                      <Grid item xs>
                          <Typography align="center" variant="caption" gutterBottom>Copyright © 2019 Students</Typography>
                      </Grid>
                      {/* <Grid item>
                        <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              </div>
              <div>
              </div>
            </div>
          );
    }
}

const mapDispatchToProps = {
  fetchMember:fetchMember
}

const mapStateProps=(state)=>{
  return{
      lokasiuser:state.userdata
  }
}

export default connect(mapStateProps,mapDispatchToProps) (Login);