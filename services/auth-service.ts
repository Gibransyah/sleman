import { api } from "@/lib/api";
import type {
  ApiResponse,
  LoginRequest,
  LoginResponseData,
  User,
} from "@/types/auth";

export const authService = {
  async login(payload: LoginRequest) {
    const res = await api.post<ApiResponse<LoginResponseData>>("/auth/login", payload);
    return res.data;
  },

  async profile() {
    const res = await api.get<ApiResponse<User>>("/auth/profile");
    return res.data;
  },
};