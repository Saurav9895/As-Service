
import Link from 'next/link';
import React from 'react';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return(
        <nav className='relative flex h-[40px] w-full shrink-0 items-center justify-center px-5 bg-dark-green text-dark-gray-7'>
            
        © Copyright 202 <Link href='https://as-service.vercel.app/'>4 As Service - A </Link> RR  
       
    </nav>
    
    );
}
export default Footer;