import React from "react";
import Card from "../Card/index";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Grid container spacing={2} mt={2}>
     <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center",width:"100%"}}
      >
          <Typography variant="h5">ID Cards</Typography>

    </Box>
      <Grid container item spacing={2}>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item>
          <Link to="/idcards" style={{textDecoration:"none",color:"white"}}>
          <Button variant="contained">See more</Button>
          </Link>
          
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center",width:"100%",marginTop:"10px"}}
      >
          <Typography variant="h5">PassPorts</Typography>

    </Box>
      <Grid container item spacing={2}>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item>
          <Link to="/passports" style={{ textDecoration: 'none' ,color:"white"}}>
          <Button variant="contained">See more</Button>
          </Link>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
