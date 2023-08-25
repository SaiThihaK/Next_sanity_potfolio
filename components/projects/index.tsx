import React from "react";
import Image from "@/node_modules/next/image";
import project from "@/assets/img/project.png";
import react from "@/assets/img/reactlogo.png";
type Props = {};

export default function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex max-w-7xl flex-col md:flex-row relative h-screen text-center md:text-left px-10 justify-evenly mx-auto items-center">
        <h3 className="tracking-[10px] md:tracking-[15px] xl:tracking-[20px] text-[#F7AB0A] absolute top-[60px] xL:top-24 uppercase text-lg md:text-2xl">
            Projects
        </h3>
      <div className=" items-center w-screen h-screen relative flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#F7AB0A]">
        {projects.map((e, index) => (
          <div
            className="flex-shrink-0 snap-center flex flex-col  space-y-5 items-center  justify-center p-20 md:p-44"
            key={index}
          >
            <Image src={project} alt="project" className="object-fill w-[300px] h-[150px] md:w-[600px] md:h-[300px] mx-auto" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-gray-100 text-sm md:text-2xl font-semibold text-start">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                Victoria Myanmar Co.Ltd
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-30 bg-[#F7AB0A]/30 left-0 h-[150px] md:h-[400px] skew-y-12" />
    </div>
  );
}
