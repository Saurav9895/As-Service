
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
                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                        <li className="nav-item">
                        </li>
                    </ul>
                    <form>
                        <div className="firstrow">
                            <div className="col-md-3 text-center mb-5">
                                <div className="avatar avatar-xl">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." className="avatar-img rounded-circle" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <h4 className="mb-1">Brown, Asher</h4>
                                        <p className="small mb-3"><span className="badge badge-dark">New York, USA</span></p>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-7">
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                            pretium blandit sapien.
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                                        <p className="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                                        <p className="small mb-0 text-muted">(537) 315-1481</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" id="firstname" className="form-control" placeholder="Brown" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" id="lastname" className="form-control" placeholder="Asher" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="brown@asher.me" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress5">Address</label>
                            <input type="text" className="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCompany5">Company</label>
                                <input type="text" className="form-control" id="inputCompany5" placeholder="Nec Urna Suscipit Ltd" />
                            </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        
        </div>
        </div>
        </>
        );
}
export default Serviceperson;