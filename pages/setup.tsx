import React from "react";
import Head from "next/head";
import Lottie from "lottie-react";

import SetupBlurb from "../components/SetupBlurb";
import SetupBlurbSection from "../components/SetupBlurbSection";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import toolsFloatingAnimation from "../lotties/tools_floating.json";

const Setup: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>zacowan | Setup</title>
        <meta
          name="description"
          content="Learn about Zachary Cowan's setup and what he recommends."
        />
        <meta name="keywords" content="zachary,cowan,setup" />
      </Head>
      <Navigation />
      <MainContainer>
        <section className="w-full max-w-prose space-y-8 pt-20">
          <div className="flex w-full items-center justify-center">
            <Lottie
              className="w-64 md:w-80"
              animationData={toolsFloatingAnimation}
              loop
            />
          </div>
          <h1 className="text-4xl font-medium tracking-tight">
            Stuff that makes my life easier. And now, yours.
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            I'm a big fan of simple, minimalist designs, and that love trickles
            its way into my life as an engineer. While everyone is going to have
            their own preferences, I'd like to give a list of what I use in my
            day-to-day life to make life, work, and projects as easy and
            enjoyable as possible.
          </p>
          <SetupBlurbSection title="Physical Tools">
            <SetupBlurb
              label="Macbook Air M2"
              blurb="For its power, design, and portability."
            />
            <SetupBlurb
              label="NK65 Aluminum Edition"
              blurb="For a consistently delightful and predictable typing experience."
            />
            <SetupBlurb
              label="Ultrawide Monitor"
              blurb="For the benefit of ~3 monitors without the added clutter."
            />
            <SetupBlurb label="Custom-built Windows PC" blurb="For play." />
          </SetupBlurbSection>
          <SetupBlurbSection title="Software">
            <SetupBlurb
              label="Visual Studio Code"
              blurb="For its speed and extension selection."
            />
            <SetupBlurb
              label="Warp"
              blurb="A fast, rust-based terminal alternative."
            />
            <SetupBlurb
              label="1Password"
              blurb="The best cross-platform password manager."
            />
            <SetupBlurb
              label="Raycast"
              blurb="For marginally better spotlight capabilities."
            />
            <SetupBlurb
              label="Slack"
              blurb="The best place for workplace communication."
            />
            <SetupBlurb
              label="Figma"
              blurb="For designing anything and everything."
            />
          </SetupBlurbSection>
        </section>
      </MainContainer>
      <Footer />
    </Layout>
  );
};

export default Setup;
