import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("AuthContext init token:", token ? "EXISTS" : "NULL");
    setIsAuthenticated(!!token && token.length > 10);
    setLoading(false);
  }, []);

  const login = (token) => {
    console.log("LOGIN - storing token");
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
  console.log("LOGOUT - clearing token");
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  // Navigate handled by ProtectedRoute automatically
};

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
