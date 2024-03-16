 "use client"
import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import UserPage from '@/pages/Userpage/UserPage';
import Image from 'next/image';
//import { useNavigate } from "react-router-dom";


type MainpagenavProps = {
    
};

const Mainpagenav:React.FC<MainpagenavProps> = () => {
    const [user] = useAuthState(auth);
    
    const [isClick,setisClick] = useState(false);
    const toogleNavbar = (): void =>{
        setisClick(!isClick);
    }


    return (
        <>
        {/* <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-green text-dark-gray-7'>
			<div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href='/' className='h-[22px] flex-1'>
            <Image src='/as service color.png' alt='Logo' height={150} width={150} className='custom-logo'/>
        </Link>
	

        <div className='flex items-center space-x-4 flex-1 justify-end'>
        <div>
                <a
                    href='/Forms'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Register Yourself as a Service Man
                </a>
            </div>
            <div>
                <a
                    href='/Servicelist'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Find Service
                </a>
            </div>
            
               
                {!user && (

						<Link
							href='/auth'
						>
							<button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out'>Sign In</button>
						</Link>
					)}
					{user && (
						<div className='cursor-pointer group relative'>
							<Image src='/avatar.png' alt='Avatar' className=' h-8 w-8 rounded-full' width={150} height={150} />
							<div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</div>
					)} 
              		{user && <Logout/>}

        </div>

        <div className="md:hidden flex items-center">
            <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white 
            hover: text-white focus: outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toogleNavbar}
            >
                {isClick ? (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                )}
            </button>
        </div>
    </div>
    {isClick && (
        <div className="md:hidden">
           <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
           <a
                    href='/Forms'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange block hover:bg-dark-fill-2'
                >
                    Register Yourself as a Service Man
                </a>
            </div>
            <div>
                <a
                    href='/Servicelist'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange block hover:bg-dark-fill-2'
                >
                    Find Service
                </a>
            </div>
            
               
                {!user && (

						<Link
							href='/auth'
						>
							<button className='bg-brand-orange text-white block px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out'>Sign In</button>
						</Link>
					)}
					{user && (
						<div className='cursor-pointer group relative block'>
							<Image src='/avatar.png' alt='Avatar' className=' h-8 w-8 rounded-full' width={150} height={150} />
							<div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</div>
					)} 
              		{user && <Logout/>}
            </div> 
       
    )}
</nav> */}

<nav className='px-5 bg-dark-green'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link href='/' className='h-[22px] flex-1'>
                        <Image src='/as service color.png' alt='Logo' height={150} width={150} className='custom-logo'/>
                    </Link>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='ml-4 flex items-center space-x-4'>
                <a
                    href='/Forms'
                    target=''
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Register Yourself as a Service Man
                </a>
                <a
                    href='/Servicelist'
                    target=''
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Find Service
                </a>   
                {!user && (

                        <Link
                            href='/auth'
                        >
                            <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                        hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                        transition duration-300 ease-in-out'>Sign In</button>
                        </Link>
                        )}
                        {user && (
                        <div className='cursor-pointer group relative'>
                            <Image src='/avatar.png' alt='Avatar' className=' h-8 w-8 rounded-full' width={150} height={150} />
                            <div
                                className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
                                z-40 group-hover:scale-100 scale-0 
                                transition-all duration-300 ease-in-out'
                            >
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        </div>
                        )} 
                        {user && <Logout/>} 
                </div>
            </div>


            <div className="md:hidden flex items-center">
            <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white 
            hover: text-white focus: outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toogleNavbar}
            >
                {isClick ? (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                )}
            </button>
        </div>

        </div>
    </div>
    {isClick && (
        <div className="md:hidden">
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
                    href='/Forms'
                    target=''
                    rel='noreferrer'
                    className='block bg-dark-fill-3 py-2 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Register Yourself as a Service Man
                </a>
                <a
                    href='/Servicelist'
                    target=''
                    rel='noreferrer'
                    className='block bg-dark-fill-3 py-2 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Find Service
                </a>  

                <div className='flex items-center space-x-4 flex-1 justify-start'> 
                {!user && (

                        <Link
                            href='/auth'
                        >
                            <button className='block bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                        hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                        transition duration-300 ease-in-out'>Sign In</button>
                        </Link>
                        )}
                        {user && (
                        <div className=' cursor-pointer group relative'>
                            <Image src='/avatar.png' alt='Avatar' className=' block h-8 w-8 rounded-full' width={150} height={150} />
                            <div
                                className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
                                z-40 group-hover:scale-100 scale-0 
                                transition-all duration-300 ease-in-out'
                            >
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        </div>
                        )} 
                        {user && <Logout/>} 
                    </div>
            </div>
        </div> 
    )}
</nav>


</>
    );
}
export default Mainpagenav;