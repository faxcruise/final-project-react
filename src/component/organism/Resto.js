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
    maxWidth: 345,
    maxHeight: 250,
    position: 'relative',
  },
  media: {
    height: 140,
  },
  overlay: {
    position: 'absolute',
    top: '0%',
    left: '93.3%',
    color: 'white',
    backgroundColor: '#9ACD32',
    fontSize: '125%',
    fontWeight: 'bold',
 }
};

function Resto(props) {
  const { classes, detailResto } = props;
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={detailResto.gambar}
          title={detailResto.name}
        />
        <div style={styles.overlay}>
            {detailResto.rating}
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {detailResto.name}
          </Typography>
          <Typography component="p">
          {detailResto.location}
          <br/>
          {detailResto.cuisines}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Resto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resto);
