import Image from "next/image";
import Link from "next/link";


const HeroLogin = () => {
  return (
    <>
      <div className="container bg-hero-login text-white">
        <div className="py-5">
          <div className="navbar">
            <Link href="/">
              <button className="btn btn-ghost normal-case text-2xl">FazzPay</button>
            </Link>

          </div>

          <Image src={require('@/assets/images/svg/phone3.svg')} alt="" />
          <div>
            <div className="py-5">
              <h1 className="font-semibold text-2xl">App that Covering Banking Needs.</h1>
            </div>
            <p className="font-light">
              FazzPay is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in FazzPay everyday with worldwide users coverage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLogin;
