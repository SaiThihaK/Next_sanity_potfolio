import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row relative h-screen text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="tracking-[20px] text-gray-500 absolute top-24 uppercase text-2xl">
        Contact Us
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center text-gray-100">
          I have got just what you need
        </h4>
        <span className="text-4xl text-gray-100 text-center text-[#F7AB0A]/50">
          Lets Talk.
        </span>
      </div>
    </div>
  );
};

export default Contact;
