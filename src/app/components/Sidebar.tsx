import { BsBehance } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col fixed left-8 top-1/2 space-y-8 text-2xl">
        <SocialLinks />
      </div>

      {/* Footer for Mobile */}
      <div className="md:hidden flex justify-center w-full opacity-90 py-4">
        <SocialLinks isFooter />
      </div>
    </>
  );
}

function SocialLinks({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <div
      className={`flex ${
        isFooter
          ? "flex-row justify-between items-center w-full px-16"
          : "flex-col space-y-8"
      } text-2xl  ${isFooter ? "text-black" : "text-black"}`}
    >
      <a
        href="https://github.com/DevanshiGarg08"
        target="_blank"
        className="hover:opacity-80"
      >
        <FaGithub />
      </a>
      <a
        href="http://linkedin.com/in/devanshi-garg-43522b192"
        target="_blank"
        className="hover:opacity-80"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/devanshixgarg"
        target="_blank"
        className="hover:opacity-80"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.behance.net"
        target="_blank"
        className="hover:opacity-80"
      >
        <BsBehance />
      </a>
    </div>
  );
}
