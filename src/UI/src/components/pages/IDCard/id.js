import React, { useState } from "react";
import Layout from "../../Layout/index";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";

const IdInfo = () => {
  const params = useParams();
  const data = [
    {
      id: "1",
      lname: "Smith",
      fname: "John",
      location: "Banjul",
    },
    {
      id: "2",
      name: "Omar",
      location: "Barra",
    },
    {
      id: "3",
      name: "Binat",
      location: "Banjul",
    },
  ];
  const id = params.id;

  return (
    <Layout>
      <Paper sx={{ minHeight: "400px",display:"flex", gap:1}} >

        {/* {data.filter(item=>item.id === id).map(item=>{
        return(
          <div key={item.id}>
            <Typography variant="h5">name:{item.name}</Typography>
            <Typography>location: {item.location}</Typography>
          </div>
        )
       })} */}

            <Grid>
            <img
              src="https://images.unsplash.com/photo-1612364461060-38075479ec26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"
              alt=""
              height="100%"
              width="100%"
              srcset=""
            />
            </Grid>
            <Grid container display="flex" flexDirection="column"width="200%">
            <Grid
              
              minHeight={50}
              backgroundColor="#3c474d"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
            
            >
              <Typography variant="button">Owner Details</Typography>
            </Grid>
            <Divider />
            <Grid>
              <Typography variant="subtitle1">first name/nom : </Typography>
              <Typography variant="subtitle1">last name/prenom : </Typography>
              <Typography variant="subtitle1">Date of Birth: </Typography>
              <Typography variant="subtitle1">Date of Expiry: </Typography>
              <Typography variant="subtitle1">Date of Issue: </Typography>
            </Grid>
            <Grid
           
              minHeight={50}
              width="100%"
              backgroundColor="#3c474d"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="button">Founder Details</Typography>
            </Grid>
            </Grid>

      </Paper>
    </Layout>
  );
};

export default IdInfo;
