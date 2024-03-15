import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase/firebase';
import Topbar from '@/components/Topbar/Topbar';
import { useRouter } from 'next/router';

type Service = {
  id: string; // Add an ID field to uniquely identify each service
  service: string;
  // Add other properties as needed
}

const Servicelist: React.FC = () => {
  const [uniqueServices, setUniqueServices] = useState<Service[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUniqueServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'Users'));
        const servicesData: Service[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id; // Get the ID of the document
          const { service } = data;
          servicesData.push({ id, service });
        });
        // Filter out unique services
        const uniqueServiceSet = new Set(servicesData.map((service) => service.service));
          const uniqueServiceArray = Array.from(uniqueServiceSet).map((service, index) => ({ id: index.toString(), service }));
          setUniqueServices(uniqueServiceArray);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchUniqueServices();
  }, []); 

  const handleServiceDetails = (selectedService: string) => {
    // Redirect to the details page with the selected service
    router.push(`/UserPage?service=${selectedService}`);
  };

  return (
    <>
      <Topbar/>
      {/* Display unique service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
        {uniqueServices.map((service, index) => (
          <div key={index} className="p-4 bg-white shadow-2xl rounded-md">
            <h2 className="text-2xl font-bold mb-2">{service.service}</h2>
            <button 
              onClick={() => handleServiceDetails(service.service)} 
              className="bg-brand-orange hover:bg-brand-orange-s text-white py-2 px-3 rounded"
            >
              View More Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Servicelist;
