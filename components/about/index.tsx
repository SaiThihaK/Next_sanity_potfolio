"use client"

import Image from "next/image";
import profile from "@/assets/img/profile.png"
import {motion} from "framer-motion";

type Props = {};
export default function About({}: Props) {
    return (
        <div
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
            <h3 className="tracking-[20px] text-gray-500 absolute top-24 uppercase text-2xl">About</h3>

            <div
                className="flex flex-col ">
                <motion.div initial={{x: -200, opacity: 0}} transition={{duration: 1}} whileInView={{x: 0, opacity: 1}} className="mb-5">
                    <Image src={profile} alt="profile picture"
                           className="w-56 h-56 mx-auto  rounded-full object-cover md:rounded-lg"/>
                </motion.div>

                <p className="md:px-20 py-10 text-gray-200 leading-8 text-center">
                    My passion for React development goes beyond lines of code. I'm dedicated to creating impactful,
                    seamless user experiences that elevate brands and engage audiences. As a proactive learner, I stay
                    up-to-date with the latest industry trends and technologies, ensuring that my contributions are
                    always at the forefront of innovation.

                    With a proven track record of enhancing team dynamics, mentoring emerging talents, and delivering
                    exceptional solutions, I am excited to bring my energy, skills, and experience to a forward-looking
                    team that values collaboration, innovation, and growth.

                    Let's work together to transform ideas into reality and create web experiences that resonate with
                    users on a deeper level.
                </p>
            </div>

        </div>
    );
};
