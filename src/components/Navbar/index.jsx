import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  FormControl
} from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='#home'>Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Wallpapers</Nav.Link>
            <NavDropdown title='Categories' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Animals</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Peoples</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Nature</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
