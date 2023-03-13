"use client";
import HeroLogin from '@/components/heroLogin'
import axios from 'axios';
// import { useFormik } from 'formik'
// import login__validate from 'lib/validate'
import Link from 'next/link'
// import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
// import Image from 'next/image'



export default function Login() {
  const router = useRouter();
  const [validate, setValidate] = useState({ error: false, message: '' })

  const [LoginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new URLSearchParams(LoginForm)
    axios.post("https://vast-red-clam-suit.cyclic.app/api/v1/auth/login", data).then((res) => {
      console.log(res.data.data);
      localStorage.setItem('@userLogin', JSON.stringify(res.data.data));
      router.push('/dashboard')
    }).catch((err) => {
      setValidate({ error: true })
    })
  };
  useEffect(() => {
    if (localStorage.getItem('@userLogin')) {
      router.push('/dashboard')
    }
  }, [])

  return (
    <>
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

              <form onSubmit={handleLogin}>
                <div className="form-control w-full py-5">
                  <input type="email"
                    placeholder="Enter your e-mail" className="input input-bordered w-full"
                    onChange={(e) => {
                      setLoginForm({
                        ...LoginForm,
                        email: e.target.value
                      })
                    }} />
                </div>
                <div className="form-control w-full py-5">
                  <input
                    type="password"
                    placeholder="Enter your password" className="input input-bordered w-full"
                    onChange={(e) => {
                      setLoginForm({
                        ...LoginForm,
                        password: e.target.value
                      })
                    }} />
                  <div>
                    {/* <span className='text-red-700'>
                      {formik.errors.password && formik.touched.password ? <span>{formik.errors.password}</span> : <></>}
                    </span> */}
                    <button className="btn btn-link float-right no-underline">Forgot your password?</button>
                  </div>
                </div>
                <div className="py-12">
                  <button type='submit' className="btn btn-primary btn-block">Login</button>
                </div>
                <div>

                  Don’t have an account? Let’s
                  <Link href="/register">
                    <button className="btn btn-link no-underline">Sign Up</button>
                  </Link>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 
