'use client'
import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//images
import testimoni1 from "../../assets/images/jpg/harrysyles.jpg";
import testimoni2 from "../../assets/images/jpg/niallhoran.jpg";
import testimoni3 from "../../assets/images/jpg/louis.jpg";

const Testimony = () => {
  const [testi, setTesti] = useState([]);
  useEffect(() => {
    setTesti([
      {
        id: 1,
        name: "Niall Horan",
        image: testimoni1,
        skill: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        id: 2,
        name: "Harry Styles",
        image: testimoni2,
        skill: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        id: 3,
        name: "Louis Tomlinson",
        image: testimoni3,
        skill: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        id: 4,
        name: "Niall Horan",
        image: testimoni1,
        skill: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        id: 5,
        name: "Harry Styles",
        image: testimoni2,
        skill: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
      {
        id: 6,
        name: "Louis Tomlinson",
        image: testimoni3,
        skill: "Web Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
      },
    ]);
  }, []);

  return (
    <>
      <div className="py-32">
        <div className="container hidden md:inline">
          <h1 className="text-center text-3xl font-semibold mb-10" data-aos="fade-in" data-aos-offset="300" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            Their opinion about peworld
          </h1>
          <Swiper
            className="max-w-5xl h-full shadow-2xl rounded-2xl"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={3}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testi.map((item) => (
              <SwiperSlide key={item.id} className="slide">
                <div className="card bg-white w-full mx-auto">
                  <figure className="px-10 pt-10">
                    <Image src={item.image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="text-slate-400">{item.skill}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <GetStarted /> */}
        </div>
        <div className="container md:hidden">
          <h1 className="text-center text-3xl font-semibold mb-10" data-aos="fade-in" data-aos-offset="100" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            Their opinion <br /> about peworld
          </h1>
          <Swiper
            className="max-w-none h-fit"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={3}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testi.map((item) => (
              <SwiperSlide key={item.id} className="slide">
                <div className="card bg-white w-80 mx-auto">
                  <figure className="px-10 pt-10">
                    <Image src={item.image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="text-slate-400">{item.skill}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <GetStarted /> */}
        </div>
      </div>
    </>
  );
};

export default Testimony;
