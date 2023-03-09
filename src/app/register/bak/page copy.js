//import
"use client"
import React from 'react'
import HeroLogin from '@/components/heroLogin'
import Link from 'next/link'
import { useFormik } from 'formik'
import { RegisterValidate } from 'lib/validate'


export default function Register() {
  const router = useRouter();
  const onSubmit = async (values) => {
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validate: RegisterValidate,
    onSubmit
  })

  // console.log(formik.errors)





  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:grid">
          <HeroLogin />
        </div>
        <div className="container">
          <div className="py-24">
            <h1 className="font-semibold text-3xl">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h1>
            <div className="py-5">
              <span>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</span>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-control w-full py-5">
                <input
                  type="text"
                  placeholder="Enter your firstname" className="input input-bordered w-full"
                  {...formik.getFieldProps('firstname')} />
                <span className='text-red-700'>
                  {formik.errors.firstname && formik.touched.firstname ? <span>{formik.errors.firstname}</span> : <></>}
                </span>
              </div>
              <div className="form-control w-full py-5">
                <input type="text"
                  placeholder="Enter your lastname" className="input input-bordered w-full"
                  {...formik.getFieldProps('lastname')}
                />
                <span className='text-red-700'>
                  {formik.errors.lastname && formik.touched.lastname ? <span>{formik.errors.lastname}</span> : <></>}
                </span>
              </div>
              <div className="form-control w-full py-5">
                <input
                  type="email"
                  placeholder="Enter your email" className="input input-bordered w-full"
                  {...formik.getFieldProps('email')}
                />
                <span className='text-red-700'>
                  {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : <></>}
                </span>
              </div>
              <div className="form-control w-full py-5">
                <input
                  type="password"
                  placeholder="Enter your password" className="input input-bordered w-full"
                  {...formik.getFieldProps('password')}
                />
                <span className='text-red-700'>
                  {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>}
                </span>
              </div>
              <div className="py-12">
                <button className="btn btn-primary btn-block">Login</button>
              </div>
              <div>
                <span>
                  Already have an account? Let’s
                  <Link href="/login">
                    <button className="btn btn-link no-underline">Login</button>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
