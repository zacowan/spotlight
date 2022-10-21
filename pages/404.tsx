import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const NotFound404: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <MainContainer>
        <section className="w-full max-w-prose space-y-8 pt-20">
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
      <Footer />
    </Layout>
  );
};

export default NotFound404;
