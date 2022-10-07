import React from 'react'
import Navbar from './Navbar/index'
import Container from '@mui/material/Container'
import GambiaFlag from '../gambiaflag/GambiaFlag'


const index = (props) => {
  return (
   <div>
    <Navbar />
    <GambiaFlag/>

    <Container maxWidth="md">
    {props.children}
    </Container>
   
   </div>
  )
}

export default index