import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { logOut } from '../utilities';

const NavBar = ({user, setUser, needsToSignup, setNeedsToSignup}) => {

    const clickOnLogin = () => {
        setNeedsToSignup(false)
    }

    const clickOnSignup = () => {
        setNeedsToSignup(true)
    }
    
    const loggedOut = async() => {
        setUser(await logOut(user))
    }
    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container style={{display : "flex"}}>
                    <Navbar.Brand as={Link} to='/' >Progressive Overload Tracker</Navbar.Brand>
                    <Nav className="ms-auto">
                        <div style={{display :"flex", alignItems:"center"}} >
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/'>Exercises</Nav.Link>
                            <Nav.Link as={Link} to='/'>Nutrition</Nav.Link>
                        </div>
                        {user ? 
                            <>
                                <Button variant='outline-light' onClick={loggedOut} >Log Out</Button>
                            </> 
                            : 
                            <>
                                <Button size='sm' onClick={clickOnSignup} disabled={needsToSignup ? true : false} ><Nav.Link as={Link} to='/signup/'>Register</Nav.Link></Button>
                                <Button size='sm' onClick={clickOnLogin} disabled={needsToSignup ? false : true}><Nav.Link as={Link} to='/signup/'>Login</Nav.Link></Button>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;