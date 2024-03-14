import React, { useState } from 'react';

const UserProfile2 = () => {
  
  // Initialize UserProfile State
  const [userProfile, setUserProfile] = useState({
    name: 'Asfand Tanwer',
    email: 'Asfand@yahoo.com',
    address: {
      street: '2332 N 345 St',
      city: 'seattle',
      country: 'WA'
    }
  });

  // Function for updating address and rendering UI elements
  const updateAddress = (street, city, country) => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        street: street,
        city: city,
        country: country
      }
    }));
  };

  return (
          
    // JSX for rendering UI elements
        
      <div>
            
            {/* Input fields and button */}
            
            <div>
              <input
                  type="text"
                  placeholder="Street"
                  value={userProfile.address.street}
                  onChange={e => updateAddress(e.target.value, userProfile.address.city, userProfile.address.country)} 
              />
              <input
                  type="text"
                  placeholder="City"
                  value={userProfile.address.city}
                  onChange={e => updateAddress(userProfile.address.street, e.target.value, userProfile.address.country)} 
              />
              <input
                  type="text"
                  placeholder="Country"
                  value={userProfile.address.country}
                  onChange={e => updateAddress(userProfile.address.street, userProfile.address.city, e.target.value)} 
              />
              
              {/* Button to trigger the updateAddress function */}
              <button onClick={() => updateAddress(userProfile.address.street, userProfile.address.city, userProfile.address.country)}>Update Address</button>
            </div>

            <div>
              <strong>Name:</strong> {userProfile.name}<br />
              <strong>Email:</strong> {userProfile.email}<br />
              <strong>Address:</strong><br />
              <ul>  
                <li>Street: {userProfile.address.street}</li>
                <li>City: {userProfile.address.city}</li>
                <li>Country: {userProfile.address.country}</li>
              </ul>
            </div>  
      
      </div>
  );
};

export default UserProfile2;
