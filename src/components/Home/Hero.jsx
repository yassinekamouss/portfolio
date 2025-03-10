import ParticlesBackground from "../ParticlesBackground";
import { ReactTyped } from "react-typed";
import HeroImage from "../../assets/hero1.svg";

export default function Hero() {
    return (
        <div className="p-4 w-4/5 mx-auto mt-24">
            <div className="absolute -z-10">
                <ParticlesBackground />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center h-full md:px-16">
                <div>
                    <h3 className="text-5xl font-sans font-bold mb-7">Hi There! 🖐️🖐️</h3>
                    <h3 className="text-5xl font-sans font-bold mb-7 ">I'm <span className="text-primary">Yassine Kamouss</span></h3>
                    <h1 className="text-4xl text-start font-bold font-sans text-center mt-16">
                    <ReactTyped
                        strings={[
                            "I'm a <span class='text-primary'>Full-Stack Developer.</span>",
                            "I build <span class='text-primary'>Scalable Web Applications</span>.",
                            "I specialize in <span class='text-primary'>DevOps / Cloud Computing</span>.",
                            "Passionate about <span class='text-primary'>Automation / (CI/CD)</span>.",
                            "Exploring <span class='text-primary'>AI / Machine Learning</span>.",
                            "Let's build something <span class='text-primary'>Awesome Together!</span>.",
                        ]}
                        typeSpeed={60}        
                        backSpeed={30}
                        loop
                        className="text-white"
                        />
                    </h1>
                </div>
                <img src={HeroImage} alt="Hero Image" className="scale-x-[-1] w-sm h-sm md:mt-6" />
            </div>
        </div>
    )
}