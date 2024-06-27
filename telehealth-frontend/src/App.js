import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavbarPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DoctorAppointments from './components/Appointment';
import DoctorPayments from './components/Payment';
import PatientSearch from './components/PatientSearch';
import Doctor from './components/Doctor';
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor/appointments" element={<DoctorAppointments />} />
          <Route path="/doctor/payments" element={<DoctorPayments />} />
          <Route path="/patient/search" element={<PatientSearch />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
