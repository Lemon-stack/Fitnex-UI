export default function Fourth() {
  return (
    <div className="bg-[url('/bg2.jpg')] md:px-6 flex justify-center pt-1">
      <div className="flex mt-16 flex-col leading-8 justify-center items-start px-10 pb-16 md:pb-0">
        <h4 className="font-bold text-xl md:text-3xl mb-3">Why Choose Us? </h4>
        <p className="font-semibold flex justify-center items-center">
          <svg
            className="flex-shrink-0 w-4 mr-2 h-4 bg-yellow rounded-full"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Personal Training
        </p>
        <span className="text-start md:w-[93%] text-sm font-thin md:font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dolores
          excepturi unde.
        </span>
        <p className="font-semibold flex justify-center items-center">
          <svg
            className="flex-shrink-0 w-4 mr-2 h-4 bg-yellow rounded-full"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Expert Trainer
        </p>
        <span className="text-start md:w-[93%] text-sm font-thin md:font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dolores
          excepturi unde.
        </span>
        <p className="font-semibold flex justify-center items-center">
          <svg
            className="flex-shrink-0 w-4 mr-2 h-4 bg-yellow rounded-full"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Flexible Time
        </p>
        <span className="text-start mb-4 md:w-[93%] font-thin text-sm md:font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dolores
          excepturi unde.
        </span>
        <button className="py-1 px-9 bg-yellow rounded-md text-slate-50">
          Join Today
        </button>
      </div>
      <div className=" relative flex justify-center items-center">
        <svg
          className="absolute"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFB700"
            d="M44,-75.2C57.8,-68.2,70.3,-58,78.3,-44.9C86.3,-31.9,89.9,-15.9,88.9,-0.6C87.8,14.7,82.1,29.4,74.1,42.6C66.2,55.8,55.9,67.4,43.2,75C30.4,82.6,15.2,86.2,0.2,85.8C-14.8,85.5,-29.6,81.2,-43.1,74.1C-56.6,66.9,-68.8,56.8,-76.1,44C-83.4,31.1,-85.9,15.6,-85.7,0.1C-85.4,-15.3,-82.5,-30.6,-75.2,-43.5C-67.9,-56.4,-56.3,-66.8,-43,-74.2C-29.8,-81.5,-14.9,-85.7,0.1,-85.9C15.1,-86.1,30.2,-82.2,44,-75.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <img className="relative hidden md:flex" src="/pic3.png" alt="" />
      </div>
    </div>
  );
}
