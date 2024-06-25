import { useRef } from "react";

import Third from "./Third";
import { motion, useInView } from "framer-motion";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Footer from "./footer";
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { treshold: 0.01 });
  return (
    <>
      <div className=" text-slate-50 overflow-y-auto w-screen h-screen">
        <div className="flex  bg-[url('/bg.jpg')] pl-8 md:pl-14 bg-center h-screen bg-cover w-full">

          <div className="flex flex-col justify-center w-[74%] md:mr-0 items-start mt-20">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-slate-50 mb-4 uppercase text-5xl text-start font-extrabold"
            >
              Get healthy body with the right exercises
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="text-start text-lg leading-5 mb-6"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusamus dignissimos magnam alias.
            </motion.span>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="flex justify-between items-center mb-8"
            >
              <button className="px-10 py-2.5 bg-yellow rounded-md text-md font-semibold mr-6">
                Get Started
              </button>
              <span className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-50 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Video
              </span>
            </motion.div>

            <div className="flex items-center mb-3 md:mb-0">
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 1.3 }}
                className="px-2 text-start py-0 border-e-2 border-slate-50 flex flex-col justify-between"
              >
                <span className="font-extrabold">102+ </span>
                <span className="text-sm font-light">Expert Trainers</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 1.4 }}
                className="px-2 text-start py-0 border-e-2 border-slate-50 flex flex-col justify-between"
              >
                <span className="font-extrabold">405+</span>
                <span className="text-sm font-light">Members Joined</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 1.5 }}
                className="px-2 text-start py-0 flex flex-col justify-between"
              >
                <span className="font-extrabold">124+</span>
                <span className="text-sm font-light">Fitness Programs</span>
              </motion.p>
            </div>
          </div>

          <img
            className="hidden lg:block translate-x-6"
            src="/Pic1.png"
            alt=""
          />
          {/* socials */}
          <div className="h-full flex flex-col justify-center items-center translate-x-12  lg:-translate-x-12">
            <svg
              className="w-6 h-6 mb-8 hover:text-yellow text-slate-50 ease-in"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-5 h-5 mb-8 hover:text-yellow text-slate-50 ease-in"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
            <svg
              className="w-6 h-6 hover:text-yellow text-slate-50 ease-in"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </div>
        </div>

        {/* second part */}
        <div className="bg-[url('bg2.jpg')] bg-center bg-cover w-full px-8 py-12">
          <div className="flex flex-col justify-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="pl-4 mb-6 border-s-2 border-yellow"
            >
              <p className="text-start md:text-lg">Get Ready To</p>
              <h3 className="text-lg md:text-2xl text-start text-yellow font-semibold uppercase">
                Reach Your Fitness Goals
              </h3>
            </motion.div>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <img
                className="w-[78%] md:w-[46%] mb-8 md:mb-0 grayscale saturate-50 rounded-md"
                src="/about.jpg"
                alt=""
              />
              <div className="flex flex-col md:ml-12 justify-center">
                <p className="text-start mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  non obcaecati labore maxime perspiciatis, hic aliquid veniam
                  numquam consectetur, dicta a suscipit? Nostrum, architecto!
                  Animi debitis quisquam ipsa? Exercitationem, nihil.
                </p>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas necessitatibus rem assumenda voluptatibus
                  reprehenderit at, eligendi facilis in eum quae?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Third />
        </div>
        <div className="w-full">
          <Fourth />
        </div>
        <div className="w-full">
          <Fifth />
        </div>
        <div className="w-full">
          <Sixth />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
