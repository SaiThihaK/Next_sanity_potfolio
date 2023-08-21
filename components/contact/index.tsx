import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/20/solid";

type Props = {};

const Contact = (props: Props) => {
    return (
        <div
            className="flex flex-col md:flex-row relative min-h-screen text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="tracking-[20px] text-gray-500 absolute top-24 uppercase text-2xl">
                Contact Us
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center text-gray-100">
                    I have got just what you need
                    <span className=" text-[#F7AB0A]/50">
          &nbsp;Lets Talk.
        </span>
                </h4>
                <div>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl text-gray-100">+959261705085</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse "/>
                        <p className="text-2xl text-gray-100">saithihak@gmail.com</p>
                    </div>
                </div>
                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input  className="contactInput" type="text"/>
                        <input  className="contactInput" type="text"/>
                    </div>
                    <input type="text" className="contactInput" />
                    <textarea className="contactInput" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
