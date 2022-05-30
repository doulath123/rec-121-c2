import React from "react";
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard";
import RegisterPageOne from "./RegisterPageOne";
import RegisterPageTwo from "./RegisterPageTwo";

function AllRoutes(){
    return ( <>
        <Dashboard/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/register/one' element={<RegisterPageOne/>}/>
            <Route path='/register/two' element={<RegisterPageTwo/>}/>
        </Routes>
        </>);
    
}
export default AllRoutes;