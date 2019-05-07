import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Gambar from '../../iftar_logo.jpg'
import Avatar from 'react-avatar';
import JadwalDetail from '../organism/JadwalDetail'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    width: 1036,
    maxHeight: 450,
    position: 'relative',
  },
  media: {
    height: 290,
    maxWidth: 1036,
  },
  overlay: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    color: 'black',
    fontSize: '150%',
    fontWeight: 'bold',
 }
};

function Jadwal(props) {
  const { classes, jadwalSholat, kota } = props;
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gambar}
          title="iftaradvisor"
        />
        <div style={styles.overlay}>
        Tunjukkan Rasa Syukurmu atas Puasa Hari ini<br/>dengan Orang Terdekat
        </div>
        <CardContent>
          <Typography  component="p">
            Jadwal sholat area {kota} dan sekitarnya
            <br/>
            {jadwalSholat.tanggal}                              
          </Typography>
          <Grid container>

              <Grid item xs>
              <JadwalDetail titleJadwal="IMSAK" jadwalnya={jadwalSholat.imsak} gambarnya="https://www.islampos.com/wp-content/uploads/2017/05/fajar-imsak.jpg"/> 
              </Grid>
              <Grid item xs>
              <JadwalDetail titleJadwal="SUBUH" jadwalnya={jadwalSholat.subuh} gambarnya="https://www.islampos.com/wp-content/uploads/2017/09/pohon-pagi-shubuh-langit-malam-maghrib-sore-.jpg"/> 
              </Grid>
              <Grid item xs>
              <JadwalDetail titleJadwal="DZUHUR" jadwalnya={jadwalSholat.dzuhur} gambarnya="https://ak2.picdn.net/shutterstock/videos/2288972/thumb/1.jpg?i10c=img.resize(height:160)"/> 
              </Grid>
              <Grid item xs>
              <JadwalDetail titleJadwal="ASHAR" jadwalnya={jadwalSholat.ashar} gambarnya="https://cdn-imgix-open.headout.com/blog/dubai-guide/evening+desert+safari.jpg!d?auto=compress&fm=pjpg&w=1920&h=750&fit=min&q=80&crop=faces"/> 
              </Grid>
              <Grid item xs>
              <JadwalDetail titleJadwal="MAGHRIB" jadwalnya={jadwalSholat.maghrib} gambarnya="https://www.islampos.com/wp-content/uploads/2017/01/matahari-terbenam.jpg"/> 
              </Grid>
              <Grid item xs>
              <JadwalDetail titleJadwal="ISYA" jadwalnya={jadwalSholat.isya} gambarnya="https://bimbinganislam.com/wp/wp-content/uploads/2017/02/Wanita-Mengakhirkan-Shalat-Isya.jpg"/> 
              </Grid>                  
            </Grid>
            
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Jadwal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jadwal);
