"use client"

import {motion} from "framer-motion";
import Skill from "@/components/skills/skill";

type Props = {};
export default function Skills({}: Props) {
    return (
        <motion.div
            className="flex flex-col  relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="tracking-[20px] text-[#F7AB0A] absolute top-[60px] xL:top-24 uppercase text-lg md:text-2xl">skills</h3>
            <h3 className="absolute top-[100px] xl-top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for currency profieciency
            </h3>
               <div className="grid grid-cols-4 gap-7 mt-10">
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
               </div>


        </motion.div>
    );
};
