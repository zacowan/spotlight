import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import smileProfile from "../public/resources/smile_profile.png";

type NavLinkProps = {
  label: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  return (
    <li className="font-medium hover:text-indigo-600 md:active:scale-95 md:transition-transform w-max">
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </li>
  );
};

const Links: React.FC = () => {
  return (
    <React.Fragment>
      <NavLink href="/" label="Home" />
      <NavLink href="/posts" label="Posts" />
      <NavLink href="/setup" label="Setup" />
    </React.Fragment>
  );
};

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center max-w-prose m-auto">
      <Link href="/">
        <a
          aria-label="Home"
          className="w-16 active:scale-95 transition-transform"
        >
          <Image
            alt="Memoji face of Zach Cowan"
            className="bg-indigo-300 rounded-full"
            src={smileProfile}
          />
        </a>
      </Link>

      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden px-8 py-2 rounded-full shadow border border-slate-200 hover:shadow-md transition-shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-10 flex justify-center ${
          menuOpen ? "visible" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-8 w-full bg-white rounded-3xl border border-slate-200 p-8 shadow mx-2 h-max mt-10">
          <div className="flex justify-between items-center">
            <span className="text-sm">Links</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="space-y-4">
            <Links />
          </ul>
        </div>
      </div>

      <ul className="hidden md:flex flex-wrap space-x-8 px-8 py-2 rounded-full shadow border border-slate-200 bg-white">
        <Links />
      </ul>
    </nav>
  );
};

export default Navigation;
