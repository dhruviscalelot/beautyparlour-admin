import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../auth/Login';
import Layout from '../components/Layout';
import Dashboard from "../pages/Dashboard/Dashboard"
import RequireAuth from "../routes/RequireAuth"


const AllRoutes = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}>


                    <Route element={<RequireAuth />}>
                        <Route element={<Layout />}>
                            <Route path='/' element={<Navigate to="/dashboard" />} />

                            {/* Dashboard */}
                            <Route path='dashboard' index element={<Dashboard/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </>
    )
}

export default AllRoutes