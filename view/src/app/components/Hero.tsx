"use client";
import AppButton from "@/components/ui/AppButton";
import { ImagesSlider } from "@/components/ui/ImageSlider";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { motion } from "framer-motion";
import React from "react";

export function HomPageHero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const images = [
    "https://images.unsplash.com/photo-1496188757881-c6753f20c306?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1575956011521-4d7f5cf0b18e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://s7d2.scene7.com/is/image/TWCNews/greg_olsen_sports_betting_nc_ap",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 ">
            <AppButton variant={"outline"}>Report Lost Item</AppButton>
            <AppButton>Report Found Item</AppButton>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
