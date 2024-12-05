import { Outlet, useLoaderData } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(useLoaderData())
  const [needsToSignup, setNeedsToSignup] = useState(false)
  return (
    <>
      <h1>Welcome {user ? user : null}</h1>
      <NavBar user={user} setUser={setUser} needsToSignup={needsToSignup} setNeedsToSignup={setNeedsToSignup}/>
      <Outlet context={{user, setUser, needsToSignup, setNeedsToSignup}}/>
    </>
  )
}

export default App
