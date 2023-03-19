import Cookies from "js-cookie";
import { useState } from "react";

const MoneyInfo = () => {
  // const [data, setData] = useState([])
  // const fetch = async () => {
  //   try {
  //     const res = await axios()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <>
      <div className="card w-full bg-primary text-white shadow-xl my-5">
        <div className="card-body">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="leading-loose">
              <p className="font-light">Balance</p>
              <h2 className="card-title text-4xl">Rp {Cookies.get("@userLogin") ? (JSON.parse(Cookies.get('@userLogin')).balance) : ""}</h2>
              <p className="font-light">+62 813-9387-7946</p>
            </div>
            <div className="flex flex-row lg:flex-col mt-5">
              <button className="btn btn-[#ffffff] mb-3 mr-3 lg:mr-0">Transfer</button>
              <label htmlFor="my-modal-3" className="btn btn-[#fffff]">Top Up</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyInfo;
