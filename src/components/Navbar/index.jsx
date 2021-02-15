import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarBrand from "./NavbarBrand";
import { useHistory } from "react-router-dom";

const NavbarComponent = () => {
  const [input, setInput] = useState(null);
  const { push } = useHistory();

  const pressSearch = (event) => {
    setInput(event.target.value);
  };
  const onclick = () => {
    push(`/search/${input}`);
  };

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Link to='/'>
          <NavbarBrand />
        </Link>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/' className='mx-3'>
              Home
            </Nav.Link>
            <Nav.Link href='/categories/wallpaper' className='mx-3'>
              Wallpapers
            </Nav.Link>
            <NavDropdown title='Categories' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/categories/animals'>
                Animals
              </NavDropdown.Item>
              <NavDropdown.Item href='/categories/peoples'>
                Peoples
              </NavDropdown.Item>
              <NavDropdown.Item href='/categories/nature'>
                Nature
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              onChange={pressSearch}
              value={input}
            />
            <Button variant='outline-info' onClick={onclick}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
