import React, { useState } from 'react';

const PatientSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);

  const handleSearch = () => {
    // Fetch doctors based on search term
    // Example: axios.get(/api/doctors?search=${searchTerm}).then(response => setDoctors(response.data));
  };

  return (
    <div>
      <h2>Search for Doctors</h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Type of doctor" />
      <button onClick={handleSearch}>Search</button>
      <div>
        {doctors.map(doctor => (
          <div key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>{doctor.description}</p>
            <p>Languages: {doctor.languages.join(', ')}</p>
            <button>Video Call</button>
            <button>Payment</button>
            <button>Chat</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientSearch;
