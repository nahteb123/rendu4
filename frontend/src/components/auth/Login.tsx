import { useState } from "react";
import { authenticate } from "../../services/authService";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await authenticate(username, password);
        alert("Connecté !");
    };

    return (
        <>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </>
    );
}