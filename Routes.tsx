import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/home/Home";
import React from "react";


function AppRoute( ){

   
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRoute;  
