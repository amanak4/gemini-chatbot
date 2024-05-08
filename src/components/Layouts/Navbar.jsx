import React, { useContext, useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './nav.css';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import NavLinks from './NavLinks';

function Navbar() {
    const navigateTo=useNavigate();
    const [seeProfile,setSeeProfile]=useState(false);
    const {isAuthrized,setIsAuthrized,user,setUser} = useContext(Context);
    // user="wjs";
    const location = useLocation();
    let Links =[
        {name:"Home",link:"/"},
        {name:"Diagnosis",link:"/diagnosis"},
        {name:"Planner",link:"/planner"},
        {name:"",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);
  let username='A';
  return (
    <>
    {location.pathname === '/login' || location.pathname === '/signup' ?<></>:
    <div className='bg-white shadow-md w-full h-auto fixed top-0 left-0 z-10'>
        <div className='shadow-md w-full fixed top-0 left-0 z-10 bg-white'>
           <div className='md:flex items-center justify-between py-4 md:px-10 px-7 bg-white'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>IntelliDoc</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all bg-white duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                      <li className={`md:ml-8 md:my-0 my-7 font-semibold ${location.pathname === link.link ? 'underline' : ''} `}>
                        <Link onClick={()=>setOpen(false)} to={link.link} className='text-gray-800 hover:text-blue-600 duration-500 hover:underline'>{link.name}</Link>
                    </li>
                    
                    ))
                }
               {isAuthrized? <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static' onClick={()=>navigateTo('/login')}>Get Started</button>:
               <div> <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static rounded-full' onClick={()=>setSeeProfile(!seeProfile)}>{username}</button>
            
               </div>}

               {seeProfile?<ul className='text-sm text-start flex-col 
                  line leading-6 block mt-3 lg:top-20 lg:right-0 lg:hidden'>
               <li>
               <Link className= '  text-gray-800 hover:text-blue-600 duration-500 hover:underline font-bold mb-4 text-lg' to='/profile' onClick={()=>setOpen(false)}>Profile</Link>
               </li>
               <li>
               <Link className= '  hover:text-blue-600 duration-500 hover:underline font-bold mb-4 text-lg' to='/Dashboard' onClick={()=>setOpen(false)}>Dashboard</Link>
               </li>
               <li><Link className='btn mt-3 bg-blue-600 text-white md: font-semibold px-3 py-1  
               duration-500 md:static rounded-full' onClick={()=>setOpen(false)} to={'/login'}>Logout</Link>
               </li>
               </ul>:<></>}
            </ul>
            
            {/* button */}
           </div>
           
        </div>
        {seeProfile?<ul className='text-sm text-start flex-col absolute top-56 z-10  bg-white line leading-6 hidden px-3 lg:top-20 right-0 lg:block'>
               <li>
               <Link className= '  text-gray-800 hover:text-blue-600 hover:underline duration-500 font-bold mb-4 text-lg' to='/profile' onClick={()=>setOpen(false)}>Profile</Link>
               </li>
               <li>
               <Link className= '  text-gray-800 hover:text-blue-600 hover:underline duration-500 font-bold mb-4 text-lg' to='/Dashboard' onClick={()=>setOpen(false)}>Dashboard</Link>
               </li>
               <li><Link className='btn bg-blue-600 text-white md: font-semibold px-3 py-1 duration-500 md:static rounded-full' onClick={()=>setOpen(false)} to={'/login'}>Logout</Link>
               </li>
               </ul>:<></>}
        </div>
    }
    </>
  )
}

export default Navbar


