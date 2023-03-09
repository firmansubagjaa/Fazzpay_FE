import Image from "next/image";
import user1 from '@/assets/images/png/users/user1.png'
import React from 'react'
import Link from "next/link";
import arrow from '@/assets/images/svg/arrow-left.svg'

export default function ProfileComponent() {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-md">
        <div className="card-body">
          <div className="flex items-center flex-col leading-loose justify-center">
            <Image src={user1} />
            <Link href=''>
              <span className="text-slate-400 ">
                Edit
              </span>
            </Link>
            <div className="text-center">
              <h3 className="font-semibold">Firman Subagja</h3>
              <span className="text-slate-400 ">+62995722353739</span>
            </div>
            <div>
              <Link href='/dashboard/profile/'>
                <button className="btn btn-block h-14 my-5">
                  <p>Personal Information</p>
                  <Image src={arrow} />
                </button>
              </Link>
              <Link href=''>
                <button className="btn btn-block h-14">
                  <p>Change Password</p>
                  <Image src={arrow} />
                </button>
              </Link>
              <Link href=''>
                <button className="btn btn-block h-14 my-5">
                  <p>Change PIN</p>
                  <Image src={arrow} />
                </button>
              </Link>
              <label htmlFor="my-modal-6" className="btn btn-block h-14">
                <p>Log Out</p>
                <Image src={arrow} />
              </label>
              {/* The button to open modal */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

