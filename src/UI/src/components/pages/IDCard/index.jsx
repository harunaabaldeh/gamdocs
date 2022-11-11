import React,{useState,useEffect} from "react";
import Layout from "../../Layout/index";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Index = () => {
  const [idData,setIdData] = useState([]);
 
 useEffect(()=>{
  fetch('http://localhost:8000/idcards',{
    method:'GET'
  })
  .then((response) => response.json())
  .then((data) => setIdData(data));

 },[])

  return (
    <Layout>
      <Grid container spacing={2}>
        {idData
          .map((item) => {
            return (
              <Grid item key={item.id} xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://images.unsplash.com/photo-1612364461060-38075479ec26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Typography gutterBottom variant="h6" component="h2">
                          {item.lname}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          color="text.secondary"
                        >
                          {item.fname}
                        </Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary">
                        {item.location}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link
                        to={`/${item.category}/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        more info{" "}
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Layout>
  );
};

export default Index;
