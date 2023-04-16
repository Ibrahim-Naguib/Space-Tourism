"use client";
import { data } from "@/data";
import { styles } from "@/styles/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { MyImage } from "@/components";

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(0);

  return (
    <main className={`${styles.main} lg:gap-[100px]`}>
      <div className="flex-1">
        <div className="flex justify-center gap-[15px] text-[16px] sm:text-[20px] lg:text-[28px] sm:mt-[40px] sm:justify-start tracking-[2.7px] sm:tracking-[3.375px] lg:tracking-[4.725px]">
          <span className={`${styles.barlow} text-white opacity-25 font-bold`}>
            01
          </span>
          <h5 className={`${styles.barlow} uppercase text-white`}>
            Pick your destination
          </h5>
        </div>
        <div className="flex justify-center mt-[30px] bg-blend-normal">
          <motion.div
            key={data.destinations[activePlanet].name}
            initial={{ opacity: 0, scale: 0.9, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75 }}
            className="w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px] sm:mt-[30px] relative bg-blend-normal"
          >
            <MyImage
              src={data.destinations[activePlanet].images.webp}
              alt={data.destinations[activePlanet].name}
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="lg:w-[445px] lg:mt-[80px] pb-[35px]">
        <div className="flex justify-center lg:justify-start mt-[30px]">
          <ul className="flex gap-[25px] h-[35px] sm:h-[50px]">
            {data.destinations.map(({ name }, index) => (
              <li key={name} className={`${styles.linkHover}`}>
                <button
                  onClick={() => setActivePlanet(index)}
                  className={`text-pcolor tracking-[2.3625px] sm:tracking-[2.7px] text-[14px] sm:text-[16px] h-full ${
                    styles.barlow
                  } ${
                    activePlanet === index
                      ? `text-white ${styles.linkBorder}`
                      : ""
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          className="flex flex-col justify-center mt-[15px] sm:mt-[25px]"
          key={data.destinations[activePlanet].name}
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ duration: 0.75 }}
        >
          <h1
            className={`${styles.belle} text-white text-[56px] sm:text-[80px] lg:text-[100px] uppercase`}
          >
            {data.destinations[activePlanet].name}
          </h1>
          <p
            className={`${styles.barlow} text-pcolor text-[15px] sm:text-[16px] lg:text-[18px] leading-[25px] sm:leading-[28px] lg:leading-[32px] px-[30px] lg:px-0 lg:pr-[100px] mx-auto max-w-[500px] lg:max-w-[445px]`}
          >
            {data.destinations[activePlanet].description}
          </p>
        </motion.div>
        <hr className="bg-[#383b4b] mt-[30px] sm:w-full sm:max-w-[500px] lg:max-w-[345px] mx-[40px] sm:mx-auto lg:mx-0" />
        <div className="flex flex-col sm:flex-row sm:w-[450px] justify-center sm:justify-around lg:justify-start mt-[30px] sm:mx-auto">
          <div>
            <p
              className={`${styles.barlow} tracking-[2.3625px] text-pcolor text-[14px] uppercase`}
            >
              AVG. DISTANCE
            </p>
            <h2 className={`${styles.belle} text-[28px] text-white uppercase`}>
              {data.destinations[activePlanet].distance}
            </h2>
          </div>
          <div className="mt-[15px] sm:mt-0 lg:ml-[50px]">
            <p
              className={`${styles.barlow} tracking-[2.3625px] text-pcolor text-[14px] uppercase`}
            >
              Est. travel time
            </p>
            <h2 className={`${styles.belle} text-[28px] text-white uppercase`}>
              {data.destinations[activePlanet].travel}
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
