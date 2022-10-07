import React, { useState } from "react";
import { Box, TextField, Container, CssBaseline, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";

const AddNewDoc = (props) => {
  const [name, setName] = useState("");
  return (
    <Container component="main" maxWidth="xs">
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container components="main" maxWidth="xs" sx={{backgroundColor:"white"}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add new Document form
            </Typography>

            <Box
              component="form"
              onSubmit={props.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Owners Name"
                type="text"
                id="ownersName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Box>
          </Box>
        </Container>
      </Modal>
    </Container>
  );
};

export default AddNewDoc;
