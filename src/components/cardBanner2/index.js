import Image from "next/image";

const CardBanner2 = () => {
  return (
    <>
      <div>
        <div className="flex items-center flex-col lg:flex-row justify-center">
          <div className="card w-96 bg-white shadow-lg">
            <div className="card-body items-center text-center">
              <div className="">
                <Image src={require('@/assets/images/svg/contact.svg')} alt="contact" />
              </div>
              <h2 className="card-title my-5">24/7 Support</h2>
              <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
            </div>
          </div>
          <div className="card w-96 bg-white shadow-lg my-5 lg:mx-5 lg:my-0">
            <div className="card-body items-center text-center">
              <div className="">
                <Image src={require('@/assets/images/svg/security.svg')} alt="security" />
              </div>
              <h2 className="card-title my-5">Data Privacy</h2>
              <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
            </div>
          </div>
          <div className="card w-96 bg-white shadow-lg">
            <div className="card-body items-center text-center">
              <div className="">
                <Image src={require('@/assets/images/svg/download.svg')} alt="download" />
              </div>
              <h2 className="card-title my-5">Easy Download</h2>
              <p>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBanner2;
