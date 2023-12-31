
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about"
import Index from "@/components/experience";
import Skills from "@/components/skills";
export default function Home() {
    return (
        <div className=" bg-[rgb(36,36,36)]   snap-y snap-mandatory p-2">
            <Header/>
            <section className="snap-center">
                <Hero/>
            </section>
            <section id="#about"  className="snap-start" >
                <About/>
            </section>
            <section id="#experience" className="snap-start" >
                <Index />
            </section>
            <section id="#skills" className="snap-center">
             <Skills />
            </section>
        </div>


    )
}
