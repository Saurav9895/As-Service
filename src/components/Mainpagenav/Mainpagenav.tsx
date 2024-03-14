import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import UserPage from '@/pages/Userpage/UserPage';
//import { useNavigate } from "react-router-dom";


type MainpagenavProps = {
    
};

const Mainpagenav:React.FC<MainpagenavProps> = () => {
    const [user] = useAuthState(auth);
    


    return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-green text-dark-gray-7'>
			<div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href='/' className='h-[22px] flex-1'>
            <img src='/as service color.png' alt='Logo' height={150} width={150} className='custom-logo'/>
        </Link>

        
       
					
			

        <div className='flex items-center space-x-4 flex-1 justify-end'>
        <div>
                <a
                    href='/Forms'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Register Yourself
                </a>
            </div>
            <div>
                <a
                    href='/UserPage'
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
							<img src='/avatar.png' alt='Avatar' className=' h-8 w-8 rounded-full' />
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
</nav>
    );
}
export default Mainpagenav;