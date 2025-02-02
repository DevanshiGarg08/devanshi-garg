import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col fixed left-8 top-1/2 space-y-8 text-2xl">
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
        <RiInstagramFill />
      </a>
    </div>
  );
}
