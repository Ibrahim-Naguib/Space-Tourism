"use client";
import { styles } from "@/styles/styles";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className="mt-[25px] sm:mt-[100px] mx-auto w-[325px] sm:w-[450px]">
        <h5 className={`${styles.h5} ${styles.barlow}`}>
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className={`${styles.h1} ${styles.belle} mt-[15px]`}>SPACE</h1>
        <p
          className={`${styles.barlow} ${styles.paragraph} mt-[10px] px-[5px] sm:px-[24px] lg:px-0 lg:w-[350px]`}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
        className={`${styles.belle} mb-[25px] sm:mb-0 mx-auto mt-[60px] lg:self-end text-dark text-[20px] tracking-[1.25px] bg-white bg-blend-normal w-[150px] h-[150px] flex items-center justify-center rounded-[50%] cursor-pointer`}
      >
        <Link
          className={`w-full h-full flex justify-center items-center ${styles.buttonHover}`}
          href="/destination"
        >
          EXPLORE
        </Link>
      </motion.div>
    </main>
  );
}
