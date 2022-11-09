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
								name="oName"
								label="Last Name"
								type="text"
								id="lName"

							/>
    </React.Fragment>
  )
}

export default IdForm