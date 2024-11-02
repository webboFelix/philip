import React, { useEffect, useRef } from "react";
import AnimatedText from "../animations/AnimatedText";
import Layout from "../layout/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";
//import Experiene from "../experience/Experiene";
//import Education from "../education/Education";
//import Article from "../Article/Article";
import Transition from "../transition/Transition";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Transition />
      <div className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-32">
          <AnimatedText
            text="From Blueprint to Resilient Modern Structure."
            className="mb-16 lg:pt-16 lg:!text-4xl sm:!text-2xl xs:!text-xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/50">
                biography
              </h2>
              <p className="font-medium  dark:text-white">
                I am a civil engineering student with a profound passion for the
                design and practical implementation of civil and structural
                works. My ambition is to apply my knowledge to contribute to
                Sustainable Development Goal 9, which focuses on building
                resilient infrastructure and fostering innovation and
                technology. Eager to learn from experienced professionals, I aim
                to advance my career and make meaningful contributions to the
                field of civil engineering.
              </p>
              <p className="my-4 font-medium dark:text-white">
                As an engaged student engineer, I have successfully designed a
                six-story residential building, collaborating closely with
                contractors and seasoned architects to ensure practical
                construction outcomes. This hands-on experience has enriched my
                understanding of the complexities involved in civil projects and
                reinforced my commitment to excellence in design and execution.
              </p>
              <p className="my-4 font-medium dark:text-white">
                Additionally, I have served as a site engineer for the
                construction of two residential structures in Kiambu County. In
                this role, I maintained continuous compliance with industry
                regulations and legislation by staying informed about current
                standards. This practical involvement has not only honed my
                technical skills but also deepened my dedication to sustainable
                practices in civil engineering.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 bg-black w-[102%] h-[105%] -z-10 -right-4 rounded-[1.5rem]" />
              <img
                src="./balaka1.png"
                alt="prof"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 h-[50%] xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end dark:text-white justify-between md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium dark:text-white/40 capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  year of experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium dark:text-white/40 capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  my certificates.
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl dark:text-white/40 font-medium capitalize text-black/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projacts.
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </div>
    </>
  );
};

export default About;
