import { useState } from "react";
import axios from "axios";

export default function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = new URLSearchParams();
      data.append("grant_type", "password");
      data.append("username", username);
      data.append("password", password);
      data.append("client_id", "4qAsm9ddRN3crIRcjEVXVB5AbTJbuNa7kWf0rh0n");

      const res = await axios.post(
        "http://127.0.0.1:8000/o/token/",
        data,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      localStorage.setItem("token", res.data.access_token);
      setAuth(true);
    } catch (error) {
  console.log("ERROR COMPLETO:", error.response?.data || error);
  alert("Error al iniciar sesión");
}

  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Ingresar</button>
    </form>
  );
}


