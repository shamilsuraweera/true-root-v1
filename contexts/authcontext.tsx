import { getCurrentUser, logoutUser } from "@/lib/appwrite";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean | null;
  user: any;
  login: () => void;
  logout: () => void;
  setUser: (user: any) => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: null,
  user: null,
  login: () => {},
  logout: () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const current = await getCurrentUser();
        if (current) {
          console.log("✅ Appwrite session found:", current);
          setUser(current);
          setIsLoggedIn(true);
        } else {
          throw new Error("Session not found");
        }
      } catch (error) {
        console.log("❌ No session:", error instanceof Error ? error.message : error);
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const login = () => setIsLoggedIn(true);

  const logout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
