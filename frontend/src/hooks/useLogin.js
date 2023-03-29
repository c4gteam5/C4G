import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext()

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await axios.post(
        "https://c4g-backend-2.onrender.com/api/admin/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res) {
        // redirect
        dispatch({type: 'LOGIN'})
        localStorage.setItem("jwt", JSON.stringify(res.data));
        setIsLoading(false);
        window.location.reload(false);
        navigate("/management-home");
      }
    } catch (error) {
      setIsLoading(false);
      setError(JSON.stringify(error));
      //toast.error("invalid email and/or password")
     // alert("Invalid email and/or password")
    }
  };

  return {login, isLoading, error}
};
