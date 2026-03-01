const API_URL = "http://localhost:3000/api";

export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });

    if (!response.ok) {
        throw new Error("Erreur API");
    }

    return response.json();
}