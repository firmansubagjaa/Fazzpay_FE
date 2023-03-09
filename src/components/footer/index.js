const Footer = () => {
  return (
    <>
      <footer className="bg-[#6379F4] text-white">
        <div className="container">
          <div className="pt-14">
            <h3 className="text-4xl font-semibold">FazzPay</h3>
          </div>
          <div className="border-b-2 border-solid border-white py-14">
            <p className="font-light">
              Simplify financial needs and saving <br /> much time in banking needs with <br /> one single app.
            </p>
          </div>
          <div className="py-6 font-light flex flex-col-reverse lg:flex-row justify-between">
            <p>2020 FazzPay. All right reserved</p>
            <div className="flex flex-col mb-4 md:flex-row md:mb-0">
              <p className="pr-5">+62 5637 8882 9901</p>
              <p>contact@fazzpay.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
