import Image from 'next/image';
import Link from 'next/link'
Image

const Dashboard = () => {
  return (
    <>
      <div className="card flex items-start rounded-box mt-5 py-10 lg:mr-5 shadow-md">
        <div className="flex flex-col justify-between h-full">
          <ul className="menu bg-base-100 mb-10 w-64">
            <li className="hover-bordered"><Link href='/dashboard'>
              <Image src={'@/assets/images/svg/activegrid.svg'} alt='' />
              Home</Link>
            </li>
            <li className="hover-bordered"><Link href='/transfer'>
              <Image src={require('@/assets/images/svg/arrow-up.svg')} alt='' />
              Transfer</Link></li>
            <li><a>
              <Image src={require('@/assets/images/svg/plus.svg')} alt='' />
              Top Up</a></li>
            <li><a>
              <Image src={require('@/assets/images/svg/user.svg')} alt='' />
              Profile</a></li>
          </ul>
          <ul className="menu">
            <li><a>
              <Image src={require('@/assets/images/svg/log-out.svg')} alt='' />
              Logout</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
