//import
"use client"
import axios from 'axios'
import React from 'react'
import HeroLogin from '@/components/heroLogin'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { RegisterValidate } from 'lib/validate'


export default function Register() {
  const router = useRouter();
  const [validate, setValidate] = useState({ error: false, message: '' })

  const [RegisterForm, setRegisterForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
  })

  const handleRegister = (event) => {
    event.preventDefault();
    const data = new URLSearchParams(RegisterForm)
    axios.post("http://localhost:5000/api/v1/auth/register-user/", data).then((res) => {
      console.log(res.data.data);;
      router.push('/login');
    }).catch((err) => {
      setValidate({ err: true })
    })
  }
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
            <form onSubmit={handleRegister}>
              <div className="form-control w-full py-5">
                <input
                  type="text"
                  placeholder="Enter your firstname" className="input input-bordered w-full"
                  onChange={(e) => {
                    setRegisterForm({
                      ...RegisterForm,
                      firstname: e.target.value
                    })
                  }}
                />

              </div>
              <div className="form-control w-full py-5">
                <input type="text"
                  placeholder="Enter your lastname" className="input input-bordered w-full"
                  onChange={(e) => {
                    setRegisterForm({
                      ...RegisterForm,
                      lastname: e.target.value
                    })
                  }}
                />

              </div>
              <div className="form-control w-full py-5">
                <input
                  type="email"
                  placeholder="Enter your email" className="input input-bordered w-full"
                  onChange={(e) => {
                    setRegisterForm({
                      ...RegisterForm,
                      email: e.target.value
                    })
                  }}
                />

              </div>
              <div className="form-control w-full py-5">
                <input
                  type="password"
                  placeholder="Enter your password" className="input input-bordered w-full"
                  onChange={(e) => {
                    setRegisterForm({
                      ...RegisterForm,
                      password: e.target.value
                    })
                  }}
                />
              </div>
              <div className="form-control w-full py-5">
                <input
                  type="tel"
                  placeholder="Enter your phone" className="input input-bordered w-full"
                  onChange={(e) => {
                    setRegisterForm({
                      ...RegisterForm,
                      phone: e.target.value
                    })
                  }}
                />
              </div>
              <div className="py-12">
                <button className="btn btn-primary btn-block">Register</button>
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
