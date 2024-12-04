import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { logOut } from '../utilities';


const NavBar = ({user, setUser}) => {
    const loggedOut = async() => {
        setUser(await logOut(user))
    }
    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' >Fitness App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/signup/'>Features</Nav.Link>
                        {user ? 
                        <>
                            <Button onClick={loggedOut} >Log Out</Button>
                        </> : null
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;