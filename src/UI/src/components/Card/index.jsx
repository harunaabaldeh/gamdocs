import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea,CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1612364461060-38075479ec26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
          placeat, eius aliquid impedit natus corrupti maxime dolores ipsa distinctio.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/idcard/id" > more info</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default Index