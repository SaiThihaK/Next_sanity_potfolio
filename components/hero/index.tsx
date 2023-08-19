import BackgroundCircles from "@/components/hero/backgroundCircles";
import profilePic from "@/assets/img/profile.png"
import Image from "next/image";
import Link from "next/link";
type Props = {};
export default function Hero({}: Props) {
    return (
        <div className="h-screen flex flex-col space-y-8 justify-center items-center  text-center overflow-hidden">
                <BackgroundCircles />
            <Image src={profilePic} alt="profile" className="relative rounded-fill h-32 w-32 mx-auto rounded-full" />
            <h1 className='text-gray-500 uppercase  tracking-[15px]'>Software Developer</h1>
            <div className="pt-2 z-30">
                <Link href={"#about"}>
                    <button className="heroBtn">{`<About />`}</button>
                </Link>
                <Link href={"#experience"}>
                    <button className="heroBtn">{`<Experience />`}</button>
                </Link>
               <Link href={"#skills"}>
                   <button className="heroBtn">{`<Skills />`}</button>
               </Link>
              <Link href={"#projects"}>
                  <button className="heroBtn">{`<Projects />`}</button>
              </Link>

            </div>
        </div>
    );
};
