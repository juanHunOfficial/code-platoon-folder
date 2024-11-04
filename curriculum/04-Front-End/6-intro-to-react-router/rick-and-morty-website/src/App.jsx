import './App.css'
import { Outlet, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return ( 
    <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
      />
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
