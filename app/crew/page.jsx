"use client";
import { data } from "@/data";
import { styles } from "@/styles/styles";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Crew = () => {
  const [crew, setCrew] = useState(0);

  return (
    <main
      className={`flex flex-col pb-[30px] sm:pb-0 mx-[28px] text-center lg:text-left`}
    >
      <div className="lg:w-full flex justify-center gap-[15px] text-[16px] sm:text-[20px] lg:text-[28px] sm:mt-[40px] sm:justify-start tracking-[2.7px] sm:tracking-[3.375px] lg:tracking-[4.725px]">
        <span className={`${styles.barlow} text-white opacity-25 font-bold`}>
          02
        </span>
        <h5 className={`${styles.barlow} uppercase text-white`}>
          Meet your crew
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-[100px]">
        <div className="flex flex-col flex-1 order-2 sm:order-1 lg:ml-[50px]">
          <motion.div
            className="flex flex-col order-2 sm:order-1 justify-center mt-[30px] sm:mt-[25px] lg:mt-[150px]"
            key={data.crew[crew].name}
            initial={{ opacity: 0, transform: "translateX(-20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
          >
            <h5
              className={`${styles.belle} text-white opacity-[0.5042492] text-[16px] sm:text-[24px] lg:text-[32px] uppercase font-normal`}
            >
              {data.crew[crew].role}
            </h5>
            <h1
              className={`${styles.belle} text-white text-[24px] sm:text-[40px] lg:text-[56px] font-normal uppercase`}
            >
              {data.crew[crew].name}
            </h1>
            <p
              className={`${styles.barlow} text-pcolor px-[20px] lg:px-0 mx-auto lg:mx-0 mt-[20px] text-[15px] sm:text-[16px] lg:text-[18px] leading-[25px] sm:leading-[28px] lg:leading-[32px] max-w-[500px] lg:max-w-[350px]`}
            >
              {data.crew[crew].bio}
            </p>
          </motion.div>
          <div className="mt-[30px] sm:mt-[30px] lg:mt-[100px] mx-auto lg:mx-0 order-1 sm:order-2">
            <ul className="flex">
              {data.crew.map((crewMember, index) => (
                <li
                  key={index}
                  onClick={() => setCrew(index)}
                  className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-[50%] bg-white  [&:not(:last-of-type)]:mr-[30px] cursor-pointer ${
                    crew === index ? "" : "opacity-[0.17436291]"
                  }`}
                ></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sm:w-auto h-[223px] sm:h-auto order-1 sm:order-2 mt-[35px] lg:mt-0 border-b-[1px] border-b-[#505464] sm:border-b-transparent">
          <motion.div
            className="flex justify-center bg-blend-normal mx-auto w-[177.12px] h-[222px] sm:w-[456.37px] sm:h-[572px] lg:w-[568.07px] lg:h-[712px]"
            key={data.crew[crew].name}
            initial={{ opacity: 0, transform: "translateX(20px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.75 }}
          >
            <Image
              className="w-auto h-auto"
              src={data.crew[crew].images.webp}
              alt={data.crew[crew].name}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
