import React from "react";
import Link from "next/link";
import Image from "next/image";

import smileProfile from "../public/resources/smile_profile.png";

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
        <li className="font-medium hover:text-indigo-600">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="font-medium hover:text-indigo-600">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li className="font-medium hover:text-indigo-600">
          <Link href="/setup">
            <a>Setup</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
