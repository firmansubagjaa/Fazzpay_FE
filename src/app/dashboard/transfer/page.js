import Auth from '@/components/auth'
import Dashboard from '@/components/dashboard'
import TransactionDetail from '@/components/transactionDetail'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import TransferComponent from '@/components/transfers/index'

export default function Transfers() {
  return (
    <>
      <Auth />
      <div className="container py-10">
        <div className="flex flex-col lg:flex-row">
          <div>
          </div>
          <div className="card hidden lg:flex items-start rounded-box mt-5 py-10 lg:mr-5 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <ul className="menu bg-base-100 mb-10 w-64">
                <li><Link href='/dashboard'>
                  <Image src={require('@/assets/images/svg/activegrid.svg')} alt='' />
                  Home</Link>
                </li>
                <li className="bordered"><Link href='/dashboard/transfer'>
                  <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
                  Transfer</Link></li>
                <li><label htmlFor='my-modal-3'>
                  <Image src={require('@/assets/images/svg/plus.svg')} alt='' />
                  Top Up</label></li>
                <li><Link href='/dashboard/profile'>
                  <Image src={require('@/assets/images/svg/user.svg')} alt='' />
                  Profile</Link></li>
              </ul>
              <ul className="menu">
                <li><a>
                  <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
                  Logout</a></li>
              </ul>
            </div>
          </div>
          {/* <Dashboard /> */}
          <TransferComponent />
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
