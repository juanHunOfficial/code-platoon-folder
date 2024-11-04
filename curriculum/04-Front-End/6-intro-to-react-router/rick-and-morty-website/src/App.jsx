import './App.css'
import { Outlet, Link } from "react-router-dom"
import NavbarComp from "./components/NavbarComp"

function App() {

  return (
    <>
    <NavbarComp />
      <h1>Pick one, anyone</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about/">About</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default App
