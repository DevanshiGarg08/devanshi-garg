import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Image from "next/image";

export default function App() {
  return (
    <div className="min-h-screen bg-beige text-black relative">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar Icons */}
      <Sidebar />

      {/* Content Wrapper with Adjusted Spacing */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 pt-28 md:pt-64 pb-10">
        {/* Left Section - Main Text */}
        <div className="flex-1 ml-14 md:ml-24">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block font-poppins">creative designer</span>
            <span className="block font-poppins">& developer.</span>
          </h1>
          <p className="text-lg font-poppins md:text-xl text-gray-600 max-w-lg mt-4">
            Hi, I'm Devanshi Garg, a multidisciplinary developer & designer
            based in India.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1/2 flex justify-end">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[485px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/5.jpeg"
              alt="Devanshi Garg"
              width={400}
              height={485}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
