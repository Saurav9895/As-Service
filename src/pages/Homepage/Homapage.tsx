import Image from 'next/image';
import React from 'react';
import useHasMounted from "@/hooks/useHasMounted";


type HomapageProps = {
    
};

const Homapage:React.FC<HomapageProps> = () => {
  const hasMounted = useHasMounted();

	if (!hasMounted) return null;
    
    return(
        <div className="mainbody">
      <div id="image-section">
        <Image className="header-image" src="/image.png" alt="a business woman and man standing back to back to each other and smiling" height={500} width={500} />
      </div>
      <div id="content">
        <div id="content-text">
          <h1 className="h1">Service <br /> Finder</h1>
          <h2 className="h2">Search for your service person in easy way <br /> 
            Category for each service so that you can find it easier<br /> 
            Easy to Contact</h2> 
            <div id="footer">
          <div id="contacts">
            <div id="phone">
              More Information call us <br />
              <span>+91-9155917535</span>
            </div>
            <div id="address">
              <h2>asservice@gmail.com <br />
              Nepal - Address</h2>
            </div>
          </div>  
        </div>
        </div>
       
      </div>
    </div>
    );
}
export default Homapage;