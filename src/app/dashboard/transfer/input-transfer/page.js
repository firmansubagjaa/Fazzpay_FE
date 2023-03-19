import Auth from '@/components/auth'
import Dashboard from '@/components/dashboard'
import TransactionDetail from '@/components/transactionDetail'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import inputTranspanel from '@/components/inputTransferpanel/index.'

//import image
import ActiveGrid from '@/assets/images/svg/activegrid.svg'
import Transfer from '@/assets/images/svg/arrow-up.svg'
import Plus from '@/assets/images/svg/plus.svg'
import User from '@/assets/images/svg/user.svg'
import Logout from '@/assets/images/svg/log-out.svg'
import user1 from '@/assets/images/png/users/user2.png'
import Footer2 from '@/components/footer2'

// import TransferComponent from '@/components/transfers/page'
// import inputTransferspanels from '@/components/inputTransferpanel/index.'

export default function inputTransfers() {
  return (
    <>
      <Auth />
      <div className="container py-10">
        <div className="flex flex-row">
          <div>
          </div>
          <div className="card hidden lg:flex items-start rounded-box mt-5 py-10 lg:mr-5 shadow-md">
            <div className="flex flex-col justify-between h-full">
              <ul className="menu bg-base-100 mb-10 w-64">
                <ul className="menu bg-base-100 mb-10 w-64">
                  <li><Link href='/dashboard'>
                    <Image src={ActiveGrid} />
                    Home</Link>
                  </li>
                  <li className="bordered"><Link href='/dashboard/transfer'>
                    <Image src={Transfer} />
                    Transfer</Link></li>
                  <li><label htmlFor='my-modal-3'>
                    <Image src={Plus} />
                    Top Up</label></li>
                  <li><Link href='/dashboard/profile'>
                    <Image src={User} />
                    Profile</Link></li>
                </ul>
                <ul className="menu">
                  <li><a>
                    <Image src={Logout} />
                    Logout</a></li>
                </ul>
              </ul>
            </div>
          </div>
          {/* <Dashboard /> */}
          <div className="card w-full bg-base-100 shadow-md mx-5 lg:mt-4">
            <div className="card-body">
              <div className="flex flex-col justify-between">
                <h2 className="card-title pb-5">Transfer Money</h2>
              </div>
              <div className="card w-full shadow-md">
                <div className='flex justify-between py-3 px-2'>
                  <div className='flex'>
                    <Image src={user1} alt='user' />
                    <div className='ml-3 pt-2'>
                      <p>Firman Subagja</p>
                      <p>Accept</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span>Rp.200.000</span>
                  </div>
                </div>
              </div>

              <div className='text-gray-400 my-5'>
                <p>Type the amount you want to transfer and then <br />
                  press continue to the next steps.</p>
              </div>
              <form action="">
                <div className='flex justify-center text-4xl my-10'>
                  <input type="tel" name="money" id="money" placeholder='120000' className='w-48 text-center' />
                </div>
                <div className='text-center my-10 font-semibold'>
                  <p>Rp120.000 Available</p>
                </div>
                <div>
                  <button className='btn btn-primary float-right px-10'>Continue</button>
                </div>
              </form>
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
