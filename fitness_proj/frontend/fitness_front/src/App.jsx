import { Outlet, useLoaderData } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(useLoaderData())
  
  return (
    <>
      <h1>Welcome {user ? user : null}</h1>
      <NavBar user={user} setUser={setUser}/>
      <Outlet context={{user, setUser}}/>
    </>
  )
}

export default App
