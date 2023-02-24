import Image from "next/image";
import banner from '../Components/banner.png';
const Banner = () => {
  return (
    <div >
      <Image
        src={banner}
        alt="Banner Image"
      
      />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className=" fixed text-lg text-white mt-8">
        <h1 >
          How Switching to an LMS can be the Ultimate Game Changer
        </h1>
        </div>
        
      <div className="absolute inset-0 flex flex-row justify-center items-center text-center px-8">
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="border-2 border-gray-500 rounded-lg px-4 py-2 mb-2 w-full"
            placeholder="Name"
          />
          <input
            type="text"
            className="border-2 border-gray-500 rounded-lg px-4 py-2 mb-2 w-full"
            placeholder="Organization Name"
          />
          <input
            type="text"
            className="border-2 border-gray-500 rounded-lg px-4 py-2 mb-2 w-full"
            placeholder="Phone"
          />
          <input
            type="text"
            className="border-2 border-gray-500 rounded-lg px-4 py-2 mb-4 w-full"
            placeholder="Email"
          />
          <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded hover:bg-orange-600 transition duration-200">
            Request Demo
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;