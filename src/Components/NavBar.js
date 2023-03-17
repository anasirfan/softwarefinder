import Link from 'next/link';
import logo from '../Components/logo.png'; 
import Image from 'next/image';
import styles from '../Components/navbar.module.css';
import { fetcher } from 'lib/api';
const Navbar = () => {

  return (
    <nav className={`flex h-14 justify-between items-center ${styles.custombg} p-4`}>
      <div className="flex items-center ml-20">
        <Image src={logo} alt="Logo" className="w-52 h-18 pr-5" />
        
      </div>
        <div className="flex items-center">
        <div className="flex items-center pr-8   space-x-14">
        <Link href="/medicalsoftware">
          <span className="text-white text-base font-semibold hover:text-gray-300">Medical Software</span>
        </Link>
        <Link href="/othersoftware">
          <span className="text-white text-base font-semibold hover:text-gray-300">Other Software</span>
        </Link>
        <Link href="/resources">
          <span className="text-white text-base font-semibold hover:text-gray-300">Resources</span>
        </Link>
        </div>
      
        <div className="flex items-center bg-white text-blue-400 ml-5 rounded py-1 px-3 mr-20 hover:bg-orange-400 transition delay-600">
  <span className="px-3"></span>
</div>
    </div>
    </nav>
  );
};

export default Navbar;

export async function getServerSideProps() {
  

  return {
    props: {
      articles: data,
    },
  };
}
