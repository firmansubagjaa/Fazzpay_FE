import React from 'react'
import Image from 'next/image'

export default function Testimony() {
  return (
    <>
      <div className="container">
        <div className="py-28 text-center">
          <div>
            <h1 className="text-center text-5xl font-bold mb-10">
              What Users are <span className='text-[#6379F4]'>Saying</span>.
            </h1>
          </div>
          <div className='py-10'>
            <span>We have some great features from the application and it’s totally free <br /> to use by all users around the world.</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
            {[1, 2, 3].map(() => {
              return (
                <>
                  <div className="card w-[22rem] bg-base-100 shadow-xl my-10">
                    <figure className="px-10 pt-10">
                      <Image src={require('@/assets/images/png/users/user1.png')} alt="Shoes" className="rounded-xl" width={50} height={50} />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Medi Fajar</h2>
                      <p>“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>



    //       {
    //   [1].map(() => {
    //     return (
    //       <>

    //       </>
    //     )
    //   })
    // }

  )
}
