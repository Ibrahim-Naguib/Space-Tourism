"use client";
import { data } from "@/data";
import { styles } from "@/styles/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { MyImage } from "@/components";

const Technology = () => {
  const [tech, setTech] = useState(0);

  return (
    <main className={`flex flex-col pb-[30px] text-center lg:text-left`}>
      <div className="lg:w-full lg:ml-[28px] flex justify-center gap-[15px] text-[16px] sm:text-[20px] lg:text-[28px] sm:mt-[40px] sm:justify-start tracking-[2.7px] sm:tracking-[3.375px] lg:tracking-[4.725px]">
        <span className={`${styles.barlow} text-white opacity-25 font-bold`}>
          03
        </span>
        <h5 className={`${styles.barlow} uppercase text-white`}>
          SPACE LAUNCH 101
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <motion.div
          className="mt-[35px] lg:order-2"
          key={data.technology[tech].name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <MyImage
            className="lg:hidden mx-auto"
            src={data.technology[tech].images.landscape}
            alt={data.technology[tech].name}
            priority
          />
          <MyImage
            className="hidden lg:block"
            src={data.technology[tech].images.portrait}
            alt={data.technology[tech].name}
            priority
          />
        </motion.div>
        <div className="mt-[35px] lg:mt-[100px] lg:order-1 lg:ml-[35px] lg:flex">
          <div>
            <ul className="flex lg:flex-col justify-center gap-[30px] sm:gap-[20px]">
              {data.technology.map((t, index) => (
                <li
                  key={index}
                  onClick={() => setTech(index)}
                  className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] text-[16px] sm:text-[24px] lg:text-[32px] rounded-[50%] flex items-center justify-center cursor-pointer ${
                    styles.belle
                  } ${
                    tech === index
                      ? "bg-white text-dark"
                      : "text-white border-[1px] border-white border-opacity-25"
                  }`}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            className="text-white mt-[35px] lg:mt-0 lg:ml-[50px]"
            key={data.technology[tech].name}
            initial={{ opacity: 0, transform: "translateY(-20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.75 }}
          >
            <h5
              className={`${styles.barlow} text-[14px] sm:text-[16px] tracking-[2.3625px] sm:tracking-[2.7px] text-pcolor`}
            >
              THE TERMINOLOGY…
            </h5>
            <h1
              className={`${styles.belle} mt-[10px] uppercase text-[24px] sm:text-[40px] lg:text-[56px] text-white `}
            >
              {data.technology[tech].name}
            </h1>
            <p
              className={`${styles.barlow} text-pcolor text-[15px] sm:text-[16px] lg:text-[18px] mt-[20px] leading-[25px] sm:leading-[28px] lg:leading-[32px] px-[35px] lg:px-0 mx-auto lg:mx-0 max-w-[767px] lg:max-w-[420px]`}
            >
              {data.technology[tech].description}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
