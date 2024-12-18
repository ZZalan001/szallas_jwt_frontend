import React, { useState , useEffect} from "react";
import axios from "axios";

export const SzallasList = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const token = localStorage.getItem("jwt");
                if(!token){
                    throw new Error("Nen található JWT token!");
                }
                const response = await axios.get("https://szallasjwt.sulla.hu/data", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            }
            catch(error){
                setError("Adatok lekérése sikertelen! Lehet, hogy nem vagy bejelentkezve");
                console.error("Hiba: ",error);
            }
        }
        fetchData();
    },[]);
    
    return(
        <div>         
            <h1>Szallasok</h1>
            {error && <p style={{color: "red"}}>{error}</p>}
            {data.length>0?(
                <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name} - {item.hostname} - {item.location} - {item.price} - {item.minimum_nights} </li>
                ))}
            </ul>):(
                <p>Szallasok nincsenek!</p>
                
            )}
            
            
        </div>
    )
}