// LoginPage.js
import React from 'react';
import { motion } from 'framer-motion';
import Login from '../Vhome/Login/Login';
import './LoginPage.css'

const LoginPage = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="login-page"
    >
      <div className="login-form">
      <button className='close' onClick={onClose}>Close</button>
        <Login />
        
      </div>
    </motion.div>
  );
};

export default LoginPage;
