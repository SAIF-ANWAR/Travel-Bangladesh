import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='fs-5 fw-normal'>
            <Container>
                <Navbar.Brand href="#home" as={Link} to="/home">
                    <img height={56} width={102} className="" src={logo} alt="" />
                </Navbar.Brand>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search your destination"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" className='mr-2'>Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5 ps-5">
                        <Nav.Link className='ps-4' href="#home" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='ps-4' href="#destination" as={Link} to="/destination">Destination</Nav.Link>
                        <Nav.Link className='ps-4' href="#blog" as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link className='ps-4' href="#contact" as={Link} to="/contact">Contact</Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav >
                        {/* <Nav.Link as={Link} to="/login"  className=''>Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup" className='' >
                            Sign Up
                        </Nav.Link> */}
                        <Link to="/login" style={{ backgroundColor: '#F9A51A' }} className="btn ms-2 px-4">Login</Link>
                        <Link to="/signup" style={{ backgroundColor: '#F9A51A' }} className="btn ms-2 px-4">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
<Link></Link>
export default Header;