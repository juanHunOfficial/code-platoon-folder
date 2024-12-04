import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const testConnection = async() => {
    let response = await axios.get('http://127.0.0.1:8000/')
    console.log(response.data)
    if (!response.data.connected){
      console.log("not communicating with server")
    }
    else {
      console.log("communication established with server")
    }
  }  
  

  useEffect(()=>{
    testConnection()
  }, [])

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
