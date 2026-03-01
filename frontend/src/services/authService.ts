import { login } from "../api/authApi";

export async function loginUser(email: string, password: string) {
    const result = await login(email, password);
    localStorage.setItem("token", result.token);
}