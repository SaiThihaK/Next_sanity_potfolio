
import ExperienceCard from "@/components/experience/experienceCard";

type Props = {};
export default function Experience({}: Props) {
    return (

        <div
            className="flex flex-col md:flex-row relative min-h-screen text-center md:text-left  max-w-7xl px-1 md:px-10 justify-evenly mx-auto items-center">
            <h3 className="tracking-[10px] md:tracking-[15px] xl:tracking-[20px] text-[#F7AB0A] absolute top-[60px] xL:top-24 uppercase text-lg md:text-2xl">Experience</h3>
            <div className="w-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A] p-5 pt-10 snap-x snap-mandatory ">
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>

        </div>

    );
};
