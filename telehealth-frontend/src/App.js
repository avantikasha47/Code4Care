import React,{useState} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NavBar from './components/NavbarPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PaymentForm from './components/PaymentForm';
import PatientSearch from './components/PatientSearch';
import Doctor from './components/Doctor';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor/payments" element={<PaymentForm />} />
          <Route path="/patient/search" element={<PatientSearch />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
