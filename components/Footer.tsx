import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const GITHUB_SOCIAL_LINK = "https://www.github.com/zacowan";
const LINKEDIN_SOCIAL_LINK = "https://www.linkedin.com/in/zacowan";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <hr className="mt-20" />
      <footer className="mx-auto w-full max-w-prose py-20">
        <div className="space-y-4">
          <span className="block px-1 font-semibold">Links</span>
          <div className="space-x-8">
            <Link href="/">
              <a className="py-3 px-1 text-slate-600 hover:text-indigo-600">
                Home
              </a>
            </Link>
            <Link href="/posts">
              <a className="py-3 px-1 text-slate-600 hover:text-indigo-600">
                Posts
              </a>
            </Link>
            <Link href="/setup">
              <a className="py-3 px-1 text-slate-600 hover:text-indigo-600">
                Setup
              </a>
            </Link>
          </div>
          <span className="block px-1 pt-4 font-semibold">Socials</span>
          <div className="space-x-8">
            <SocialIcon
              className="text-slate-600 hover:text-indigo-600"
              bgColor="transparent"
              fgColor="currentColor"
              url={GITHUB_SOCIAL_LINK}
            />
            <SocialIcon
              className="text-slate-600 hover:text-indigo-600"
              bgColor="transparent"
              fgColor="currentColor"
              url={LINKEDIN_SOCIAL_LINK}
            />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
