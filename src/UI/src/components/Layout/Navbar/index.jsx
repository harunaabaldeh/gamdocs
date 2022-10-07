import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RegisterForm from '../../forms/NewDocs';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);
  
  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor: "#092749"}}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>GamDocs</Link>
        </Typography>
        <Button color="inherit" onClick={handleOpen}>Add</Button>
      </Toolbar>
    </AppBar>
    <RegisterForm handleOpen={handleOpen} handleClose={handleClose} open={open}/>
  </Box>
  )
}

export default Navbar