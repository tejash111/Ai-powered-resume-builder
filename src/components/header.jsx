import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
    const {user,isSignedIn}=useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-xl '>
            <div className='text-0.5xl'><img src={logo} width={100} height={100} />ᴘɪᴛᴄʜᴘᴇʀꜰᴇᴄᴛ</div>

        {
        isSignedIn?
         <div className='flex gap-3 items-center'> 
         <Link to={"/dashboard"}>
         <button className='btn mt-4 bg-gray-900 text-white '>Dashboard</button>
         </Link>
           
            <UserButton/>
         </div>
            :
            <Link to={"/auth/sign-in"}>
        <button className="btn mt-4 bg-gray-900 text-white ">Get Started</button>
        </Link>

        }

        
        </div>
    )
}

export default Header