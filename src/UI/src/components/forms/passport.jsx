import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Passport = () => {
  return (
    <React.Fragment>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="filled"
            autoFocus
           
          />
        
    </React.Fragment>
  )
}

export default Passport