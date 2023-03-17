import Auth from '@/components/auth'
import ProfileComponent from '@/components/profilecomponent'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
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
                <li><Link href='/dashboard'>
                  <Image src={require('@/assets/images/svg/activegrid.svg')} alt='' />
                  Home</Link>
                </li>
                <li><Link href='/dashboard/transfer'>
                  <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
                  Transfer</Link></li>
                <li><Link href='/dashboard/top-up'>
                  <Image src={require('@/assets/images/svg/plus.svg')} alt='' />
                  Top Up</Link></li>
                <li className="bordered"><Link href='/dashboard/profile'>
                  <Image src={require('@/assets/images/svg/user.svg')} alt='' />
                  Profile</Link></li>
              </ul>
              {/* <ul className="menu">
                <li htmlFor="my-modal-6">
                  <p>Log Out</p>
                  <Image src={arrow} />
                </li>
              </ul> */}
            </div>
          </div>
          <ProfileComponent />
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure to Log Out?</h3>
          <div className="modal-action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </>
  )
}
