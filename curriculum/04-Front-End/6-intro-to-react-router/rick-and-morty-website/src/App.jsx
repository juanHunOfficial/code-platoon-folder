import { Outlet, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return ( 
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={ Link } to="/" >Home</Nav.Link>
            <Nav.Link as={ Link } to="about/">About</Nav.Link>
            <Nav.Link as={ Link } to="character-lookup/">Character Look Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Outlet/>
    </>
  )
}

export default App
