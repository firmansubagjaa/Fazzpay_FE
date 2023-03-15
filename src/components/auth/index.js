
import Image from "next/image";
import React from 'react'
// import Link from "next/link";
// import axios from "axios";

export default function Auth() {
  return (
    <>
      <div className="navbar bg-base-100 py-5 shadow-md">
        <div className="container">
          <div className="flex-1">
            <div>
              <button className="btn btn-ghost normal-case text-xl">FazzPay</button>
            </div>
          </div>
          <div className="flex flex-none">
            <div className="dropdown dropdown-end">
              <div className="flex">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image src={require('@/assets/images/png/users/user1.png')} alt='' />
                  </div>
                </label>
                <div className="mx-2 text-sm">
                  {/* {localStorage.getItem("@userLogin") ?
                    <span>{JSON.parse(localStorage.getItem("@userLogin")).firstname} {JSON.parse(localStorage.getItem("@userLogin")).lastname}</span>
                    : <span>anonim</span>
                  }<br />
                  {localStorage.getItem("@userLogin") ?
                    <span>{JSON.parse(localStorage.getItem("@userLogin")).phone}</span>
                    : <span> - </span>
                  } */}
                  <span>Test</span>
                  <span>008999999999</span>
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



// const Auth = () => {
//   return (
//     <>
//       <div className="navbar bg-base-100 shadow-md rounded-b-2xl py-5">
//         <div className="container">
//           <div className="flex-1">
//             <a className="btn btn-ghost normal-case text-primary text-2xl">FazzPay</a>
//           </div>
//           <div className="flex-none border-2 border-solid border-black items-center">
//             <div className="dropdown dropdown-end">
//               <div className="flex border-2 border-solid border-black items-center justify-center">
//                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
//                   <div className="w-10 rounded-full">
//                     <Image src={User} />
//                   </div>
//                   <div>
//                     {/* <p>Firman Subagja</p> */}
//                   </div>
//                 </label>
//                 <div className="flex flex-col ml-3 text-sm">
//                   <p>Firman Subagja</p>
//                   <p>+62 8139 3877 7946</p>
//                 </div>
//               </div>
//               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                 <li>
//                   <a className="justify-between">
//                     Profile
//                     <span className="badge">New</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a>Settings</a>
//                 </li>
//                 <li>
//                   <a>Logout</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="dropdown dropdown-end border-2 border-solid border-black">
//               <label tabIndex={0} className="btn btn-ghost btn-circle">
//                 <div className="indicator">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//                   <span className="badge badge-sm indicator-item">8</span>
//                 </div>
//               </label>
//               <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
//                 <div className="card-body">
//                   <span className="font-bold text-lg">8 Items</span>
//                   <span className="text-info">Subtotal: $999</span>
//                   <div className="card-actions">
//                     <button className="btn btn-primary btn-block">View cart</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Auth;
