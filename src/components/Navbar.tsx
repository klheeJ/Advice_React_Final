import { Link } from "react-router-dom"
import { signInWithPopup, signOut, User } from "firebase/auth"
import { auth, Providers } from '../config/firebase'
import { useState } from 'react'


interface NavbarProps {
  userNow: User 
}

function Navbar(props: NavbarProps) {

  const [loggedIn, setLoggedIn] = useState(!auth.currentUser)

  const signInOnClick = async () => {
      const response = await signInWithPopup(auth, Providers.google);
      if (response.user){
        setLoggedIn(!loggedIn)
      }
    };

  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
  };
  
  return (
    <div className='flex flex-row justify-center bg-black'>
    <div className="flex flex-row py-14 space-x-9 font-abc items-center">
          <ul className="flex text-white ml-4 space-x-8">
              <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
          </ul>
          <div className="flex text-white border-4 h-10 px-3 py-2 items-center">Get Your Free Advice Today</div>
          <ul className="flex text-white ml-4 space-x-8">
              <li><Link to="/add" className="hover:text-purple-300">Your List</Link></li>
              <li><Link to="/view" className="hover:text-purple-300">Get Advice</Link></li>

              {
               !props.userNow ? 

              <li><Link to="/login" onClick={ ()  => {signInOnClick()}} className="hover:text-purple-300">Login</Link></li>
              :
              <li><Link to="/login" onClick={ ()  => {signOutOnClick()}} className="hover:text-purple-300">Sign out</Link></li>
              }

          </ul>
          
    </div>
    </div>
  )
  }


export default Navbar
