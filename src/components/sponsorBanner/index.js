import Image from "next/image";

const SponsorBanner = () => {
  return (
    <>
      <section className="bg-[#473AD10F]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between py-10">
            <Image src={require('@/assets/images/svg/microsoft.svg')} alt="" />
            <Image src={require('@/assets/images/svg/dropbox.svg')} alt="" />
            <Image src={require('@/assets/images/svg/h&m.svg')} alt="" />
            <Image src={require('@/assets/images/svg/airbnb.svg')} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorBanner;
