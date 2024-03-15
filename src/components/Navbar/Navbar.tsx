import { authModalState } from '@/atoms/authModalAtoms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, isOpen: true }));
    }
    return (
        
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
        <Link href='/' className='flex items-center justify-center h-20'>
        <Image src='/as service color.png' alt='as service' height={150} width={150} className='top-logo'/>
        </Link>
        <div className='flex items-center'>
        <button
					className='loginbottonfornav'
                onClick={handleClick}
				>
					Login
				</button>
			</div>
        </div>
    );
}
export default Navbar;