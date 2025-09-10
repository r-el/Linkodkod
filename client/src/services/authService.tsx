import api from "./api";
import type { IUser } from "../@types/User";

interface LoginResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    user: IUser;
    token: string;
  };
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  password: string;
}

interface RegisterResponse {
  success: boolean;
  message?: string;
  data?: {
    user: IUser;
    token: string;
  };
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const registerUser = async (credentials: RegisterCredentials): Promise<RegisterResponse> => {
  const response = await api.post("/auth/register", credentials);
  return response.data;
};
