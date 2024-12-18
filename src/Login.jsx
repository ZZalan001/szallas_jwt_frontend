import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Login=()=> {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("https://szallasjwt.sulla.hu/login", { username, password });
      const token = response.data.token;
      localStorage.setItem("jwt", token);
      setError('');
      navigate("/szallasok");
    } catch (error) {
        setError("Hitelesítés sikertelen. Ellenőrizd a bejelési adatokat.");
      console.error("Hiba a bejelentkezés során:", error);
    }
  };

  return (
    <div>
    <h1>Bejelentkezés</h1>
    Felhasználónév: <input
      type="text"
      placeholder="felhasználónév"
      value={username}
      onChange={(e) => setUsername(e.target.value)} /><br />
    Jelszó: <input
      type="password"
      placeholder="jelszó"
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
    <button
      onClick={handleLogin}>Bejelentkezés</button>
    </div>
  );
}