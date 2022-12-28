import React, { createContext, useEffect, useState } from 'react'

export const Order = createContext()
const AppContextProvider = ({ children }) => {
    const userInitialState = localStorage.getItem("user") || "";
  
    const [order, setOrder] = useState(userInitialState);
  
    useEffect(() => {
      localStorage.setItem("order", order);
    }, [order]);
  
    const values = {
        order,
      setOrder
    };
  
    return (
      <Order.Provider value={values}>
        {children}
      </Order.Provider>
    );
  };
  
  export default AppContextProvider;