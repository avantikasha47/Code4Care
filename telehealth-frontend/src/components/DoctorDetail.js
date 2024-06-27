// src/components/DoctorDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const { id } = useParams(); // Get the id parameter from the route

    // Fetch or use data based on id (if needed)

    return (
        <div>
            <h1>Doctor Details</h1>
            <p>Doctor ID: {id}</p>
            {/* Display more details about the doctor */}
        </div>
    );
};

export default DoctorDetails;
