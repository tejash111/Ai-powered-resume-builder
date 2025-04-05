import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import Header from "../components/header";
import "../index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const {user,isSignedIn}=useUser();
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center relative overflow-hidden">
      <div className="w-full">
        <Header />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="absolute top-5 right-5"
      >
       
      </motion.div>
      
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center px-6 mt-16"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-gray-800 to-black text-transparent bg-clip-text">
          Professional Resumes, Instantly
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Get a job or get Fuc*ed,Choise is yours
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-xl shadow-lg transition duration-300"
        >
  
          {
        isSignedIn?
         <div className='flex gap-3 items-center'> 
         <Link to={"/dashboard"}>
         <button className="">Dashboard</button>
         </Link>
          
         </div>
            :
           (
                               <Link to="/auth/sign-in">
                                   <button className="">
                                       Get Started
                                   </button>
                               </Link>
                           )

        }
        </motion.button>
      </motion.section>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-gray-200 to-gray-400 opacity-30 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
};

export default Home;