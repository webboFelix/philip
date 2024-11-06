import React from "react";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import AnimatedComponent from "../animations/AnimatedComponent";

const Tech = ({ name, x, y }) => {
  return (
    <motion.div
      className="cursor-pointer flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black absolute lg:py-2 lg:px-4 md:text-sm mdLpy-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-black xs:dark:text-white xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold dark:text-white underline text-4xl mt-20 w-full text-center capitalize">
        skills.
      </h2>
      <p className="font-semibold dark:text-white/40 text-black/50 text-xl mt-2 mb-5 w-full text-center md:text-sm md:mt-5">
        Elevating Engineering, Journeying Towards Innovating Sustainable and
        Resilient Infrastructure.
      </p>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:bg-circularDarkLg
      lg:bg-circularLightMd lg:bg-circularDarkMd
      lg:bg-circularLightSm lg:bg-circularDarkSm"
      >
        <motion.div
          className="cursor-pointer flex items-center justify-center rounded-full font-semibold bg-black sm:dark:text-black md:dark:text-black text-white p-8 shadow-black lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          CAD
        </motion.div>

        <Tech name="Etabs design software." x="-18vw" y="-15vw" />
        <Tech name="P Protastructure" x="20vw" y="6vw" />
        <Tech name="Pilesoft" x="0vw" y="12vw" />
        <Tech name="BS" x="15vw" y="-12vw" />
        <Tech name="Eurocodes" x="28vw" y="-5vw" />
        <Tech name="KCsoft" x="-15vw" y="-8vw" />
        <Tech name="Civil 3D software" x="-28vw" y="0vw" />
        <Tech
          name="Wind
          analysis"
          x="-18vw"
          y="6vw"
        />
        <Tech name="Seismic analysis" x="0vw" y="-20vw" />
        <Tech name="Structural Drawings" x="0vw" y="20vw" />
      </div>
      <Layout className="!mx-0">
        <h2 className="text-center dark:text-white/70 text-black/70 text-2xl capitalize font-bold">
          Technical skills i have.
        </h2>
        <div>
          <ul className="dark:text-white">
            <AnimatedComponent duration={1}>
              <li className="flex items-center gap-4 my-5">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/50/nui2--v2.png"
                  alt="nui2--v2"
                  className="animate-bounce"
                />
                <p>
                  advanced structural designer with prolific expertise in
                  Protastructure software.
                </p>
              </li>
            </AnimatedComponent>

            <AnimatedComponent duration={1}>
              {" "}
              <li className="flex items-center gap-4 my-5">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/50/nui2--v2.png"
                  alt="nui2--v2"
                  className="animate-bounce"
                />
                <p>Versatile knowledge in AutoCAD detailing software.</p>
              </li>
            </AnimatedComponent>

            <AnimatedComponent duration={1}>
              {" "}
              <li className="flex items-center gap-4 my-5">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/50/nui2--v2.png"
                  alt="nui2--v2"
                  className="animate-bounce"
                />
                <p>
                  Well-equipped practical knowledge of construction sites and
                  real time solutions on sites due to high exposure in sites
                  from setting out to the end of structural works.
                </p>
              </li>
            </AnimatedComponent>

            <AnimatedComponent duration={1}>
              <li className="flex items-center gap-4 my-5">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/50/nui2--v2.png"
                  alt="nui2--v2"
                  className="animate-bounce"
                />
                <p>
                  Real time analysis and design of structures subjected to
                  lateral loading effects. Proficient in Microsoft office-
                  programmed structural excel sheets for quick checks for
                  adequacy of structural elements at a glance.
                </p>
              </li>
            </AnimatedComponent>
          </ul>
        </div>
        <h2 className="text-center mb-10 dark:text-white/70 text-black/70 text-2xl capitalize font-bold">
          soft skills.
        </h2>
        <div className="flex dark:text-white justify-between w-full gap-[5%] lg:flex-col lg:space-y-5">
          <div className="bg-black/50 hover:bg-transparent border-2 transition-all duration-300 easeInOut transform hover:bottom-5 p-8 rounded-xl relative w-[50%] lg:w-full hover:animate-pulse shadow-custom">
            <ul className="flex flex-col">
              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-ping"
                />
                <p>Team player.</p>
              </li>

              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-bounce"
                />
                <p>Quick- decision making skills.</p>
              </li>

              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-ping"
                />
                <p>Time management skills.</p>
              </li>

              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-bounce"
                />
                <p>High integrity and honesty.</p>
              </li>

              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-ping"
                />
                <p>Leadership skills.</p>
              </li>
            </ul>
          </div>

          <div className="bg-black/80 hover:bg-black/20 border-2 transition-all duration-300 easeInOut transform hover:bottom-5 p-8 rounded-xl relative w-[50%] lg:w-full hover:animate-pulse shadow-custom">
            <ul>
              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-bounce"
                />
                <p> Ability to work under pressure.</p>
              </li>
              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-ping"
                />
                <p>Excellent interpersonal skills.</p>
              </li>
              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-pulse"
                />
                <p>Highly flexible.</p>
              </li>
              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-ping"
                />
                <p> Critical thinking and creativity.</p>
              </li>
              <li className="flex items-center gap-4 my-2">
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/isometric/50/approval.png"
                  alt="approval"
                  className="animate-bounce"
                />
                <p>Analytical skills.</p>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Skills;
