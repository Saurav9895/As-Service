import { authModalState } from '@/atoms/authModalAtoms';
import AuthModal from '@/components/Modals/AuthModal';
import Login from '@/components/Modals/Login';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';
import { Router, useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';

type AuthPageProps = {};
const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState);
    const [user,loading,error] = useAuthState(auth)
    const [pageLoading, setPageLoading] = useState(true);

    const router = useRouter();

    // useEffect(() => {
	// 	if (user) router.push('/');
	// 	if (!loading && !user) setPageLoading(false);
	// }, [user, router, loading]);
    // if(pageLoading) return null;
    return (
    <div className='bg-gradient-to-b from-light-green to-dark-green h-screen relative'>
        <div className='max-w-7xl mx-auto'>

			<Navbar/>
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					<img src='/hero.png' alt='Hero img' width={700} height={700} />
				</div>
			{/* <Login/> */}
			
			{authModal.isOpen && <AuthModal/>}
		

			</div>
    </div>
    );
};
export default AuthPage;