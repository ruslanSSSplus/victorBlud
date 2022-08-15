import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {Corp} from "../Pages/Corp/Corp";
import {MainPage} from "../Pages/Main/MainPage";
import {Personal} from "../Pages/Personal/Personal";
import {Ad} from "../Pages/Ad/Ad";


export const AllRoutes = () => {

    return (<Routes>
        <Route path="/" element={<Navigate replace to="/Main"/>}/>
        <Route path='/Main' element={<MainPage />}> </Route>
        <Route path='/Corp' element={<Corp />}> </Route>
        <Route path='/Personal' element={<Personal />}> </Route>
        <Route path='/Ad' element={<Ad />}> </Route>

    </Routes>);
}
