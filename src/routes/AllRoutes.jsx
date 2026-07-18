import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../auth/Login';
import Layout from '../components/Layout';
import Dashboard from "../pages/Dashboard/Dashboard"
import RequireAuth from "../routes/RequireAuth"
import OurServices from '../pages/OurServices/OurServices';


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

                {/* <Route element={<RequireAuth />}> */}
                <Route element={<Layout />}>
                    {/* Dashboard */}
                    <Route path='/dashboard' element={<Dashboard />} />

                    {/* Our Services */}
                    <Route path='/our-services' element={<OurServices />} />
                </Route>
                {/* </Route> */}
            </Routes>
        </>
    )
}

export default AllRoutes