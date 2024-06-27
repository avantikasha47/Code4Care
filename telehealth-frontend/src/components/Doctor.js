import React, { useState, useEffect } from 'react';
import { FaVideo, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import doctorsData from '../doctors.json';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching data from local JSON file
        setDoctors(doctorsData);
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleChat = () => {
        navigate('/doctor/payments');
    };

    const handleVideoChat = () => {
        navigate('/doctor/payments');
    };

    return (
        <div className="dashboard-container">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Doctor"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <div className="doctor-cards-container">
                {doctors
                    .filter((doctor) =>
                        doctor.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((doctor) => (
                        <div key={doctor._id} className="doctor-card">
                            <h2 className="doctor-name">{doctor.name}</h2>
                            <p className="doctor-specialty">Specialty: {doctor.specialty}</p>
                            <p className="doctor-description">{doctor.description}</p>
                            <p className="doctor-price">Price: ${doctor.price}</p>
                            <div className="doctor-options">
                                {doctor.chat && (
                                    <div className="option" onClick={handleChat}>
                                        <FaComments className="icon" title="Initiate Text Chat" />
                                        <span>Chat</span>
                                    </div>
                                )}
                                {doctor.video && (
                                    <div className="option" onClick={handleVideoChat}>
                                        <FaVideo className="icon" title="Initiate Video Chat" />
                                        <span>Video Chat</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DoctorDashboard;