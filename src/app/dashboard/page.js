"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Auth from '@/components/auth'
import MoneyInfo from '@/components/moneyInfo'
import GraphPanel from '@/components/graphPanel'
import TransactionPanel from '@/components/transactionPanel'
import Footer2 from '@/components/footer2'

//import
import Image from 'next/image'
import Cookies from 'js-cookie';
import DashboardComponents from './components/dashboardComponents';
import TransfersComponent from './components/transferComponents';
import ProfileComponent from './components/profileComponents';

export default function Home(setIsLogin) {
  const [openTab, setOpenTab] = useState(1)

  const router = useRouter();
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className='flex justify-between items-center md:hidden py-5'>
            {/* <!-- Page content here --> */}
            <div>
              <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
            </div>
            <div>
              <p className='text-2xl font-semibold'>FazzPay</p>
            </div>
            <div className="flex flex-none">
              <div className="dropdown dropdown-end">
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <p className="badge">New</p>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <p className="badge badge-sm indicator-item">8</p>
                  </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <p className="font-bold text-lg">8 Items</p>
                    <p className="text-info">Subtotal: $999</p>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:grid">
            <Auth />
          </div>
          <div className="container py-10">
            <div className="flex w-full">
              <div className="card flex items-start rounded-box mt-5 py-10 lg:mr-5 shadow-md">
                <div className="hidden lg:flex flex-col justify-between h-full">
                  <ul className="menu bg-base-100 mb-10 w-64">
                    <li className={`${openTab == 1 ? "bordered" : ""}`}><button onClick={() => {
                      setOpenTab(1)
                    }}>
                      <Image src={require('@/assets/images/svg/activegrid.svg')} alt='' width="30" />
                      Home</button>
                    </li>
                    <li className={`${openTab == 2 ? "bordered" : ""}`}><button onClick={() => {
                      setOpenTab(2)
                    }} >
                      <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
                      Transfer</button></li>
                    <li><label htmlFor="my-modal-3">
                      <Image src={require('@/assets/images/svg/plus.svg')} alt='' />
                      Top Up</label></li>
                    <li className={`${openTab == 3 ? "bordered" : ""}`}><button onClick={() => {
                      setOpenTab(3)
                    }}>
                      <Image src={require('@/assets/images/svg/user.svg')} alt='' />
                      Profile</button></li>
                  </ul>
                  <ul className="menu">
                    <li><a onClick={() => {
                      Cookies.remove("@userLogin", { path: '' });
                      router.push('/')
                    }}>
                      <Image src={require('@/assets/images/svg/log-out.svg')} alt='' />
                      Logout</a></li>
                  </ul>
                </div>
              </div>

              {/* <Dashboard /> */}
              <div className={openTab == 1 ? "flex" : "hidden"}>
                <DashboardComponents />
              </div>
              <div className={openTab == 2 ? "flex" : "hidden"}>
                <TransfersComponent />
              </div>
              <div className={openTab == 3 ? "flex" : "hidden"}>
                <ProfileComponent />
              </div>
            </div>
          </div>
          <Footer2 />
        </div>

        {/* main drawer */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="flex flex-col justify-center items-center bg-primary p-10 rounded-xl">
              <div className="rounded-full">
                <Image src={require('@/assets/images/png/users/user1.png')} alt='' className='w-24 rounded-full p-2' />
              </div>
              <div className="mx-2 text-sm flex flex-col items-center text-white">
                {Cookies.get("@userLogin") ? (<p>{JSON.parse(Cookies.get("@userLogin")).firstname}</p>) : ""}
                {Cookies.get("@userLogin") ? (<p>{JSON.parse(Cookies.get("@userLogin")).phone}</p>) : ""}
                {/* {localStorage.getItem("@userLogin") ?
                    <span>{JSON.parse(localStorage.getItem("@userLogin")).firstname} {JSON.parse(localStorage.getItem("@userLogin")).lastname}</span>
                    : <span>anonim</span>
                  }<br />
                  {localStorage.getItem("@userLogin") ?
                    <span>{JSON.parse(localStorage.getItem("@userLogin")).phone}</span>
                    : <span> - </span>
                  } */}
              </div>
            </div>

            <div className='flex flex-col justify-between h-96'>
              <div className='mt-5'>
                <li className={`${openTab == 1 ? "bordered" : ""}`}><button onClick={() => {
                  setOpenTab(1)
                }}>
                  <Image src={require('@/assets/images/svg/activegrid.svg')} alt='' width="30" />
                  Home</button>
                </li>

                <li className={`${openTab == 2 ? "bordered" : ""}`}><button onClick={() => {
                  setOpenTab(2)
                }}>
                  <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
                  Transfer</button>
                </li>

                <li><label htmlFor="my-modal-3">
                  <Image src={require('@/assets/images/svg/plus.svg')} alt='' />
                  Top Up</label></li>

                <li className={`${openTab == 3 ? "bordered" : ""}`}><button onClick={() => {
                  setOpenTab(3)
                }}>
                  <Image src={require('@/assets/images/svg/user.svg')} alt='' />
                  Profile</button>
                </li>
              </div>
              <div>
                <ul className="menu">
                  <li><a onClick={() => {
                    Cookies.remove("@userLogin", { path: '' });
                    router.push('/')
                  }}>
                    <Image src={require('@/assets/images/svg/log-out.svg')} alt='' />
                    Logout</a></li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <form className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Top Up</h3>
          <p className="py-4">Enter the amount of money, and click submit</p>
          <input type="text" name="topup" id="topup" className="input input-bordered w-full mb-12" />
          <button className='btn btn-primary px-5 float-right' type='submit'>submit</button>
        </form>
      </div>
    </>
  )
}
