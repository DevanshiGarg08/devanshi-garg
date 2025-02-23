"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  return (
    <nav className="absolute top-6 right-10 md:right-20 flex space-x-8 text-lg font-medium z-50">
      {pathname !== "/" && (
        <Link
          href="/"
          className="hover:text-gray-600 transition duration-300 font-poppins"
        >
          home
        </Link>
      )}

      <Link
        href="/skills"
        className="hover:text-gray-600 transition duration-300 font-poppins"
      >
        skills
      </Link>
      <Link
        href="/projects"
        className="hover:text-gray-600 transition duration-300 font-poppins"
      >
        projects
      </Link>
      <Link
        href="/blogs"
        className="hover:text-gray-600 transition duration-300 font-poppins"
      >
        blogs
      </Link>
    </nav>
  );
}
