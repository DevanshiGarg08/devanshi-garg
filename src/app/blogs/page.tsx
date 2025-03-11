import Sidebar from "../components/Sidebar";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen bg-beige text-black">
      {/* Content Wrapper */}
      <div className="flex-grow flex items-center justify-center text-3xl font-bold font-poppins">
        Coming Soon...
      </div>

      {/* Sidebar as Footer on Mobile */}
      <div className="md:hidden w-full">
        <Sidebar />
      </div>
    </div>
  );
}
