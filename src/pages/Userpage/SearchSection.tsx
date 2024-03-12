import React from 'react';

type searchSectionProps = {
    
};

const searchSection:React.FC<searchSectionProps> = () => {
    
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Enter your search" />
            <button className="search-button">Search</button>
        </div>
        
    );
}
export default searchSection;