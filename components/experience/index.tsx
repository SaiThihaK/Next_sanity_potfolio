import {motion} from "framer-motion";
import Image from "next/image";
import profile from "@/assets/img/profile.png";
import ExperienceCard from "@/components/experience/experienceCard";

type Props = {};
export default function Index({}: Props) {
    return (

        <div
            className="flex flex-col md:flex-row relative h-screen text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="tracking-[20px] text-gray-500 absolute top-24 uppercase text-2xl">Experience</h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>

        </div>

    );
};
