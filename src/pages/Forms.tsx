import FormBar from '@/FormBar/FormBar';
import Topbar from '@/components/Topbar/Topbar';
import { auth, firestore } from '@/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

type FormsProps = {
    
};


const Forms:React.FC<FormsProps> = () => {
    const [user] = useAuthState(auth);

    const [inputs,setInputs] = useState({
    	Fname: '',
		Mname: '',
		Lname: '',
		Date: '',
		Month: '',
		Year: '',
		gender: '',
		Streetaddress: '',
		Streetline2: '',
		City: '',
		State: '',
		Postal: '',
		Email: '',
		Number: '',
		Qualification: '',
		service: '',
		Charge: '',
		About: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,	
			[e.target.name]: e.target.value
			});
			
			};

			const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                try {
                    //convert inputs.order to integer
                    const newProblem = {
                        ...inputs,
                    }
                    const docId = `${inputs.Fname}-${inputs.Lname}-${Date.now()}`;
                    await setDoc(doc(firestore, "Users", docId), newProblem);
                    toast.success("Saved to database", {
                        position: "top-center",
                        autoClose: 4000, // Close the toast automatically after 3 seconds
                        theme: "dark",
            });
                    // Clear the form after submission
                    setInputs({
                        Fname: '',
                        Mname: '',
                        Lname: '',
                        Date: '',
                        Month: '',
                        Year: '',
                        gender: '',
                        Streetaddress: '',
                        Streetline2: '',
                        City: '',
                        State: '',
                        Postal: '',
                        Email: '',
                        Number: '',
                        Qualification: '',
                        service: '',
                        Charge: '',
                        About: '',
                    });
                    window.location.href = '/';
                } catch (error : any) {
                    console.error("Error saving to Firestore:", error);
                    toast("Failed to save to database. Check console for details.");
                }
            };
    return (
        <>
       <FormBar/>
      
       {user && (
       <div className="form">
       
                <div className="padd">
                <div className="card-header">
                Kindly Enter Your Details
                </div>
                <hr className="solid"/>
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                            <div className="leftmg">Name: <span className="red">*</span></div> <br />
                                <input onChange={handleInputChange} type="text" name="Fname" id="" placeholder='First Name' value={inputs.Fname} required />
                                <input onChange={handleInputChange} type="text" name="Mname" id="" placeholder='Middle Name (Optional)' value={inputs.Mname}/>
                                <input onChange={handleInputChange} type="text" name="Lname" id="" placeholder='Last Name' value={inputs.Lname} required />
                            </div>

                            <div className="dobandage">

                                <div className="dob">
                                <div className="leftmg">Date of Birth: <span className="red">*</span></div> <br />
                                        <input onChange={handleInputChange} type="number" name="Date" id="" placeholder='Date' value={inputs.Date} required/>
                                        <input onChange={handleInputChange} type="number" name="Month" id="" placeholder='Month' value={inputs.Month} required/>
                                        <input onChange={handleInputChange} type="number" name="Year" id="" placeholder='Year' value={inputs.Year} required/>

                                </div>

                            
                            </div>
                            <div className="gender">
                                <div className="leftmg">Gender: <span className="red">*</span></div><br />
                                        <input onChange={handleInputChange} type="text" name="gender" id="" placeholder='Your Gender' value={inputs.gender} required/>

                                           
                                </div>
                            <div className="emailandcontact">
                                    <div className="leftmg">Email and Contact Number: <span className="red">*</span></div><br />
                                            <input onChange={handleInputChange} type="text" name="Email" id="" placeholder='abc@gmail.com' value={inputs.Email} required/>
                                            <input onChange={handleInputChange} type="text" name="Number" id="" placeholder='Your Contact Number' value={inputs.Number} required/>

                                            

                                    </div>

                            <div className="address">
                            <div className="leftmg">Address: <span className="red">*</span></div> <br />    
                                <div className="street">
                                <input onChange={handleInputChange} type="text" name="Streetaddress" id="" placeholder='Street Address' value={inputs.Streetaddress} required/>
                                </div>
                                <div className="street">
                                <input onChange={handleInputChange} type="text" name="Streetline2" id="" placeholder='Street Line 2 (Optional)' value={inputs.Streetline2} />
                                </div>
                                <input onChange={handleInputChange} type="text" name="City" id="" placeholder='City' value={inputs.City} required/>
                                <input onChange={handleInputChange} type="text" name="State" id="" placeholder='State/Provience' value={inputs.State} required/>
                                <input onChange={handleInputChange} type="number" name="Postal" id="" placeholder='Postal/Zip Code' value={inputs.Postal} required/>
                            </div>




                                    



                                    <div className="qualificationandservice">

                                        <div className="qualification">
                                        <div className="leftmg">Qualification: <span className="red">*</span></div> <br />
                                                <div className="qualification1">
                                                <input onChange={handleInputChange} type="text" name="Qualification" id="" placeholder='Qualification' value={inputs.Qualification} required/>
                                                </div>

                                        </div>

                                       
                                    </div>


                                    <div className="service">
                                        <div className="leftmg">Service: <span className="red">*</span></div><br />
                                        <input onChange={handleInputChange} type="text" name="service" id="" placeholder='Eg: Plumber, Electrician, Doctor' value={inputs.service} className='servicetext' required/>           
                                        </div>

                                <div className="charge">
                                <div className="leftmg">Charge: <span className="red">*</span></div> <br />    
                                    <input onChange={handleInputChange} type="number" name="Charge" id="" placeholder='Charge Your take' value={inputs.Charge} required/>
                                
                                </div>

                                <div className="aboutyou">
                                <div className="leftmg">About You: <span className="red">*</span></div> <br />    
                                    <div className="abt">
                                        <input onChange={handleInputChange} type="text" name="About" id="" placeholder='About You' value={inputs.About} required/>
    
                                    </div>                   
                                </div>

                                <hr className="solid1"/>
                                <div className="bc">
                                <button className="sbutton" type="submit">Submit</button>
                                </div>

                                    
                        </form>
                        </div>

                   
                        
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
}
export default Forms;