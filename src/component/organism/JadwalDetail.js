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

const styles = {
  card: {
    maxWidth: 100,
    maxHeight: 100,
    position: 'relative',
  },
  media: {
    height: 100,
  },
  overlay: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    color: 'white',
    backgroundColor: '#9ACD32',
    fontSize: '125%',
    fontWeight: 'bold',
 }
};

function JadwalDetail(props) {
  const { classes ,titleJadwal, jadwalnya, gambarnya} = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={gambarnya}
        />
        <div style={styles.overlay}>
      {titleJadwal}<br/>
      {jadwalnya}
   </div>
        
      </CardActionArea>
    </Card>
  );
}

JadwalDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JadwalDetail);
