import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../helper/Hooks/useLocalStorage";

const useGuestLayoutHandler = () => {
  const { getItem } = useLocalStorage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getItem('token');
    if (token) {
      navigate('/')
    } else {
      setIsLoading(false)
    }
  }, []);

  return { isLoading }
}

export default useGuestLayoutHandler;