"use client"

import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";

type Props = {};
export default function Header({}: Props) {
    return (
        <header className='sticky top-0 flex flex-row items-start justify-between w-full overflow-x-hidden max-w-7xl mx-auto'>
                <motion.div className="flex flex-row items-center overflow-hidden"
                            initial={{
                                x:-500,
                                opacity:0.5,
                                scale:0.5
                            }}

                            animate={{
                                x:0,
                                opacity:1,
                                scale:1
                            }}
                            transition={{
                                duration:1
                            }}
                >
                    <SocialIcon url="https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225" fgColor="gray" bgColor="transparent" />
                    <SocialIcon url="https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225" fgColor="gray" bgColor="transparent" />
                    <SocialIcon url="https://www.linkedin.com/in/sai-thiha-kyaw-24b2a8225" fgColor="gray" bgColor="transparent" />
                </motion.div>

                <motion.div className="flex flex-row items-center text-gray-300"
                            initial={{
                                x:500,
                                opacity:0.5,
                                scale:0.5
                            }}

                            animate={{
                                x:0,
                                opacity:1,
                                scale:1
                            }}
                            transition={{
                                duration:1
                            }}
                >
                    <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
                    <p className="uppercase hidden md:inline-flex text-gray-400">Get In Touch</p>
                </motion.div>
        </header>
    );
};
