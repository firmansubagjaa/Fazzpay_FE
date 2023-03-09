import Microsoft from "../../assets/images/svg/microsoft.svg";
import Dropbox from "../../assets/images/svg/dropbox.svg";
import HnM from "../../assets/images/svg/h&m.svg";
import Airbnb from "../../assets/images/svg/airbnb.svg";
import Image from "next/image";

const SponsorBanner = () => {
  return (
    <>
      <section className="bg-[#473AD10F]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between py-10">
            <Image src={Microsoft} alt="" />
            <Image src={Dropbox} alt="" />
            <Image src={HnM} alt="" />
            <Image src={Airbnb} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorBanner;
