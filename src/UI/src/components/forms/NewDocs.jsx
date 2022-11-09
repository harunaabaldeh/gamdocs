import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IdCard from "./IdCard";
import VotersCard from "./VotersCard";
import Passport from "./passport";
import SuccessAlert from '../common/alerts/SuccessAlert';
import ErrorAlert from '../common/alerts/ErrorAlert';



const AddNewDoc = (props) => {
  const [docType, setDocType] = useState("");
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [address, setAddress] = useState("");
  // coming soon
  // const [founderName, setFounderName] = useState("");

  // const [issueDate,setIssueDate] =useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid transparent",
    boxShadow: 4,
    p: 4,
  };
  const handleChange = (event) => {
    setDocType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(docType);
    const data = new FormData(e.currentTarget);
    const bodyData = {
      lname: data.get("lName"),
      fname: data.get("fName"),
      category: docType,
      DOB:data.get("DOB"),
      issueDate:data.get("issueDate"),
      expiryDate:data.get("expiryDate"),
      email:data?.get("email"),
    };

    fetch(`http://localhost:8000/${docType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }).then(res=>{
      SuccessAlert(res.statusText)
    }).catch(err=>{
      ErrorAlert(err.message)
    });
        props.handleClose();
       
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography component="h1" variant="h5">
          Add new Document form
        </Typography>
        <FormControl sx={{ width: "100%", marginTop: 1 }}>
          <InputLabel id="type-dropdowm">Document Type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="type_dropdown"
            value={docType}
            label="Document Type"
            onChange={handleChange}
          >
            <MenuItem value="idcards">ID Card</MenuItem>
            <MenuItem value="passports">PassPort</MenuItem>
            <MenuItem value="voterscards">Voters Card</MenuItem>
          </Select>
        </FormControl>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="fName"
              label="First name / Prenom"
              type="text"
              value={fName}
              variant="filled"
              autoFocus
              onChange={(e) => setFName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lName"
              label="Last name / nom"
              type="text"
              value={lName}
              variant="filled"
              autoFocus
              onChange={(e) => setLName(e.target.value)}
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="text"
            value={address}
            variant="filled"
            autoFocus
            onChange={(e) => setAddress(e.target.value)}
          />

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <TextField
              id="date"
              label="DOB"
              name="DOB"
              type="date"
              defaultValue="1970-01-01"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              margin="normal"
            />
            <TextField
              id="date"
              label="Issue Date"
              name="issueDate"
              type="date"
              defaultValue="1970-01-01"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              margin="normal"
            />
            <TextField
              id="date"
              label="Expiry Date"
              name="expiryDate"
              type="date"
              defaultValue="1970-01-01"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              margin="normal"
            />
          </Box>
          {docType === "idcards" ? (
            <IdCard />
          ) : docType === "voterscards" ? (
            <VotersCard />
          ) : (
            <Passport />
          )}

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddNewDoc;
