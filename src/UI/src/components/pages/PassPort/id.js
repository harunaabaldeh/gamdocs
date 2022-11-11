
import React,{ useState,useEffect }from "react";
import Layout from "../../Layout/index";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";
import moment from "moment"
import Box from '@mui/material/Box'

const IdInfo = () => {
  const {id}= useParams();
  const [passportData,setPassportData] = useState([]);
 
 useEffect(()=>{
  fetch('http://localhost:8000/passports',{
    method:'GET'
  })
  .then((response) => response.json())
  .then((data) => setPassportData(data));

 },[])

  
  

  return (
    <Layout>
      <Paper sx={{ minHeight: "400px",display:"flex", gap:1,backgroundColor:"grey"}} >

      {passportData
          .filter((item) => item.id == id)
          .map((item) => {
            return (
              <Box key={item.id} sx={{ minHeight: "400px",display:"flex", gap:1,backgroundColor:"grey"}}>

          
            <Grid>
            <img
              src="https://images.unsplash.com/photo-1612364461060-38075479ec26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1314&q=80"
              alt=""
              height="100%"
              width="100%"
            />
            </Grid>
            <Grid container display="flex" flexDirection="column"width="100%">
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
              <Typography variant="subtitle1">first name/nom : {item.fname} </Typography>
              <Typography variant="subtitle1">last name/prenom : {item.lname} </Typography>
              <Typography variant="subtitle1">Email : {item.email} </Typography>
              <Typography variant="subtitle1">Date of Birth: {moment(item.DOB).format('MMMM Do YYYY')}</Typography>
              <Typography variant="subtitle1">Date of Expiry: {moment(item.expiryDate).format('MMMM Do YYYY')}</Typography>
              <Typography variant="subtitle1">Date of Issue: {moment(item.issueDate).format('MMMM Do YYYY')}</Typography>
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
            <Divider />
            <Grid>
              <Typography variant="subtitle1">Full Name :  </Typography>
              <Typography variant="subtitle1">Phone: </Typography>
              <Typography variant="subtitle1">Email </Typography>
              <Typography variant="subtitle1">Address:  </Typography>
            </Grid>
            </Grid>
              </Box>
            )})}
          

      </Paper>
    </Layout>
  );
};

export default IdInfo;
