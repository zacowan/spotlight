import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import smileProfile from "../public/resources/smile_profile.png";

type NavLinkProps = {
  label: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  const router = useRouter();

  return (
    <li className="relative w-max py-3 px-3 font-medium hover:text-indigo-600 md:py-0 md:px-0 md:transition-transform md:active:scale-95">
      <Link href={href}>
        {router.asPath === href ? (
          <a className="after:absolute after:top-0 after:bottom-0 after:-left-1 after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-indigo-600/60 md:after:left-0 md:after:right-0 md:after:-bottom-1 md:after:top-auto md:after:mx-auto">
            {label}
          </a>
        ) : (
          <a>{label}</a>
        )}
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
  return (
    <nav className="m-auto flex max-w-prose items-center justify-between">
      <Link href="/">
        <a
          aria-label="Home"
          className="w-16 transition-transform active:scale-95"
        >
          <Image
            alt="Memoji face of Zach Cowan"
            className="rounded-full bg-indigo-300"
            src={smileProfile}
          />
        </a>
      </Link>

      <ul className="hidden flex-wrap space-x-8 rounded-full border border-slate-200 bg-white px-8 py-2 shadow md:flex">
        <Links />
      </ul>

      <Dialog.Root>
        <Dialog.Trigger className="rounded-full border border-slate-200 px-8 py-2 shadow transition-shadow hover:shadow-md md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="absolute top-0 left-0 right-0 bottom-0 flex justify-center backdrop-blur-sm">
            <Dialog.Content className="mx-2 mt-10 flex h-max w-full flex-col space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow">
              <div className="flex items-center justify-between">
                <Dialog.Title className="px-3 text-sm">
                  Navigation Links
                </Dialog.Title>
                <Dialog.Close className="flex h-11 w-11 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Dialog.Close>
              </div>
              <ul className="space-y-2">
                <Links />
              </ul>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
};

export default Navigation;
