import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {SmthElse} from "../Pages/SmthElse/SmthElse";
import {MainContainer} from "../Pages/Main/MainContainer";


export const AllRoutes = () => {

    return (<Routes>
        <Route path="/" element={<Navigate replace to="/Main"/>}/>
        <Route path='/Main' element={<MainContainer />}> </Route>
        <Route path='/SmthElse' element={<SmthElse />}> </Route>

    </Routes>);
}
