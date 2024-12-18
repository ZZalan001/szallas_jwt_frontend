import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout=()=> {

    const navigate = useNavigate();
        const handleLogout = () => {
            localStorage.removeItem('jwt');
            navigate('/');
        }
    

    return(
        <div>
            <h1>Kijelentkezés</h1>
            <button onClick={handleLogout}>Kijelentkezés</button>
        </div>
    );
}