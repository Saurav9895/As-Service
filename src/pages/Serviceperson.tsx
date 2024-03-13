
import Topbar from '@/components/Topbar/Topbar';
import React from 'react';

type ServicepersonProps = {
    
};

const Serviceperson:React.FC<ServicepersonProps> = () => {
    
    return(
        <>
        <Topbar/>
        <div className="container1">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto">
                <div className="my-4">
                    
                    
                        <div className="firstrow">
                            <div className="col-md-3 text-center mb-5">
                                <div className="avatar avatar-xl">
                                    <img src="avatar.png" alt="..." className="avatar-img rounded-circle " />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row align-items-center">    
                                    <div className="col-md-7">
                                        <b><h4 className="mb-1">Saurav Kumar Yadav</h4></b>
                                        <b><p className="small mb-3"><span className="badge badge-dark">Electrician</span></p></b>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-7">
                                        <p className="text-muted-1">
                                           
                                        As an electrician, I am adept at installing, maintaining, and repairing electrical systems. With a keen 
                                        eye for detail and a commitment to safety, I ensure that every job is executed to the highest standards.
                                         Skilled in diagnosing issues and finding efficient solutions, I take pride in delivering reliable electrical services. 
                                         My dedication to excellence and continuous learning drives my passion for providing top-notch electrical work that meets
                                          the needs of my clients.
                                        </p>
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="form-row">
                            <div className="form-group ">
                                <label htmlFor="firstname">Firstname</label>
                                <div className="d">Saurav</div>
                            </div>
                            <div className="form-group1 ">
                                <label htmlFor="lastname">Middle Name</label>
                                <div className="d">Kumar</div>
                            </div>
                            <div className="form-group1 ">
                                <label htmlFor="lastname">last Name</label>
                                <div className="d">Yadav</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group ">
                                <label htmlFor="Email">Email</label>
                                <div className="d1">yadavsaurav98512@gmail.com</div>
                            </div>
                               
                        </div>

                        <div className="form-row">
                            
                            <div className="form-group ">
                                <label htmlFor="Contact">Contact Number</label>
                                <div className="d2">9842483338</div>
                            </div>
                            <div className="form-group2 ">
                                <label htmlFor="lastname">Service Charge</label>
                                <div className="d4">500</div>
                            </div>
                            <div className="form-group1 ">
                                <label htmlFor="lastname">Qualification</label>
                                <div className="d5">Engineer</div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group ">
                                <label htmlFor="firstname">Geneder</label>
                                <div className="d">Male</div>
                            </div>
                            <div className="form-group1 ">
                                <label htmlFor="lastname">Date of Birth</label>
                                <div className="dob1">
                                <div className="d">04</div>
                                <div className="d3">12</div>
                                <div className="d3">2001</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group ">
                                <label htmlFor="firstname">Address Line 1</label>
                                <div className="d">Manohara Phant, Lokanthali</div>
                            </div>
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group ">
                                <label htmlFor="firstname">Address Line 2</label>
                                <div className="d">Manohara Phant, Lokanthali</div>
                            </div>
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group ">
                                <label htmlFor="firstname">City</label>
                                <div className="d4">Bhaktapur</div>
                            </div>
                            <div className="form-group1 ">
                                <label htmlFor="firstname">State/Provience</label>
                                <div className="d4">Bagmati</div>
                            </div>
                            <div className="form-group1 ">
                                <label htmlFor="firstname">Postal/Zip Code</label>
                                <div className="d4">562112</div>
                            </div>
                            
                        </div>

                        
                       
                       
                   
                </div>
            </div>
        </div>
        
        </div>
        </div>
        </>
        );
}
export default Serviceperson;