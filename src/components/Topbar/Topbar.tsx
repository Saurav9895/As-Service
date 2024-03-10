import Link from 'next/link';
import React from 'react';
import Logout from '../Buttons/Logout';

type TopbarProps = {
    
};

const Topbar:React.FC<TopbarProps> = () => {
    
    return(
        <nav className='relative flex h-[60px] w-full shrink-0 items-center px-5 bg-dark-green text-dark-gray-7'>
        <div className={`flex w-full items-center justify-between "max-w-[1200px] mx-auto" : ""}`}>
    <Link href='/' className='h-[22px] flex-1'>
        <img src='/as service color.png' alt='Logo' className='custom-logo'/>
    </Link>

    


    <div className='flex items-center space-x-4 flex-1 justify-end'>
        
            
                    <div className='cursor-pointer group relative'>
                        <img src='/avatar.png' alt='Avatar' className=' h-8 w-8 rounded-full' />
                        <div
                            className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
                            z-40 group-hover:scale-100 scale-0  
                            transition-all duration-300 ease-in-out'
                        >
                            {/* <p className='text-sm'>{user.email}</p> */}
                        </div>
                    </div>
                 
                  <Logout/>
    

                              
    
    </div>
</div>
</nav>
    );
}
export default Topbar;