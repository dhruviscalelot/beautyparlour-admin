import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from "yup";
import { QUOTE_VALIDATION, NAME_VALIDATION, RATING_VALIDATION, CLIENT_TYPE_VALIDATION } from '../../common/ErrorMessageCommom';
import { ImagePlus } from "lucide-react";
import { testimonialsData } from '../../data/testimonial.js';

const AddEditTestimonials = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()


    //start static add now for the fetch the data edit time
    // const { serviceData } = location.state || {}
    const testimonialData = testimonialsData.find(
        (item) => String(item.id) === String(id)
    );

    //end static add now for the fetch the data edit time

    const fileInputRef = React.useRef(null)



    const initialValues = {
        name: testimonialData?.name || "",
        rating: testimonialData?.rating || "",
        quote: testimonialData?.quote || "",
        clienttype: testimonialData?.clientType || "",
    }

    const HandleValidation = Yup.object().shape({
        name: Yup.mixed().required(NAME_VALIDATION),
        rating: Yup.mixed().required(RATING_VALIDATION),
        quote: Yup.string().required(QUOTE_VALIDATION),
        clienttype: Yup.string().required(CLIENT_TYPE_VALIDATION),
    })

    const handleImageUpload = (e, setFieldValue) => {
        const file = e.target.files[0]
        if (file) {
            setFieldValue("image", file)
        }
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true)
        try {
            let imageUrl = values.image

            // If image is a File object, upload it first
            if (values.image instanceof File) {
                const formData = new FormData()
                formData.append("image", values.image)
                const uploadResponse = await dispatch(uploadImage(formData))
                if (uploadResponse?.IsSuccess) {
                    imageUrl = uploadResponse.Data.imageUrl || uploadResponse.Data.image || uploadResponse.Data
                } else {
                    toast.error("Image upload failed")
                    setSubmitting(false)
                    return
                }
            }

            const finalValues = {
                service_id: values.service_id,
                title: values.title,
                desc: values.description,
                image: imageUrl,
                sortOrder: values.sortOrder
            }

            const response = await dispatch(saveService(finalValues))
            if (response?.IsSuccess) {
                toast.success(response.Message)
                navigate("../testimonials")
            }
        } catch (error) {
            console.log(error)
            toast.error("An error occurred while saving")
        }
        setSubmitting(false)
    }
    return (
        <>
            <div className="bg-white rounded-xl lg:rounded-2xl main_shadow p-3 lg:p-4 xl:p-5 space-y-4 lg:space-y-6 xl:space-y-8">
                <Formik initialValues={initialValues} validationSchema={HandleValidation} onSubmit={handleSubmit}>
                    {({ values, setFieldValue, isSubmitting }) =>
                        <Form>
                            <div className="flex items-center justify-between">
                                <h6 className="text-20 font-semibold text-g1">{id ? "Edit" : "Add"} Testimonial</h6>
                                <div className='flex items-center space-x-3'>
                                    <Link to="../testimonials" className='btn_secondary w-auto '>Back</Link>
                                    <button type='submit' className='btn_primary w-auto ' disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}</button>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-start -mx-1.5 xl:-mx-2.5 2xl:-mx-3.5">
                                <div className="w-full md:w-1/3 p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                                    <label className="label">Name <span className='text-red '>*</span></label>
                                    <Field type="text" className="input" name="name" placeholder="Enter Customer Name" />
                                    <ErrorMessage name="name" component="span" className="error" />
                                </div>

                                <div className="w-full md:w-1/3 p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                                    <label className="label">Rating <span className='text-red '>*</span></label>
                                    <Field type="text" className="input" name="rating" placeholder="Enter Rating" />
                                    <ErrorMessage name="rating" component="span" className="error" />
                                </div>


                                <div className="w-full md:w-1/3 p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                                    <label className="label">Client Type <span className='text-red '>*</span></label>
                                    <Field type="text" className="input" name="clienttype" placeholder="Enter Client Type" />
                                    <ErrorMessage name="clienttype" component="span" className="error" />
                                </div>


                                <div className="w-full p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                                    <label className="label">Quote <span className='text-red '>*</span></label>
                                    <Field as="textarea" name="quote" className="input h-[155px] py-3" placeholder="Enter Customer Quote/Review" />
                                    <ErrorMessage name="quote" component="span" className="error" />
                                </div>
                            </div>
                        </Form>
                    }
                </Formik>
            </div>
        </>
    )
}

export default AddEditTestimonials