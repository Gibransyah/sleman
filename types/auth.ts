export type UserRole = "admin" | "super_user";

export interface User {
  id: number;
  full_name: string;
  email: string;
  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface LoginResponseData {
  token: string;
  user: User;
}