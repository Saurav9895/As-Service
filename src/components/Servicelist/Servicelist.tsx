import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type ServicelistProps = {};

const Servicelist: React.FC<ServicelistProps> = () => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push('/components/Serviceperson/Serviceperson');
//   };

  return (
    <>
      <tbody className="text-white">
        <tr className="">
          <td className={'px-6 py-4'}>
            <p className='text-black'>Saurav Yadav</p>
          </td>
          <td className={'px-6 py-4'}>
            <p className='text-black'>Plumber</p>
          </td>
          <td>
            <Link href="/Serviceperson">
            <button className="bg-brand-orange hover:bg-brand-orange-s text-white py-2 px-3 rounded">
              View More Details
            </button>
            </Link>
          </td>
        </tr>
        <tr className="">
          <td className={'px-6 py-4'}>
            <p className='text-black'>Saurav Yadav</p>
          </td>
          <td className={'px-6 py-4'}>
            <p className='text-black'>Plumber</p>
          </td>
          <td>
            <Link href="/Serviceperson">
            <button className="bg-brand-orange hover:bg-brand-orange-s text-white py-2 px-3 rounded">
              View More Details
            </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Servicelist;
