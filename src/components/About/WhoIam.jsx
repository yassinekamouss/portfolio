import ParticlesBackground from "../ParticlesBackground";
import WorkingAvatar from "../../assets/workingavatar.svg";

const myQuotes = [
    "♟️ Programming is like chess – think ahead, adapt, and never stop learning.",
    "💡 Every line of code, like every move in chess, is a step toward mastery.",
    "🚀 Great software, like a great strategy, is built with precision and vision.",
    "📜 Code, like life, is all about solving problems one move at a time."
]

export default function WhoIam(){
    return (
        <div className="p-4 w-4/5 mx-auto mt-24">
            <div className="absolute -z-10">
                <ParticlesBackground />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center h-full md:px-16">
                <div>
                    <h3 className="text-5xl font-sans font-bold mb-7">
                        This Is Who <span className="text-primary">I'M</span>
                    </h3>
                    <p className="text-xl font-sans leading-relaxed">
                        I'm <span className="font-bold text-primary">Yassine Kamouss</span>, a passionate software engineering student from Casablanca, Morocco.  <br />
                        Currently pursuing my engineering degree in <span className="text-primary">Software and Intelligent Systems</span> at FST Tanger,  <br />
                        I hold a Bachelor's degree in Computer Engineering.  <br />
                        Beyond coding, I enjoy strategic thinking in chess and staying active with football.  
                    </p>
                    <blockquote className="mt-5 text-xl italic text-primary font-semibold">
                        "{myQuotes[Math.floor(Math.random() * myQuotes.length)]}"
                    </blockquote>
                </div>
                <img src={WorkingAvatar} alt="working avatar" className="scale-x-[-1] w-sm h-sm md:mt-6" />
            </div>
        </div>
    )
}