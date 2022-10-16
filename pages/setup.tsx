import React from "react";
import Head from "next/head";

import SetupBlurb from "../components/SetupBlurb";
import SetupBlurbSection from "../components/SetupBlurbSection";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import MainContainer from "../components/MainContainer";

const Setup: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>zacowan | Spotlight | Setup</title>
      </Head>
      <Navigation />
      <MainContainer>
        <section className="max-w-prose w-full pt-20 space-y-8">
          <h1 className="text-4xl font-medium tracking-tight">
            Stuff that makes my life easier. And now, yours.
          </h1>
          <p className="text-slate-600">
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
              label="Hyper"
              blurb="A beautiful terminal replacement."
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
    </Layout>
  );
};

export default Setup;
