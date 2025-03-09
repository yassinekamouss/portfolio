import ParticlesBackground from "../ParticlesBackground"
import Findme from "./Findme"
import Hero from "./Hero"
import Introduction from "./Introduction"

export default function Home(){
    return (
        <div className="min-h-screen  mt-24 flex flex-col">
            <div className="h-1/2">
                <Hero />
            </div>
            <div className="h-1/2 bg-main-gradient">
                <Introduction />
                <div className="bg-secondary">
                    <Findme />
                </div>
            </div>
        </div>
    )
}