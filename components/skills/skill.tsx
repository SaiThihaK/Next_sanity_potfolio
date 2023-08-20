import Image from "@/node_modules/next/image";
import { motion } from "framer-motion"
import react from "@/assets/img/reactlogo.png"
type Props = {
    directionLeft?:boolean
};
export default function Skill({directionLeft}: Props) {
    return (
        <div className="group relative flex ">
            <motion.div
                initial={{
                    x: directionLeft ? -200 :200,
                    opactiy:0
                }}
                whileInView={{
                    x: 0,
                    opacity:1
                }}
                transition={{
                    duration:1
                }}
            >
            <Image src={react} alt="react logo" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-28 xl:h-28" />
            </motion.div>
        </div>
    );
};
