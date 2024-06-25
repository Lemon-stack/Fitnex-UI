import { motion } from "framer-motion";

export default function Third() {
  return (
    <div className="px-14 lg:px-24  py-16 bg-[url('/bg.jpg')] bg-cover w-full flex flex-col bg-center h-[10%]">
      <div className="px-4 border-s-2 mb-8 md:mb-14  border-yellow">
        <motion.p className="text-start">Awesome Services</motion.p>
        <h3 className="uppercase text-xl text-yellow font-bold text-start">
          Our story
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <div className="flex flex-col justify-center backdrop-blur-md p-8 rounded-md bg-slate-50/15">
          <img className="size-12 me-4" src="/logo.svg" alt="" />
          <div className="flex flex-col">
            <h3 className="uppercase font-bold text-start text-yellow">
              Pro equipment
            </h3>
            <p className="text-start text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              illum.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center backdrop-blur-md p-8 rounded-md bg-slate-50/15">
          <img className="size-12 me-4" src="/ninja.svg" alt="" />
          <div className="flex flex-col">
            <h3 className="uppercase font-bold text-start text-yellow">
              Ninja coach
            </h3>
            <p className="text-start text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              illum.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center backdrop-blur-md p-8 rounded-md bg-slate-50/15">
          <img className="size-12 me-4" src="/heart.svg" alt="" />
          <div className="flex flex-col">
            <h3 className="uppercase font-bold text-start text-yellow">
              Pro equipment
            </h3>
            <p className="text-start text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              illum.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center backdrop-blur-md p-8 rounded-md bg-slate-50/15">
          <img className="size-10 me-4" src="/time.svg" alt="" />
          <div className="flex flex-col">
            <h3 className="uppercase font-bold text-start text-yellow">
              Pro equipment
            </h3>
            <p className="text-start text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              illum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
