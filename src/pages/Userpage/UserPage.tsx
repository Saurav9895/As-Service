import React from 'react';
import SearchSection from './SearchSection';
import Topbar from '@/components/Topbar/Topbar';

type UserPageProps = {
    
};

const UserPage:React.FC<UserPageProps> = () => {
    
    return(

        <>
        <Topbar/>
        <SearchSection/>
        </>
    );
}
export default UserPage;