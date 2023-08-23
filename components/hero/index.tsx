"use client"

import BackgroundCircles from "@/components/hero/backgroundCircles";
import profilePic from "@/assets/img/profile.png"
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {};
export default function Hero({}: Props) {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <div  className="h-screen flex flex-col space-y-8 justify-center items-center  text-center overflow-hidden">
                <BackgroundCircles />
            <Image src={profilePic} alt="profile" className="relative rounded-fill h-32 w-32 mx-auto rounded-full" />
            <h1 className='text-[#F7AB0A] uppercase text-sm  tracking-[7px] md:text-lg md:tracking-[15px]'>Software Developer</h1>
            <div className="pt-2 z-30">
                <Link href={"#about"} scroll={true} onClick={handleScroll}>
                    <button className="heroBtn">{`<About />`}</button>
                </Link>
                <Link href={"#experience"} scroll={true} onClick={handleScroll}>
                    <button className="heroBtn">{`<Experience />`}</button>
                </Link>
               <Link href={"#skills"} onClick={handleScroll}>
                   <button className="heroBtn">{`<Skills />`}</button>
               </Link>
              <Link href={"#projects"} onClick={handleScroll}>
                  <button className="heroBtn">{`<Projects />`}</button>
              </Link>
                <Link href={"#contact"} onClick={handleScroll}>
                    <button className="heroBtn">{`<Contact />`}</button>
                </Link>
            </div>
        </div>
    );
};
