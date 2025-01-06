import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
   <Container>
    <ul className='flex gap-x-4 font-bold text-lg'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">Service</a></li>
        <li><a href="/Contact">Contact</a></li>

   </ul>
   </Container>
  )
}

export default Navbar
