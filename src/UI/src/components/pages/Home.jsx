import React, { useState, useEffect } from "react";
import Card from "../Card/index";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const [idData, setIdData] = useState([]);
  const [passportData, setPassportData] = useState([]);

  const getPassportData = async () => {
    const res = await fetch("http://localhost:8000/passports", {
      method: "GET",
    });
    return res;
  };
  const getIdData = async () => {
    const res = await fetch("http://localhost:8000/idcards", {
      method: "GET",
    });
    return res;
  };

  useEffect(() => {
    getIdData()
      .then((response) => response.json())
      .then((data) => setIdData(data));

    getPassportData()
      .then((response) => response.json())
      .then((data) => setPassportData(data));
  }, []);


  return (
    <Grid container spacing={2} mt={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h5">ID Cards</Typography>
      </Box>
      <Grid
        container
        item
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {idData.slice(0, 3).map((item) => {
          return (
            <Grid item xs={4} key={item.id}>
              <Card
                fname={item.fname}
                lname={item.lname}
                location={item.location}
                id={item.id}
                key={item.id}
                category={item.category}
              />
            </Grid>
          );
        })}
        
      </Grid>
      <Grid item>
          <Link
            to="/idcards"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button variant="contained">See more</Button>
          </Link>
        </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Typography variant="h5">PassPorts</Typography>
      </Box>
      <Grid
        container
        item
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {passportData.slice(0, 3).map((item) => {
          return (
            <Grid item xs={4} key={item.id}>
              <Card
                fname={item.fname}
                lname={item.lname}
                location={item.location}
                id={item.id}
                key={item.id}
                category={item.category}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid item>
        <Link
          to="/passports"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button variant="contained">See more</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
