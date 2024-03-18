// UserPage component
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, firestore } from '@/firebase/firebase';
import Topbar from '@/components/Topbar/Topbar';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';

type Service = {
  id: string; // Add an ID field to uniquely identify each user
  Fname: string;
  Mname?: string;
  Lname: string;
  service: string;
  City: string;
  About: string;
  // Add other properties as needed
}

const UserPage: React.FC = () => {
  const [user] = useAuthState(auth);

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
          const { Fname, Mname, Lname, service, City, About } = data;
          servicesData.push({ id, Fname, Mname, Lname, service, City, About });
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
      {user && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
          {serviceList.map((service, index) => (
            <div key={index} className="p-4 bg-white shadow-2xl rounded-md">
              
              <div className="w-full h-[120px] bg-gradient-to-r from-light-green via-light-idx to-light-green">
                     <div className="pl-2 pt-2">                
                    <h2 className="text-2xl font-bold mb-2 text-white">{service.Fname + (service.Mname ? ' ' + service.Mname : '') + ' ' + service.Lname}</h2>
                  <p className="mb-2" style={{ color: 'white' }}>{service.service}</p>
                  <p className="mb-2" style={{ color: 'white' }}>{service.City}</p>
                  </div> 
                </div>
                <b><p className="ml-1.5 mt-2" style={{ color: 'gray' }}>Ratings</p></b>
                <div className="rating">
                  <input type="radio" id="star5" name="rating" value="5"/>
                  <label htmlFor="star5">&#9733;</label>
                  <input type="radio" id="star4" name="rating" value="4" checked/>
                  <label htmlFor="star4">&#9733;</label>
                  <input type="radio" id="star3" name="rating" value="3"/>
                  <label htmlFor="star3">&#9733;</label>
                  <input type="radio" id="star2" name="rating" value="2"/>
                  <label htmlFor="star2">&#9733;</label>
                  <input type="radio" id="star1" name="rating" value="1"/>
                  <label htmlFor="star1">&#9733;</label>
                </div>
                <b><p className="ml-1.5" style={{ color: 'gray' }}>Service</p></b>
                <p className="mb-2 ml-1.5" style={{ color: 'black' }}>{service.About}</p>


              <Link href={`/Serviceperson?id=${service.id}`}>
                <button className="bg-brand-orange hover:bg-brand-orange-s text-white py-2 px-3 rounded mt-3">
                  View More Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
      {!user && (
        <div className="full-page">
          <div className="sorry">
            <img src="/oops.png" alt="" />        
            <h3 className='h3'>Please Login First</h3>        
          </div>  
        </div>
      )}
    </>
  );
};

export default UserPage;