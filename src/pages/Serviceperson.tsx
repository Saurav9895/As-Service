
import Topbar from '@/components/Topbar/Topbar';
import { MoreOutlined } from '@ant-design/icons';
import React from 'react';


type ServicepersonProps = {
    
};

const Serviceperson:React.FC<ServicepersonProps> = () => {
    
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
                            <span className="truncate font-medium text-[22px] text-[#363A43]">Saurav Kumar Yadav</span>
                            <div className="truncate text-[19px] text-[#363A43]">Plumber </div>
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