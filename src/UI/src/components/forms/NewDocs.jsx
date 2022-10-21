import React, { useState } from "react";
import { Box, TextField, CssBaseline, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IdCard from './IdCard';
import VotersCard from './VotersCard'
const AddNewDoc = (props) => {
  const [docType, setDocType] = useState("");
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [address, setAddress] = useState("");

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
            <MenuItem value="idCard">ID Card</MenuItem>
            <MenuItem value="passPort">PassPort</MenuItem>
            <MenuItem value="votersCard">Voters Card</MenuItem>
          </Select>
        </FormControl>

        <Box
          component="form"
          onSubmit={props.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          {docType === 'idCard' ? <IdCard/> : <VotersCard/>}
        </Box>
      </Box>
    </Modal>
  );
};

export default AddNewDoc;
