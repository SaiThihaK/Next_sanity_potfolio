import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about"
import Skills from "@/components/skills";
import Project from "@/components/projects/index";
import Contact from "@/components/contact/index"
import Experience from "@/components/experience";


export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] h-screen  w-full  flex flex-col snap-y snap-mandatory p-2 overflow-x-hidden">
            <Header/>
            <section className="snap-center">
                <Hero/>
            </section>
            <section id="about" className="snap-start">
                <About/>
            </section>
            <section id="experience" className="snap-end">
                <Experience/>
            </section>
            <section id="skills" className="snap-start">
                <Skills/>
            </section>
            <section id="projects" className="snap-start">
                <Project/>
            </section>

            <section id="contact" className="snap-end">
                <Contact/>
            </section>



        </div>
    )
}
