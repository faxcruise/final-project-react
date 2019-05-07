import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import Text from '../component/atom/Text';
import Section from '../component/organism/Section';
import InputTextCalendar from '../component/atom/InputText';
import Gambar from '../iftar_logo.jpg'
import {connect} from 'react-redux'

import {fetchJadwal} from '../component/action/jadwal'
import {fetchLokasi} from '../component/action/lokasi'
import Jadwal from '../component/organism/Jadwal'
import Resto from '../component/organism/Resto'


import { Link,Redirect } from 'react-router-dom';
import axios from 'axios'

const style = theme => ({
    paper: {
        padding: 70,
        margin: 'auto',
        marginTop: '5%',
        maxWidth: 400,
    },
})

class Home extends React.Component {
    constructor(props){
      super(props)
      //this.timeIncrementMs = 50;
      //this.showSpinnerIfReturnGreaterThanMs = 200;
      this.state = {
          hasilRekomendasi: []
      };
    }

    handleClick = () => {
        //this.props.fetchMutasi(this.state.account,this.state.tglStart,this.state.tglEnd)
        //this.props.fetchMutasi('679','2019-05-01')
        
    }
    handleClickLokasi = () =>{
        this.props.fetchLokasi(this.state.jarak)
    }

    componentDidMount() {
      var today = new Date()  

      var yyyy = today.getFullYear().toString()
      var mm = (today.getMonth()+1).toString()
      var dd  = today.getDate().toString()
    
      var mmChars = mm.split('')
      var ddChars = dd.split('')

      var date = yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0])

      this.props.fetchJadwal(this.props.lokasiuser.city, date)

      this.getJadwalSholat()
    }

    getJadwalSholat = () => {    
        let config = {
          headers: {
            'user-key': '082ac2162eff57775004a8bd8fa5377d',
          }
        }

        axios.get('https://developers.zomato.com/api/v2.1/search?count=5&lat='+this.props.lokasiuser.latitude+'&lon='+this.props.lokasiuser.longitude+'&radius=10000&collection_id=1', config)
        .then(response=>{
          
          let tmpHasilRekomendasi = response.data.restaurants.map(
            (item)=>{
                return {
                  name : item.restaurant.name,
                  cuisines : item.restaurant.cuisines,
                  location : item.restaurant.location.locality_verbose,
                  rating: item.restaurant.user_rating.aggregate_rating,
                  gambar: item.restaurant.thumb
                }
            }
          )

          this.setState({
            hasilRekomendasi:tmpHasilRekomendasi
          })

        }).catch(error =>{
            console.log('error get rekomendasi')
        })            
    }

    render() {
        let { hasilRekomendasi } = this.state
        const { classes} = this.props

        if (this.props.lokasiuser.ip === '') {
          return <Redirect push to="/" />;
        }

        return (
            <React.Fragment>
                <br/>
                <br/>
              

               <Grid container 
                  spacing={24}
                  direction="column"
                  justify="center"
                  alignItems="center"
                  >

                  <Grid item xs={12}>
                      
                      <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">                      
                                        
                          
                          <Grid item xs={12}>
                            <Jadwal jadwalSholat={this.props.jadwalSholat} kota={this.props.lokasiuser.city}/>
                          </Grid>


                      </Grid>
                                           
                  </Grid>

                  <Grid item xs={12}>
                      <Grid container 
                        spacing={16} 
                        justify="center" 
                        alignItems="center" 
                        direction="row">

                          {hasilRekomendasi.map((hasilRekomendasi,index)=>{
                              var a = index+1
                              return(
                                <Grid item xs={4}>
                                <Resto detailResto={hasilRekomendasi}/>
                                </Grid>
                              )
                          })}
                                              
                      </Grid>
                  </Grid>

               </Grid>
              
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = {
  fetchJadwal:fetchJadwal,
  fetchLokasi:fetchLokasi
}

const mapStateProps=(state)=>{
  return{
      jadwalSholat:state.jadwal,
      lokasinya:state.lokasi,
      lokasiuser:state.userdata
  }
}

export default connect(mapStateProps,mapDispatchToProps) (Home);