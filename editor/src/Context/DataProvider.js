import React, { useState } from "react";
import { createContext } from "react";

 export const DataContext=createContext();
 function DataProvider({children}){
 const [html, setHtml]=useState('');
 const [css, setCss]= useState('');
 return(
<DataContext.Provider
    value={{
        html,
        setHtml,
        css,
        setCss

    }}
>
{children}


</DataContext.Provider>
    )
 }
 export default DataProvider;