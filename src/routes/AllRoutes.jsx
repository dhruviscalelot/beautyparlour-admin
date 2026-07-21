import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../auth/Login';
import Layout from '../components/Layout';
import Dashboard from "../pages/Dashboard/Dashboard"
import RequireAuth from "../routes/RequireAuth"
import OurServices from '../pages/OurServices/OurServices';
import Gallery from '../pages/Gallery/Gallery';
import AddEditOurServices from '../pages/OurServices/AddEditOurServices';
import Testimonials from '../pages/Testimonials/Testimonials';
import AddEditTestimonials from '../pages/Testimonials/AddEditTestimonials';


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route element={<RequireAuth />}>
                    <Route element={<Layout />}>

                        {/* Dashboard */}
                        <Route path='/dashboard' element={<Dashboard />} />

                        {/* Our Services */}
                        <Route path='/our-services' element={<OurServices />} />
                        <Route path='/our-services/create' element={<AddEditOurServices />} />
                        <Route path='/our-services/edit/:id' element={<AddEditOurServices />} />

                        {/* Gallery */}
                        <Route path='/gallery' element={<Gallery />} />

                        {/* Reviews */}
                        <Route path='/testimonials' element={<Testimonials />} />
                        <Route path='/testimonials/create' element={<AddEditTestimonials />} />
                        <Route path='/testimonials/edit/:id' element={<AddEditTestimonials />} />


                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default AllRoutes