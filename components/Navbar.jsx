import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-screen text-black p-4 flex justify-between items-center mb-2 bg-blue-900">
      <div>Blogger</div>
      <div className=" navigation-links sticky top-0 z-50 flex text-white justify-between gap-5 p-4 border-black border rounded-full backdrop-blur-md">
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/about">
          <div>About</div>
        </Link>
        <Link href="/contact">
          <div>Contact</div>
        </Link>
      </div>
      <div className="social-links flex justify-between gap-2">
        <Link href="https://github.com/sumitgandhi2003" target="_blank">
          <FaGithub size={"1.5rem"} />
        </Link>

        <Link href="https://www.linkedin.com/in/sumit-gandhi" target="_blank">
          <FaLinkedin size={"1.5rem"} fill="#0076b2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
