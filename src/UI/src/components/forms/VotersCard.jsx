import React from 'react'
import TextField from '@mui/material/TextField'

const VotersCard = () => {
  return (
    <React.Fragment>
      <TextField
            margin="normal"
            required
            fullWidth
            name="nin"
            label="NIN number"
            type="text"
            // value={nin}
            variant="filled"
            autoFocus
            // onChange={(e) => setNin(e.target.value)}
          />
    </React.Fragment>
  )
}

export default VotersCard