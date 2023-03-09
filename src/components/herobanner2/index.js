import CardBanner2 from "../cardBanner2";

const HeroBanner2 = () => {
  return (
    <>
      <section data-aos="fade-in">
        <div className="container">
          <div className="mx-auto py-24">
            <div className="text-center leading-loose">
              <h1 className="text-center text-4xl font-bold pb-4">
                <span className="text-[#6379F4]">About</span> the Application.
              </h1>
              <div className="my-14">
                <p>
                  We have some great features from the application and it’s totally free <br /> to use by all users around the world.
                </p>
              </div>
            </div>
            <CardBanner2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner2;
