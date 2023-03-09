import Image from 'next/image'
import React from 'react'
import user1 from '@/assets/images/png/users/user2.png'

export default function TransactionDetail() {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-md mx-5 lg:mt-4">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Transaction History</h2>
            <form action="">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </form>
          </div>

          {[1, 2, 3, 4,].map((items) => {
            return (
              <>
                <div className='flex justify-between mt-10'>
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
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
