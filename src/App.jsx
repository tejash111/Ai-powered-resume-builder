import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/*we render childeren through this} */}
     <Outlet/>
    </div>
  )
}

export default App