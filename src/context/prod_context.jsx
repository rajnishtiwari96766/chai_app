//creat contextAPI -> Create appProvider -> create usecontext hooks

import { createContext, useContext } from "react";

const context1=createContext();

const Provider=({children})=>{
    return <context1.Provider value={{name:"Rajjo bhai"}}>{children}</context1.Provider>
}

const customHook1=()=>{
    return useContext(context1);
}

export {context1,Provider,customHook1}