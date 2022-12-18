import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import * as Separator from "@radix-ui/react-separator";

const GITHUB_SOCIAL_LINK = "https://www.github.com/zacowan";
const LINKEDIN_SOCIAL_LINK = "https://www.linkedin.com/in/zacowan";
const TWITTER_SOCIAL_LINK = "https://twitter.com/zacowan_";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Separator.Root className="mt-20">
        <hr className="dark:border-slate-800" />
      </Separator.Root>
      <footer className="mx-auto w-full max-w-prose py-20">
        <div className="space-y-4">
          <span className="block px-1 font-semibold">Links</span>
          <div className="space-x-8">
            <Link href="/">
              <a className="py-3 px-1 text-slate-600  hover:text-indigo-600 dark:text-slate-300 hover:dark:text-indigo-500">
                Home
              </a>
            </Link>
            <Link href="/posts">
              <a className="py-3 px-1 text-slate-600 hover:text-indigo-600 dark:text-slate-300 hover:dark:text-indigo-500">
                Posts
              </a>
            </Link>
            <Link href="/setup">
              <a className="py-3 px-1 text-slate-600 hover:text-indigo-600 dark:text-slate-300 hover:dark:text-indigo-500">
                Setup
              </a>
            </Link>
          </div>
          <span className="block px-1 pt-4 font-semibold">Socials</span>
          <div className="space-x-8">
            <SocialIcon
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 hover:dark:text-indigo-500"
              bgColor="transparent"
              fgColor="currentColor"
              url={LINKEDIN_SOCIAL_LINK}
            />
            <SocialIcon
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 hover:dark:text-indigo-500"
              bgColor="transparent"
              fgColor="currentColor"
              url={GITHUB_SOCIAL_LINK}
            />
            <SocialIcon
              className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 hover:dark:text-indigo-500"
              bgColor="transparent"
              fgColor="currentColor"
              url={TWITTER_SOCIAL_LINK}
            />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
