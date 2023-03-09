import ActiveGrid from '@/assets/images/svg/activegrid.svg'
import Transfer from '@/assets/images/svg/arrow-up.svg'
import Plus from '@/assets/images/svg/plus.svg'
import User from '@/assets/images/svg/user.svg'
import Logout from '@/assets/images/svg/log-out.svg'
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
              <Image src={ActiveGrid} />
              Home</Link>
            </li>
            <li className="hover-bordered"><Link href='/transfer'>
              <Image src={Transfer} />
              Transfer</Link></li>
            <li><a>
              <Image src={Plus} />
              Top Up</a></li>
            <li><a>
              <Image src={User} />
              Profile</a></li>
          </ul>
          <ul className="menu">
            <li><a>
              <Image src={Logout} />
              Logout</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
