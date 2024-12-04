import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand > <Link to='/'>Fitness App</Link> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
                        <Nav.Link> <Link to='/signup/'> Features</Link> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;