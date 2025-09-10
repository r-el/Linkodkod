import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { loginUser } from "../services/authService";
import type { IUser } from "../@types/User";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; user?: IUser; error?: any }>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // On mount, check localStorage for user and token
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  // Login function
  const login = async (username: string, password: string) => {
    try {
      const response = await loginUser({ username, password });

      if (response.success && response.data) {
        const { user: userData, token } = response.data;

        setUser(userData);
        setIsAuthenticated(true);

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);

        return { success: true, user: userData };
      } else {
        throw new Error(response.error || "Login failed");
      }
    } catch (error: any) {
      console.error("Login error:", error);

      // Handle specific error responses from server
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.error || error.response.data.message || "Login failed";
        return {
          success: false,
          error: { message: errorMessage, status: error.response.status },
        };
      }

      return {
        success: false,
        error: { message: error.message || "Login error" },
      };
    }
  };

  const value = { user, isAuthenticated, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
