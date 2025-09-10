import api from "./api";
import type { IUser } from "../@types/User";

interface LoginResponse {
  success: boolean;
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

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};
