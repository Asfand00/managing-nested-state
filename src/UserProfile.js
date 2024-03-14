import React, { useState } from 'react';

const UserProfile = () => {
    
    // Initialize UserProfile State
    const [userProfile, setUserProfile] = useState({
        name: 'Asfand Tanwer',
        email: 'Asfand@yahoo.com',
        address: {
            street: '',
            city: '',
            country: ''
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

    // Function to handle the update button when clicked to update userProfile
    const handleUpdate = (e) => {
        e.preventDefault();
        const street = e.target.street.value;
        const city = e.target.city.value;
        const country = e.target.country.value;
        updateAddress(street, city, country);
    };

    return (
        
        <div>
            {/* Input fields and button using form */}
            <form onSubmit={handleUpdate}>
                <label htmlFor="street">Street:</label>
                <input type="text" id="street" name="street" />

                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" />

                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" />

                <button type="submit">Update Address</button>
            </form>

            {/*Display UserProfile*/}
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

export default UserProfile;
