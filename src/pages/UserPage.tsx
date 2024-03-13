import React from 'react';
import Topbar from '@/components/Topbar/Topbar';
import Servicelist from '@/components/Servicelist/Servicelist';

type UserPageProps = {
    
};

const UserPage:React.FC<UserPageProps> = () => {
    
    return(

        <>
        
        
        <main className='bg-white min-h-screen'>
				<Topbar />
                {/* <SearchSection/> */}
				<h1 className='text-2xl text-center text-black dark:text-white font-medium
							uppercase mt-10 mb-5'>
							Find Your Service Person
						</h1>
				<div className="mainsection">

						<div className="firstsection">

						<h1 className='text-2xl text-center text-black dark:text-white font-medium
							uppercase mt-10 mb-5'>
							Plumber
						</h1>
						<hr />
							<div className='relative overflow-x-auto mx-auto px-6 pb-10 mt-5'>
										<table className='text-center text-gray-500 dark:text-gray-400  w-full mx-auto'>
											<Servicelist/>
										</table>
							</div>
						</div>

						<div className="secondsection">

							<h1 className='text-2xl text-center text-black dark:text-white font-medium
								uppercase mt-10 mb-5'>
								Electrician
							</h1>
							<hr />
								<div className='relative overflow-x-auto mx-auto px-6 pb-10 mt-5'>
											<table className='text-center text-gray-500 dark:text-gray-400  w-full mx-auto'>
												<Servicelist/>
											</table>
								</div>
						</div>
				</div>
				<div className="mainsection">

						<div className="firstsection">

						<h1 className='text-2xl text-center text-black dark:text-white font-medium
							uppercase mt-10 mb-5'>
							Painter
						</h1>
						<hr />
							<div className='relative overflow-x-auto mx-auto px-6 pb-10 mt-5 '>
										<table className='text-center text-gray-500 dark:text-gray-400  w-full mx-auto'>
											<Servicelist/>
										</table>
							</div>
						</div>

						<div className="secondsection">

							<h1 className='text-2xl text-center text-black dark:text-white font-medium
								uppercase mt-10 mb-5'>
								Mechanic
							</h1>
							<hr />
								<div className='relative overflow-x-auto mx-auto px-6 pb-10 mt-5'>
											<table className='text-center text-gray-500 dark:text-gray-400  w-full mx-auto'>
												<Servicelist/>
											</table>
								</div>
						</div>
				</div>
		</main>
        </>
    );
}
export default UserPage;