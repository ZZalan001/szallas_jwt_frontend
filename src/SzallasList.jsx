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
                    throw new Error("Nincs token!");
                }
                const response = await axios.get("http://szallasjwt.sulla.hu/szallasok", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data);
            }
            catch(error){
                setError(error);
            }
        }
    },[]);
}