// src/config.js - BULLETPROOF API CONFIG
const config = {
  API_URL: typeof process !== 'undefined' && process.env?.REACT_APP_API_URL 
    ? process.env.REACT_APP_API_URL 
    : 'http://localhost:5000'
};

export default config;
