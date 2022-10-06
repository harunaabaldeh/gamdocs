import React from 'react'
import Navbar from './Navbar/index'
import Container from '@mui/material/Container'

const index = (props) => {
  return (
   <div>
    <Navbar />
    <Container maxWidth="md">
    {props.children}
    </Container>
   
   </div>
  )
}

export default index