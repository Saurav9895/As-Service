import React from 'react';

type HomapageProps = {
    
};

const Homapage:React.FC<HomapageProps> = () => {
    
    return(
        <div className="mainbody">
      <div id="image-section">
        <img className="header-image" src="https://github.com/malunaridev/Landing-Pages-Are-Fun/blob/master/1-business-agency-concept/assets/image.png?raw=true" alt="a business woman and man standing back to back to each other and smiling" />
      </div>
      <div id="content">
        <div id="content-text">
          <h1 className="h1">Business <br /> agency</h1>
          <h2 className="h2">Lorem ipsum dolor sit amet, consectetur <br /> 
            adipisicing elit pariatur quibusdam <br /> 
            voluptatem pariatur dolore.</h2>
            <div id="footer">
          <div id="contacts">
            <div id="phone">
              More Information call us <br />
              <span>+91-878787-12345</span>
            </div>
            <div id="address">
              <h2>Av. Lorem ipsum dolor, 2045 <br />
              Dolor sit Amet - Address</h2>
            </div>
          </div>  
        </div>
        </div>
       
      </div>
    </div>
    );
}
export default Homapage;