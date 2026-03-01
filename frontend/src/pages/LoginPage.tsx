import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 🔹 Simulation d’authentification (prototype)
        if (email === "etudiant@test.com" && password === "password") {
            // plus tard : stockage du token JWT
            navigate("/quiz");
        } else {
            setError("Identifiants incorrects");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Connexion</h2>

                {error && <p style={styles.error}>{error}</p>}

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Mot de passe
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        backgroundColor: "#000000",
        borderRadius: "8px",
        minWidth: "300px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    error: {
        color: "red",
        fontSize: "0.9rem",
    },
};