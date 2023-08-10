import React from "react";
import {Box } from '@mui/material'
import { useContext,useState,useEffect } from "react";
import { DataContext } from "../Context/DataProvider";
function Result(){
     const [Src ,setSrc] = useState('');
    const {html, css}=useContext(DataContext)
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    
    </html>
    
    `
    useEffect(()=>{

const timeout=setTimeout(()=>{
setSrc(srcCode);
},[1000])
return ()=>clearTimeout(timeout)

    })
    return(
        <Box>
             <iframe
             srcDoc={srcCode}
             title="Output"
             sandbox="allow-scripts"
             frameBorder={0}
             width='100%'
             height="100%"

             />
        </Box>
    )
}
export default Result;