import Auth from '@/components/auth'
import Dashboard from '@/components/dashboard'
import TransactionDetail from '@/components/transactionDetail'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//import image
import ActiveGrid from '@/assets/images/svg/activegrid.svg'
import Transfer from '@/assets/images/svg/arrow-up.svg'
import Plus from '@/assets/images/svg/plus.svg'
import User from '@/assets/images/svg/user.svg'
import Logout from '@/assets/images/svg/log-out.svg'

export default function Transaction() {
  return (
    <>
      <Auth />
      <div className="container py-10">
        <div className="flex flex-row">
          <div>
          </div>
          <div className="card flex items-start rounded-box mt-5 py-10 lg:mr-5 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <ul className="menu bg-base-100 mb-10 w-64">
                <li className='bordered'><Link href='/dashboard'>
                  <Image src={ActiveGrid} />
                  Home</Link>
                </li>
                <li><Link href='/dashboard/transfer'>
                  <Image src={Transfer} />
                  Transfer</Link></li>
                <li><label htmlFor='my-modal-3'>
                  <Image src={Plus} />
                  Top Up</label></li>
                <li><Link href='/dashboard/profile'>
                  <Image src={User} />
                  Profile</Link></li>
              </ul>
            </div>
          </div>
          <TransactionDetail />
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
