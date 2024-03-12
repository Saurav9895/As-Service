import { firestore } from '@/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import React from 'react';

type FormsProps = {
    
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // //convert inputs.order to integer
    // const newProblem = {
    //     ...inputs,
    //     order: Number(inputs.order),
    // }
    // await setDoc(doc(firestore, "problems", inputs.id), newProblem);
    // alert("saved to db")
}

const Forms:React.FC<FormsProps> = () => {
    
    return (
        <>
       
       <div className="form">
                <div className="padd">
                <div className="card-header">
                Kindly Enter Your Details
                </div>
                <hr className="solid"/>
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <div className="leftmg">Name:</div> <br />    
                                <input type="text" name="" id="" placeholder='First Name'/>
                                <input type="text" name="" id="" placeholder='Middle Name'/>
                                <input type="text" name="" id="" placeholder='Last Name'/>
                            </div>

                            <div className="dobandage">

                                <div className="dob">
                                <div className="leftmg">Date of Birth:</div> <br />
                                        <input type="number" name="" id="" placeholder='Date'/>
                                        <input type="number" name="" id="" placeholder='Month'/>
                                        <input type="number" name="" id="" placeholder='Year'/>

                                </div>

                                <div className="gender">
                                <div className="leftmg1">Gender: </div><br />
                                        <select id="gender" name="gender" required>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                </div>
                            </div>

                            <div className="address">
                            <div className="leftmg">Address:</div> <br />    
                                <div className="street">
                                <input type="text" name="" id="" placeholder='Street Address'/>
                                </div>
                                <div className="street">
                                <input type="text" name="" id="" placeholder='Street Line 2'/>
                                </div>
                                <input type="text" name="" id="" placeholder='City'/>
                                <input type="text" name="" id="" placeholder='State/Provience'/>
                                <input type="number" name="" id="" placeholder='Postal/Zip Code'/>
                            </div>




                                    <div className="emailandcontact">
                                    <div className="leftmg">Email and Contact Number: </div><br />
                                            <input type="email" name="" id="" placeholder='abc@gmail.com'/>
                                            <input type="text" name="" id="" placeholder='Your Contact Number'/>

                                            

                                    </div>



                                    <div className="qualificationandservice">

                                        <div className="qualification">
                                        <div className="leftmg">Qualification:</div> <br />
                                                <div className="qualification1">
                                                <input type="text" name="" id="" placeholder='Qualification'/>
                                                </div>

                                        </div>

                                        <div className="service">
                                        <div className="leftmg1">Service: </div><br />
                                                <select id="service" name="service" required>
                                                    <option value="plumber">Plumber</option>
                                                    <option value="electrician">Electrician</option>
                                                    <option value="other">Other</option>
                                                </select>
                                        </div>
                                        </div>

                                <div className="charge">
                                <div className="leftmg">Charge:</div> <br />    
                                    <input type="number" name="" id="" placeholder='Charge Your take'/>
                                
                                </div>

                                <div className="aboutyou">
                                <div className="leftmg">About You:</div> <br />    
                                    <div className="abt">
                                    <textarea name="" id="" ></textarea>     
                                    </div>                   
                                </div>

                                <hr className="solid1"/>
                                <div className="bc">
                                <button className="sbutton" type="submit">Submit</button>
                                </div>

                                    
                        </form>
                        </div>
       </div>
       </>
         
    );
}
export default Forms;