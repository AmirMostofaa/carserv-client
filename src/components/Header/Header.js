import React, { useContext } from 'react';
import {
  Link
} from "react-router-dom";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser] = useContext(UserContext);

    return (
        <div>
        
        
            <Navbar  expand="lg" variant="dark" className="bg-brand p-3">
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                </Link>
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ml-auto my-2 my-lg-0" style={{ maxHeight: 'auto' }} navbarScroll >

                    <Nav.Link >
                        <Link to="/home" className="mr-4">
                        Home
                        </Link>
                    </Nav.Link>

                    <Nav.Link >
                        <Link to="" className="mr-4">
                        About Us
                        </Link>
                    </Nav.Link>

                    <Nav.Link >
                    <Link to="" className="mr-4">
                     Services
                    </Link>
                    </Nav.Link>

                    <Nav.Link >
                    <Link to="/admin/bookingList" className="mr-4">
                     Admin
                    </Link>
                    </Nav.Link>

                    <Nav.Link >
                        <Link to="" className="mr-4">
                        Contact us
                        </Link>
                    </Nav.Link>

                    {
                        loggedInUser.isSignIn ?
                        <Nav.Link>
                            <Link to="/admin/bookingList">
                                <img src={loggedInUser.image} alt="" />
                            </Link>
                        </Nav.Link>

                        :
                        <Link to="/login">
                        <Button>Login</Button>
                        </Link>
                    }

                    

                </Nav>
                
            </Navbar.Collapse>
            </Container>
            </Navbar>

        



        
        </div>
    );
};

export default Header;