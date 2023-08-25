"use client"

import Image from "next/image";
import profile from "@/assets/img/profile.png"
import {motion} from "framer-motion";

type Props = {};
export default function About({}: Props) {
    return (
        <div
            className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-3 md:px-10 justify-center mx-auto items-center">
            <h3 className="tracking-[10px] md:tracking-[15px] xl:tracking-[20px] text-[#F7AB0A] absolute top-[60px] xL:top-24 uppercase text-lg md:text-2xl">About</h3>

            <div
                className="flex flex-col mt-[15vh]">
                <motion.div initial={{x: -200, opacity: 0}} transition={{duration: 1}} whileInView={{x: 0, opacity: 1}} className="mb-5">
                    <Image src={profile} alt="profile picture"
                           className="w-[100px] h-[100px] xl:w-[300px] xl:h-[300px] mx-auto  rounded-full object-cover md:rounded-lg"/>
                </motion.div>

                <p className="px-0 md:px-20 py-10 text-gray-200 leading-8 text-center">
                    My passion for Software development goes beyond lines of code. I am dedicated to creating impactful,
                    seamless user experiences that elevate brands and engage audiences. As a proactive learner, I stay
                    up-to-date with the latest industry trends and technologies, ensuring that my contributions are
                    always at the forefront of innovation.

                    With a proven track record of enhancing team dynamics, mentoring emerging talents, and delivering
                    exceptional solutions, I am excited to bring my energy, skills, and experience to a forward-looking
                    team that values collaboration, innovation, and growth.

                    Lets work together to transform ideas into reality and create web experiences that resonate with
                    users on a deeper level.
                </p>
            </div>

        </div>
    );
};
