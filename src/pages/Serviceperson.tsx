
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase/firebase'; // Import your Firebase configuration
import Topbar from '@/components/Topbar/Topbar';
import { MoreOutlined } from '@ant-design/icons';


type Service  = {
    Fname: string;
    Mname: string;
    Lname: string;
    service: string;
    City: string;
    // Add other properties as needed
}
type ServicepersonProps = {
    
};

const Serviceperson:React.FC<ServicepersonProps> = () => {
    const [serviceDetails, setServiceDetails] = useState<Service | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const docRef = doc(firestore, 'Users', id as string);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const { Fname, Mname, Lname, service, City } = data as Service;
                    setServiceDetails({ Fname, Mname, Lname, service, City });
                } else {
                    console.error('User not found');
                }
            } catch (error) {
                console.error('Error fetching service details:', error);
            }
        };

        if (id) {
            fetchServiceDetails();
        }
    }, [id]);

    if (!serviceDetails) {
        return null;
    }
    return(
        <>
        <Topbar/>
        
        <main className="h-full w-full bg-white py-8 sm:px-32 lg:px-40 px-4">
            <div className="bg-white pb-[53px]">
                <div className="w-full h-[193px] bg-gradient-to-r from-pink-300 via-pink-100 to-yellow-100" />
                <div className="flex justify-between flex-row pt-[44px] items-center -mt-20 pl-[32px]">
                    <div className="flex flex-row items-center gap-[31px]">
                        <div className="relative bg-white w-[158px] h-[158px] border border-gray-200 rounded-full ">
                        <img src="avatar.png" alt="..." className="avatar-img rounded-circle " />
                        </div>
                        <div className='flex flex-col'>
                            <span className="truncate font-medium text-[22px] text-[#363A43]">{serviceDetails.Fname + (serviceDetails.Mname ? ' ' + serviceDetails.Mname : '') + ' ' + serviceDetails.Lname}</span>
                            <div className="truncate text-[19px] text-[#363A43]">{serviceDetails.service} </div>
                        </div>
                    </div>
                    <button className='h-[45px] bg-[#FFFFFF] border border-[#E3E3E3] font-bold text-[12px] text-[#1C274C] rounded-[7px] px-8 py-2 hover:bg-[#FCFCFC] hover:border-[#D9D9D9]'>
                        Follow
                    </button>
                </div>
            </div>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]"><b>Name :</b> Saurav Kumar Yadav</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]"><b>Email :</b> yadavsaurav98512@gmail.com</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">Contact Number: 9842483338</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">Service Charge: 1500</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border-x border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">Gender: Male</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">Qualification: B.Tech </span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">Address: Manohara Phant, Lokanthali</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">City: Bhaktapur</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">State/Provience: Bagmati</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
            <li className="w-full items-center border border-gray-200 hover:bg-[#FCFCFC] h-[65px] flex-1 bg-white px-[20px] flex-col flex justify-between md:flex-row gap-[10px] md:gap-[50px]">
                <span className="font-medium text-[13px] text-[#414141]">Postal/Zip Code: 562112</span>
                <button className="justify-center items-center flex border border-[#E3E3E3] h-[26px] w-[33px] rounded-[5px]"><MoreOutlined style={{ rotate: "90deg", stroke: "black", strokeWidth: 50 }} /></button>
            </li>
        </main>
        </>
        );
}
export default Serviceperson;