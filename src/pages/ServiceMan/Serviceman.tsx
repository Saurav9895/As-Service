import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from '@/components/Topbar/Topbar';

type ServicemanProps = {
    
};

const Serviceman:React.FC<ServicemanProps> = () => {
    
    return (
        
        <div className="full-page">
      <form>
        <div className='detail'>
            <div className="f-name">
        First Name : <input type="text" name="" id="" />
        </div>
            <div className="m-name">
        Middle Name : <input type="text" name="" id="" />
        </div>
            <div className="l-name">
        Last Name : <input type="text" name="" id="" />
        </div>
      
        </div>
        <div className='detail'>
            <div className="f-name">
        Email Id : <input type="email" name="" id="" />
        </div>
            <div className="m-name">
        Contact Number : <input type="number" name="" id="" />
        </div>
            <div className="l-name">
        Last Name : <input type="text" name="" id="" />
        </div>
      
        </div>

      </form>
    </div>
    
    );
}
export default Serviceman;