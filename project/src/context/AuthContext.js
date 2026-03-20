import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 로그인
  const login = (userData) => {
    setUser(userData);
  };

  // 로그아웃
  const logout = async () => {
    await axios.post("/api/logout", {}, {
      withCredentials: true
    });

    setUser(null);
  };

  // 앱 시작 시 세션 확인
  useEffect(() => {

    axios.get("/api/session-check", {
      withCredentials: true
    })
    .then(res => {
      setUser(res.data);
    })
    .catch(() => {
      setUser(null);
    })
    .finally(() => {
      setLoading(false);
    });

  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};