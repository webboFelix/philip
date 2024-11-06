import React from "react";
import Layout from "../layout/Layout";
import AnimatedText from "../animations/AnimatedText";
import { Link } from "react-router-dom";
import { LinkArrow } from "../icons/ExternalLink";
import HireMe from "../HireMe";
import Transition from "../transition/Transition";
//import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Transition />
      <div className="flex items-center text-black dark:text-white w-full">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <img
                src="./balaka3.png"
                alt="profile"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                sizes="
        (max-width: 600px) 100vh,
        (max-width: 1200px) 50vh,
        50vh"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Engineering a Sustainable Future: A Quest for Resilient Infrastructure."
                className="!text-4xl text-left xl:!text-3xl md:!text-2xl sm:!text-xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xl">
                I am a civil engineering student with a deep passion in design
                and practical implementation of civil and structural works. I
                would like to use my knowledge to contribute to the sustainable
                development agenda number 9 which deals with building of
                resilient infrastructure and inspiring innovation and
                technology. I would like to work and learn from more experienced
                professionals to help grow my career and allow me contribute
                further in the field of civil engineering.
              </p>
              <div className="flex itemes-center self-start mt-2 lg:self-center">
                <Link
                  to="./CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-black dark:bg-white text-white dark:text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black hover:dark:bg-transparent hover:dark:text-white hover:dark:border-white md:p-2 md:px-4 md:text-base"
                >
                  resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <a
                  href="mailto:philipclement014@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-black dark:text-white underline md:text-base"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <img src="./light.png" alt="light" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Home;
