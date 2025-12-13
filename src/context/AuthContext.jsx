import { createContext, useContext, useState } from "react";
import API from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("hustlehub_user")) || null
  );

  // LOGIN (uses backend)
  const login = async (email, password) => {
    const res = await API.post("/auth/login", { email, password });

    localStorage.setItem("hustlehub_user", JSON.stringify(res.data));
    setUser(res.data);
  };

  // REGISTER (uses backend)
  const register = async (name, email, password) => {
    const res = await API.post("/auth/register", { name, email, password });

    localStorage.setItem("hustlehub_user", JSON.stringify(res.data));
    setUser(res.data);
  };

  const logout = () => {
    localStorage.removeItem("hustlehub_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
