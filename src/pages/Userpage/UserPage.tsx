// UserPage component
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '@/firebase/firebase';
import Topbar from '@/components/Topbar/Topbar';
import Link from 'next/link';

type Service = {
  id: string; // Add an ID field to uniquely identify each user
  Fname: string;
  Mname?: string;
  Lname: string;
  service: string;
  City: string;
  // Add other properties as needed
}

const UserPage: React.FC = () => {
  const [serviceList, setServiceList] = useState<Service[]>([]);
  const router = useRouter();
  const { service } = router.query;

  useEffect(() => {
    const fetchServiceList = async () => {
      try {
        const q = query(collection(firestore, 'Users'), where('service', '==', service));
        const querySnapshot = await getDocs(q);
        const servicesData: Service[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id; // Get the ID of the document
          const { Fname, Mname, Lname, service, City } = data;
          servicesData.push({ id, Fname, Mname, Lname, service, City });
        });
        setServiceList(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    if (service) {
      fetchServiceList();
    }
  }, [service]);

  return (
    <>
      <Topbar/>
            {/* Display service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
                {serviceList.map((service, index) => (
                    <div key={index} className="p-4 bg-white shadow-2xl rounded-md">
                        <h2 className="text-2xl font-bold mb-2">{service.Fname + (service.Mname ? ' ' + service.Mname : '') + ' ' + service.Lname}</h2>
                        <p className="mb-2" style={{ color: 'gray' }}>{service.service}</p>
                        <p className="mb-2" style={{ color: 'gray' }}>{service.City}</p>
							<Link href={`/Serviceperson?id=${service.id}`}>
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
