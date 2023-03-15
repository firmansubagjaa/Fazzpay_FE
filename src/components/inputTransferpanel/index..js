import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function inputTranspanel() {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-md mx-5 lg:mt-4">
        <div className="card-body">
          <div className="flex flex-col justify-between">
            <h2 className="card-title pb-5">Transfer Money</h2>
          </div>
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

          {/* {[1, 2, 3, 4,].map((items) => {
            return (
              <>
                <Link href='transfer/input-transfer'>

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
                </Link>
              </>
            )
          })} */}
        </div>
      </div>
    </>
  )
}
