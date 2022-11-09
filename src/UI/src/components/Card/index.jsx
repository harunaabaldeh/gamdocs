import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea, CardActions,Box } from "@mui/material";
import { makeStyles } from '@mui/styles';



import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const Index = (props) => {
  // const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1612364461060-38075479ec26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{ display:"flex",gap:1}}>
          <Typography gutterBottom variant="h6"  component="h2">
            {props.lname}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
            {props.fname}
          </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            {props.location}
          </Typography>
        </CardContent>
     
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/${props.category}/${props.id}`} style={{ textDecoration: "none" }}>
            {" "}
            more info{" "}
          </Link>
        </Button>
       
      </CardActions>
    </Card>
  );
};

export default Index;
