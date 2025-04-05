import React from 'react';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Home } from 'lucide-react';

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className='w-full bg-white p-3 px-5 sm:px-10 flex justify-between items-center shadow-md'>
            {/* Logo Section */}
            <div className='flex items-center gap-2 text-xl font-semibold'>
                <Link className='flex' to={"/"}>
                <img src={logo} alt="Logo" width={50} height={50} />
                <span className='text-gray-900 tracking-wide'>ᴘɪᴛᴄʜᴘᴇʀꜰᴇᴄᴛ</span>
                </Link>
            </div>

            {/* Navigation Section */}
            {
                isSignedIn ? (
                    <div className='flex gap-4 items-center'>
                        <Link to="/dashboard">
                            <button className='px-4 py-2 bg-gray-900 font-semibold text-white rounded-md shadow-md hover:bg-gray-800 transition cursor-pointer'>
                                Dashboard
                            </button>
                        </Link>
                        <UserButton />
                    </div>
                ) : (
                    <Link to="/auth/sign-in">
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 transition">
                            Get Started
                        </button>
                    </Link>
                )
            }
        </div>
    );
}

export default Header;
