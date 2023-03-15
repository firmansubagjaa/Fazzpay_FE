import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TransfersComponent() {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-md mx-5 lg:mt-4">
        <div className="card-body">
          <div className="flex flex-col justify-between">
            <h2 className="card-title pb-5">Send Receiver</h2>
            <form action="">
              <div className="form-control">
                <div className="input-group">
                  <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                  <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                </div>
              </div>
            </form>
          </div>

          {[1, 2, 3, 4,].map((items) => {
            return (
              <>
                <Link href='/dashboard/transfer/input-transfer'>

                  <div className="card w-full shadow-md">
                    <div className='flex justify-between py-3 px-2'>
                      <div className='flex'>
                        <Image src={require('@/assets/images/png/users/user2.png')} alt='user' />
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
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
