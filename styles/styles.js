import { Barlow_Condensed, Bellefair } from "@next/font/google";
const barlow = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const belle = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
});

export const styles = {
  linkBorder:
    "relative before:w-full before:h-[3px] before:bg-white before:bg-blend-normal before:absolute before:bottom-0 before:left-0",
  linkHover:
    "relative before:opacity-[0.50214785] before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:bg-blend-normal before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300",
  paragraph: "text-pcolor text-[18px] leading-[25px] sm:leading-[28px]",
  h1: "text-white text-[80px] sm:text-[150px]",
  h5: "text-pcolor text-[16px] sm:text-[20px] lg:text-[28px] tracking-[2.7px] sm:tracking-[4.725px]tracking-[2.7px] sm:tracking-[4.725px]",
  buttonHover:
    "relative before:opacity-[0.103627525] before:w-full before:hover:scale-150 before:h-full before:rounded-[50%] before:bg-white before:bg-blend-normal before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300",
  main: "flex flex-col lg:flex-row mx-[28px] text-center lg:text-left",
  barlow: barlow.className,
  belle: belle.className,
};
