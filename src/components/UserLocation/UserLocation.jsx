// import React from 'react'

// const PaymentIssue = () => {
//   return (
//     <div>PaymentIssue</div>
//   )
// }

// export default PaymentIssue


import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

const UserLocation = () => {  
    const [state, setState] = useState('');  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState('');  

    const fetchLocationData = async () => {  
        try {  
            const ipResponse = await axios.get('https://api.ipify.org?format=json');  
            const ipAddress = ipResponse.data.ip;  
            const locationResponse = await axios.get(`https://ipinfo.io/${ipAddress}/json?token=YOUR_TOKEN`);  
            const userState = locationResponse.data.region;  
            setState(userState);  
        } catch (err) {  
            console.error('Error details:', err); // Log the error details  
            setError('Failed to fetch location data: ' + err.message); // Display the error message  
        } finally {  
            setLoading(false);  
        }  
    };  

    useEffect(() => {  
        fetchLocationData();  
    }, []);  

    if (loading) return <p>Loading...</p>;  
    if (error) return <p>{error}</p>;  

    return <div>Your state is: {state}</div>;  
};  

export default UserLocation;