import Phone1 from "../../assets/images/svg/phone1.svg";
import Phone2 from "../../assets/images/svg/phone2.svg";
// import herobanner from "@/"
import Image from "next/image";

const HeroBanner3 = () => {
  return (
    <>
      <section className="bg-[#473AD10F]">
        <div className="container">
          <div className="grid mx-auto grid-cols-1 lg:grid-cols-2 ">
            <div className="mx-auto">
              <div>
                <Image src={require('@/assets/images/svg/phone2.svg')} alt="phone" className="z-10" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-offset="600" data-aos-duration="800" />
              </div>
              <div>
                <Image src={require('@/assets/images/svg/phone1.svg')} alt="phone" className="" data-aos="fade-up" data-aos-offset="900" data-aos-duration="800" />
              </div>
            </div>
            <div className="py-36">
              <h1 className="font-bold text-center text-5xl mb-14">
                All The <span className="text-[#6379F4] leading-[2.5]">Great</span>
                <br /> FazzPay Features.
              </h1>

              <div className="card w-full bg-base-100 shadow-lg my-10">
                <div className="card-body">
                  <h2 className="card-title">
                    {" "}
                    <span className="text-[#6379F4] leading-loose">1.</span> Small Fee
                  </h2>
                  <p>We only charge 5% of every success transaction done in FazzPay app.</p>
                </div>
              </div>
              <div className="card w-full bg-base-100 shadow-lg my-10">
                <div className="card-body">
                  <h2 className="card-title leading-loose">
                    {" "}
                    <span className="text-[#6379F4]">2.</span> Data Secured
                  </h2>
                  <p>All your data is secured properly in our system and it’s encrypted.</p>
                </div>
              </div>
              <div className="card w-full bg-base-100 shadow-lg my-10">
                <div className="card-body">
                  <h2 className="card-title leading-loose">
                    {" "}
                    <span className="text-[#6379F4]">3.</span> User Friendly
                  </h2>
                  <p>FazzPay come up with modern and sleek design and not complicated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner3;
