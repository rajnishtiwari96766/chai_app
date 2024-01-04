//creat contextAPI -> Create appProvider -> create usecontext hooks

import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const context1 = createContext();

const api="https://api.pujakaitem.com/api/products";

const Provider = ({ children }) => {

    const getproducts=async(api)=>{
        const res=await axios.get(api)
        const products=await res.data

        console.log(products)
    }

    useEffect(()=>{
        getproducts(api);
    },[])

  return (
    <context1.Provider value={{ name: "Rajjo bhai" }}>
      {children}
    </context1.Provider>
  );
};

const customHook1 = () => {
  return useContext(context1);
};

export { context1, Provider, customHook1 };
