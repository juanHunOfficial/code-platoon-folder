import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { logOut } from '../utilities';
import { getTrackers } from '../utilities';
import '../styles.css'

const NavBar = ({user, setUser, needsToSignup, setNeedsToSignup, setUserTrackers}) => {

    const clickOnLogin = () => {
        setNeedsToSignup(false)
    }

    const clickOnSignup = () => {
        setNeedsToSignup(true)
    }
    
    const loggedOut = async() => {
        setUser(await logOut(user))
    }

    const handleClick = async() => {
        let data = await getTrackers()
        setUserTrackers(data)
    }

    return(
        <>
            <Navbar className='navbar' data-bs-theme="dark">
                <Container style={{display : "flex"}}>
                    <Navbar.Brand 
                    className='navbar_brand'
                        as={Link} 
                        to='/' >
                        Progressive Overload Tracker
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <div style={{display :"flex", alignItems:"center"}} >
                            <Nav.Link 
                                className='navbar_text'
                                as={ Link } 
                                to='/' >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                className='navbar_text'
                                as={ Link } 
                                to='/exercise/'>
                                Exercises
                            </Nav.Link>
                            <Nav.Link 
                                className='navbar_text'
                                as={ Link } 
                                to='/nutrition/'>
                                Nutrition
                            </Nav.Link>
                            {user ? <>
                                <Nav.Link 
                                    className='navbar_text'
                                    as={ Link } 
                                    to='/trackers/' 
                                    onClick={handleClick}>
                                    Your Fitness
                                </Nav.Link>
                            </>: null}
                        </div>
                        {user ? 
                            <>
                                <Button 
                                    variant='outline-light' 
                                    onClick={loggedOut} >
                                    Log Out
                                </Button>
                            </> 
                            : 
                            <>
                                <Button 
                                    size='sm' 
                                    onClick={clickOnSignup} 
                                    disabled={needsToSignup ? true : false} >
                                        <Nav.Link 
                                            as={Link} 
                                            to='/signup/'>
                                            Register
                                        </Nav.Link>
                                </Button>
                                <Button 
                                    size='sm' 
                                    onClick={clickOnLogin} 
                                    disabled={needsToSignup ? false : true}>
                                        <Nav.Link 
                                            as={Link} 
                                            to='/signup/'>
                                            Login
                                        </Nav.Link>
                                </Button>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;