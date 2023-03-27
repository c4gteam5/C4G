import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

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
        
        localStorage.setItem("jwt", JSON.stringify(res.data.token));
        dispatch({type: 'LOGIN'})
        setIsLoading(false);
        navigate("/management-home");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      toast(error)
    }
  };

  return {login, isLoading, error}
};
