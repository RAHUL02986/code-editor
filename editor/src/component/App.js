import React from "react";
import Home from './Home'
import DataProvider from "../Context/DataProvider";
function App(){
    return(
        <DataProvider>
        <Home/>
        </DataProvider>
    )
}
export default App;