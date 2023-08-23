"use client"

import React from "react";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/20/solid";
import {SubmitHandler, useForm} from "react-hook-form";

type Props = {};
type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string
}

const Contact = (props: Props) => {

    const {register,handleSubmit} = useForm<Inputs>();

    const   onSubmit:SubmitHandler<Inputs> = (formData)=>{
        window.location.href  = `mailto:saithihak2@gmail.com?subject=${formData.subject}&body=Hi,My name is ${formData.name}.
       ${formData.message} (${formData.email})`
    }
    return (
        <div
            className="flex flex-col md:flex-row relative h-screen text-center md:text-left  max-w-7xl px-3 md:px-10 justify-evenly mx-auto items-center">
            <h3 className="tracking-[20px] text-gray-500 absolute top-24 uppercase text-2xl">
                Contact Us
            </h3>
            <div className="flex flex-col space-y-10 mt-52">
                <h4 className="text-2xl md:text-4xl font-semibold flex flex-col text-center text-gray-100 space-y-4">
                    <span>I have got just what you need</span>
                    <span className=" text-[#F7AB0A]/50">
          &nbsp;Lets Talk.
        </span>
                </h4>
                <div>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse"/>
                        <p className="text-lg md:text-2xl text-gray-100">+959261705085</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse "/>
                        <p className="text-lg md:text-2xl text-gray-100">saithihak@gmail.com</p>
                    </div>
                </div>
                <form className="flex flex-col space-y-2 w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex space-x-2 w-full">
                        <input placeholder="Name" {...register('name')}  className="contactInput" type="text"/>
                        <input placeholder="Email" {...register('email')}  className="contactInput" type="text"/>
                    </div>
                    <input type="text" placeholder="Subject" {...register('subject')} className="contactInput" />
                    <textarea className="contactInput" {...register('message')} placeholder="Message" />
                    <button className="bg-[#F7AB0A] py-2 px-5 md:py-5 md:px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
