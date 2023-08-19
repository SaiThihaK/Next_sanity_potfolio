"use client"

import {motion} from "framer-motion";


type Props = {};
export default function BackgroundCircles({}: Props) {
    return (
        <motion.div className="relative flex justify-center items-center z-0"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        scale: [1, 2,2, 3, 1],
                        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.8],

                    }}
                    transition={{
                        duration: 2.5,
                    }}
        >
            <div
                className="absolute border-[rgb(51, 51, 51)] border w-[200px] h-[200px] rounded-full animate-ping mt-52"/>
            <div className="absolute border-[rgb(51, 51, 51)] h-[300px] rounded-full  mt-52"/>
            <div className=" absolute border-[rgb(51, 51, 51)] w-[500px] h-[500px] rounded-full mt-52"/>
            <div
                className="absolute border-[#F7AB0A] opacity-20 border w-[650px] h-[650px] rounded-full mt-52 animate-pulse"/>
            <div className="absolute border-red-600 opacity-20 border w-[800px] h-[800px] rounded-full mt-52"/>
        </motion.div>
    );
};
