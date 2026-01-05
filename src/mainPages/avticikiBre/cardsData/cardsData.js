

import { useEffect, useState } from "react";

export const useCars = () => {
  const [cars, setCars] = useState([]);
  
   const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
   fetch(`${API}/api/diecast`)
      .then(res => res.json())
      .then(data => setCars(data));
  }, [API]);

  return cars;
};





