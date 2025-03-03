import React from 'react'
import { Container, Navbar,Nav} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <Navbar bg='success' variant='dark'>
        <Container>
            <Navbar.Brand to='/'><strong>Employee Managment System</strong></Navbar.Brand>
            <Nav className ='ml-auto'>
                <Nav.Link as={Link}to="/">Employee</Nav.Link>
                <Nav.Link as={Link}to="/employee">Post Employee</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header