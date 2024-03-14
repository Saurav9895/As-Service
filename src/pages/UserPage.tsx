import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase/firebase'; // Import your Firebase configuration
import Topbar from '@/components/Topbar/Topbar';
import { IoSearchCircleOutline } from 'react-icons/io5';

type Service = {
    Fname: string;
    Mname: string;
    Lname: string;
    service: string;
    City: string; // Ensure City field is included in Service type
    // Add other properties as needed
}

type UserPageProps = {};

const UserPage: React.FC<UserPageProps> = () => {
    const [serviceList, setServiceList] = useState<Service[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchServiceList = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'Users'));
                const servicesData: Service[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // Assuming all necessary fields exist in your Firestore document
                    const { Fname, Mname, Lname, service, City } = data; // Extract City field
                    servicesData.push({ Fname, Mname, Lname, service, City }); // Include City in the Service object
                });
                setServiceList(servicesData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServiceList();
    }, []); // Empty dependency array ensures the effect runs only once after initial render

	

    return (
		<>
		<Topbar/>
		{/* Search section  */}
		<div className="wrap">
			<div className="search">
				<input type="text" className="searchTerm" placeholder="What are you looking for?"/>
				<button type="submit" className="searchButton">
					Search
				</button>
			</div>
		</div>

	{/* card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
            {serviceList.map((service, index) => (
                <div key={index} className="p-4 bg-white shadow-2xl rounded-md">
                    <h2 className="text-2xl font-bold mb-2" style={{ color: 'Black' }}>{service.Fname + ' ' + service.Mname + ' ' + service.Lname}</h2>
                    <p className="mb-2" style={{ color: 'gray' }}>{service.service}</p>
                    <p className="mb-2" style={{ color: 'gray' }}>{service.City}</p>
					<Link href={`/Serviceperson/`}>
                        <button className="bg-brand-orange hover:bg-brand-orange-s text-white py-2 px-3 rounded">
                            View More Details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
		</>
    );
};

export default UserPage;
