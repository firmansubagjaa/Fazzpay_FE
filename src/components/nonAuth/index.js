import Link from "next/link";

const NonAuth = () => {
  return (
    <>
      <nav className="navbar bg-[#6379F4] pt-7 text-white">
        <div className="container">
          <div className="flex-1">

            <button className="btn btn-ghost btn-primary normal-case text-2xl">FazzPay</button>

          </div>
          {/* <div className="navbar-center"></div> */}
          <div className="flex-none">
            <Link href="/login">
              <button class="btn btn-outline border-white text-white px-8">Login</button>
            </Link>
            <Link href="/register">
              <button class="btn bg-white text-black hover:text-white border-0 ml-5 px-8">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NonAuth;
