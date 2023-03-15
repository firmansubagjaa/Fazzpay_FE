
import Image from "next/image";

const HeroBanner1 = () => {
  return (
    <>
      <div className="hero min-h-screen pt-52 bg-[#6379F4] bg-no-repeat bg-top bg-auto text-white -mt-36">
        <div className="container">
          <div className="hero-content flex-col text-center lg:flex-row-reverse lg:text-left">
            <div data-aos="fade-up" data-aos-duration="1400">
              <div>
                <Image src={require('@/assets/images/svg/phone.svg')} className="w-screen lg:max-w-lg rounded-lg" alt='phone' width={700}
                  height={700} />
              </div>
            </div>
            <div className=" lg:mr-36 leading-10">
              <h1 className="text-5xl font-bold leading-relaxed" >
                Awesome App For Saving Time.
              </h1>
              <p className="py-6" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
                We bring you a mobile app for banking problems that oftenly wasting much of your times.
              </p>
              <button className="btn btn-primary px-10" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1000">
                Try it Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner1;
