import { apiFetch } from "./http";

export async function login(email: string, password: string) {
    return apiFetch<{ token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
}