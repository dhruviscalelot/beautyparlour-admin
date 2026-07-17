import { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../common/ErrorMessageCommom'

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
    localStorage.setItem('adminEmail', values.email)
    setSubmitting(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <div className="w-full min-h-screen flex relative py-6 lg:py-8 2xl:py-10 px-5 2xl:px-6 font-Lexend bg-l3 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#b76e79_0%,#8f4250_45%,#2f2527_100%)]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="w-full max-w-[1140px] m-auto h-full flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col items-center mb-8 md:mb-10 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 mb-5 rounded-2xl bg-white/95 border border-white/60 shadow-[0_20px_45px_rgba(0,0,0,0.22)] flex items-center justify-center">
            <span className="font-Prata text-32 md:text-40 text-primary leading-none">B</span>
          </div>
          <h1 className="text-30 md:text-40 2xl:text-48 font-Prata text-white leading-tight mb-2">
            Beauty Parlour
          </h1>
          <p className="text-white/70 text-12 md:text-14 2xl:text-16 tracking-[0.18em] font-light uppercase">
            Administration Portal
          </p>
        </div>

        <Formik initialValues={initialValues} validationSchema={handleValidation} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="w-full max-w-96 xl:max-w-[500px] bg-white rounded-3xl p-8 lg:p-10 2xl:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <h4 className="text-24 md:text-28 2xl:text-32 text-g1 font-semibold text-center mb-2">Admin Login</h4>
              <p className="text-12 md:text-14 text-g7 text-center mb-8">
                Enter your email and password to continue.
              </p>

              <div className="mb-8 text-left">
                <div className="relative pb-5 mb-1">
                  <label className="label">Email <span className="text-red">*</span></label>
                  <Field type="email" name="email" className="input" placeholder="Enter Email" />
                  <ErrorMessage name="email" component="span" className="text-red error -bottom-0.5"></ErrorMessage>
                </div>

                <div className="relative pb-5">
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
                      className="absolute top-1/2 -translate-y-1/2 right-3 text-12 2xl:text-14 font-semibold text-primary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <ErrorMessage name="password" component="span" className="text-red error -bottom-0.5"></ErrorMessage>
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
    </div>
  )
}

export default Login
