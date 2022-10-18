import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import MainContainer from "../components/MainContainer";

const NotFound404: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <MainContainer>
        <section className="max-w-prose w-full pt-20 space-y-8">
          <h1 className="text-4xl font-medium tracking-tight">404</h1>
          <p>
            There's nothing to see here. Go back{" "}
            <Link href="/">
              <a className="text-indigo-600 hover:underline">Home</a>
            </Link>
            .
          </p>
        </section>
      </MainContainer>
    </Layout>
  );
};

export default NotFound404;
