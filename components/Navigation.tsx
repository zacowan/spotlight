import React from "react";
import Link from "next/link";
import Image from "next/image";

import smileProfile from "../public/resources/smile_profile.png";

type NavLinkProps = {
  label: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  return (
    <li className="font-medium hover:text-indigo-600 active:scale-95 transition-transform">
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </li>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between items-center max-w-prose m-auto">
      <Link href="/">
        <a className="w-16 active:scale-95 transition-transform">
          <Image
            alt="Memoji face of Zach Cowan"
            className="bg-indigo-300 rounded-full"
            src={smileProfile}
          />
        </a>
      </Link>

      <ul className="flex flex-wrap space-x-8 px-8 py-2 rounded-full shadow border border-slate-200">
        <NavLink href="/" label="Home" />
        <NavLink href="/posts" label="Posts" />
        <NavLink href="/setup" label="Setup" />
      </ul>
    </nav>
  );
};

export default Navigation;
