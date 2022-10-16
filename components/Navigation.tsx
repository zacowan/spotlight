import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex flex-wrap space-x-8 px-8 py-2 rounded-full shadow border border-slate-200">
        <li className="font-medium hover:underline">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="font-medium hover:underline">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li className="font-medium hover:underline">
          <Link href="/setup">
            <a>Setup</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
