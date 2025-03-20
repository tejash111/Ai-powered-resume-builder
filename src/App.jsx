import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './components/header';


const App = () => {
  const {user,isLoaded,isSignedIn}=useUser();
  if (!isSignedIn && isLoaded){
    return <Navigate to={"auth/sign-in"}/>
  }
  return (
    <div>
      {/*we render childeren through this} */}
     <Header/>
     <Outlet/>
    </div>
  )
}

export default App