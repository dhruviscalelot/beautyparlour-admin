import { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../common/ErrorMessageCommom'
import { assets } from '../assets/Images/assets'
import { Eye, EyeOff } from "lucide-react";
import toast from 'react-hot-toast'

const STATIC_LOGIN = {
  email: 'admin@beautyparlour.com',
  password: 'admin@123',
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }

  const handleValidation = Yup.object({
    email: Yup.string().email('Please enter valid email').required(EMAIL_VALIDATION),
    password: Yup.string().required(PASSWORD_VALIDATION),
  })

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.email === STATIC_LOGIN.email && values.password === STATIC_LOGIN.password) {
      // localStorage.setItem('accessToken', 'static-admin-token')
      // localStorage.setItem('adminEmail', values.email)
      toast.success("Admin logged in successfully!");
      navigate('/dashboard')
    } else {
      alert('Invalid email or password')
    }

    // API login code add here when backend is ready.
    // try {
    //   setSubmitting(true)
    //   const response = await dispatch(login(values))
    //   if (response?.IsSuccess) {
    //     localStorage.setItem('accessToken', response.Data.token)
    //     navigate('/dashboard')
    //   }
    // } catch (error) {
    //   console.log('error', error)
    // }

    setSubmitting(false)
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken')
  //   if (token) {
  //     navigate('/dashboard')
  //   }
  // }, [navigate])

  return (
    <div className="w-full min-h-screen flex relative py-6 lg:py-8 2xl:py-10 px-5 2xl:px-6 font-Lexend bg-l3 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#b76e79_0%,#8f4250_45%,#2f2527_100%)]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="w-full max-w-[1140px] m-auto h-full flex items-center justify-center relative z-10">
        <div className="w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.32)] overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-10 2xl:p-12">
            <div className="mb-8 text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-5 rounded-2xl bg-l3 border border-l2 shadow-[0_16px_35px_rgba(183,110,121,0.22)] flex items-center justify-center">
                <span className="font-Prata text-30 md:text-36 text-primary leading-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower2 lucide-flower-2 h-7 w-7" aria-hidden="true"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
                </span>
              </div>
              <h1 className="text-30 md:text-40 2xl:text-48 font-Prata text-g1 leading-tight mb-2">
                Glow & Grace
              </h1>
              <p className="text-g7 text-12 md:text-14 2xl:text-16 tracking-[0.18em] font-light uppercase">
                Administration Portal
              </p>
            </div>

            <Formik initialValues={initialValues} validationSchema={handleValidation} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="w-full max-w-[500px]">
                  <h4 className="text-24 md:text-28 2xl:text-32 text-g1 font-semibold mb-2">Admin Login</h4>
                  <p className="text-12 md:text-14 text-g7 mb-8">
                    Enter your email and password to continue.
                  </p>

                  <div className="space-y-6 mb-8 text-left">

                    <div className="relative mb-1">
                      <label className="label">Email <span className="text-red">*</span></label>
                      <Field type="email" name="email" className="input" placeholder="Enter Email" />
                      <ErrorMessage name="email" component="span" className="text-red error -bottom-2.5"></ErrorMessage>
                    </div>


                    <div className="relative mb-1">
                      <label className="label">Password <span className="text-red">*</span></label>
                      <div className="relative">
                        <Field
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          className="input pr-16"
                          placeholder="Enter Password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-g7"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>

                      </div>
                      <ErrorMessage name="password" component="span" className="text-red error -bottom-2.5 "></ErrorMessage>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn_primary w-full hover:border-primary" disabled={isSubmitting}>
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="w-full lg:w-1/2 min-h-[320px] lg:min-h-[640px] relative overflow-hidden">
            <img
              src={assets.login}
              alt="Beauty parlour interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,37,39,0.08)_0%,rgba(47,37,39,0.72)_100%)]"></div>
            <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8 text-white">
              <span className="inline-block mb-3 rounded-full bg-white/20 px-4 py-1.5 text-12 2xl:text-14 font-semibold uppercase tracking-[0.16em]">
                Salon Care
              </span>
              <h2 className="font-Prata text-28 md:text-36 2xl:text-40 leading-tight mb-3">
                Manage your parlour with style.
              </h2>
              <p className="text-14 2xl:text-16 text-white/80 max-w-sm">
                Keep appointments, clients, and daily beauty services organized from one elegant admin space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
