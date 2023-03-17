"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Auth from '@/components/auth'
import MoneyInfo from '@/components/moneyInfo'
import GraphPanel from '@/components/graphPanel'
import TransactionPanel from '@/components/transactionPanel'
import Footer2 from '@/components/footer2'

//import
import Link from 'next/link'
import Image from 'next/image'
import Cookies from 'js-cookie';

export default function Home(setIsLogin) {
  const router = useRouter();
  return (
    <>
      <Auth />
      <div className="container py-10">
        <div className="flex w-full">
          <div className="card flex items-start rounded-box mt-5 py-10 lg:mr-5 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <ul className="menu bg-base-100 mb-10 w-64">
                <li className='bordered'><Link href='/dashboard'>
                  <Image src={require('@/assets/images/svg/activegrid.svg')} alt='' />
                  Home</Link>
                </li>
                <li><Link href='/dashboard/transfer'>
                  <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
                  Transfer</Link></li>
                <li><label htmlFor="my-modal-3">
                  <Image src={require('@/assets/images/svg/plus.svg')} alt='' />
                  Top Up</label></li>
                <li><Link href='/dashboard/profile'>
                  <Image src={require('@/assets/images/svg/user.svg')} alt='' />
                  Profile</Link></li>
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
          <div className="">
            <MoneyInfo />
            <div className="flex flex-row justify-evenly">
              <GraphPanel />
              <Link href='/dashboard/transaction'>
                <TransactionPanel />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
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
