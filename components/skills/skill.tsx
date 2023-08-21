import Image from "@/node_modules/next/image";
import { motion } from "framer-motion"
import react from "@/assets/img/reactlogo.png"
type Props = {
    directionLeft?:boolean
};
export default function Skill({directionLeft}: Props) {
    return (
        <div className="group relative flex w-full">
            <motion.div
                initial={{
                    y: directionLeft ? -200 :200,
                    opacity:0
                }}
                whileInView={{
                    y: 0,
                    opacity:1
                }}
                transition={{
                    duration:1
                }}
            >
            <Image src={react} alt="react logo" className="rounded-full border border-gray-500 object-cover w-[40px] h-[40px] md:w-[60px] md:h-[60px]" />
            </motion.div>
        </div>
    );
};
