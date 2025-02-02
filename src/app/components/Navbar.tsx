export default function Navbar() {
  return (
    <nav className="fixed top-6 right-10 md:right-20 flex space-x-8 text-lg font-medium z-50">
      <a
        href="/skills"
        className="hover:text-gray-600 transition duration-300 font-poppins"
      >
        skills
      </a>
      <a
        href="/projects"
        className="hover:text-gray-600 transition duration-300 font-poppins"
      >
        projects
      </a>
      <a
        href="/blogs"
        className="hover:text-gray-600 transition duration-300 font-poppins"
      >
        blogs
      </a>
    </nav>
  );
}
