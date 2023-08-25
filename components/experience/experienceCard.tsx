"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import profile from "@/assets/img/profile.png"
import react from "@/assets/img/reactlogo.png"

type Props = {};
export default function ExperienceCard({}: Props) {
    return (
        <div
            className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[900px] snap-center bg-[#292929] p-3 md:p-5 xl:p-10">
            <motion.div initial={{y: -100, opacity: 0}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}}>
                <Image src={profile} alt="profile"
                       className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"/>
            </motion.div>
            <div className="px-0 md:px-5 text-gray-200 font-light">
                <h4 className="text-sm xl:text-xl">React Developer</h4>
                <p className="font-bold text-lg md:text-xl xl:text-2xl mt-1">BMPS Education Center</p>
                <div className="flex space-x-5 my-2  justify-start">
                    <Image className="h-7 w-7 xl:w-10 xl:h-10 rounded-full animate-bounce " src={react} alt="react"/>
                    <Image className="h-7 w-7 xl:w-10 xl:h-10 rounded-full animate-bounce " src={react} alt="react"/>
                    <Image className="h-7 w-7 xl:w-10 xl:h-10 rounded-full animate-bounce " src={react} alt="react"/>
                    <Image className="h-7 w-7 xl:w-10 xl:h-10 rounded-full animate-bounce " src={react} alt="react"/>
                </div>
                <p className="uppercase py-5 text-xs md:text-sm xl:text-lg text-gray-300">Started Work... - Ended...</p>
                <ul className="list-disc space-y-4 ml-5 text-xs md:text-sm xl:text-lg">
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </div>
    );
};
