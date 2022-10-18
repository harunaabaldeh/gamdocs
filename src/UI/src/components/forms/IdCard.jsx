import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const IdForm = () => {
  return (
    <React.Fragment>
        <TextField
            margin="normal"
            required
            fullWidth
            name="lName"
            label="Owners Name"
            type="text"
            id="ownersName"
            // value={lName}
            // onChange={(e) => setLName(e.target.value)}
            autoFocus
            variant="filled"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="text"
            // value={address}
            variant="filled"
            autoFocus
            // onChange={(e) => setAddress(e.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="fName"
              label="First name / Prenom"
              type="text"
              // value={fName}
              variant="filled"
              autoFocus
              // onChange={(e) => setFName(e.target.value)}
            />
          </Box>
    </React.Fragment>
  )
}

export default IdForm