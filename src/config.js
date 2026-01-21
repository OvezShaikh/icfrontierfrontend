// src/config.js - VITE SAFE API CONFIG

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const config = {
  API_URL,
};

export default config;
