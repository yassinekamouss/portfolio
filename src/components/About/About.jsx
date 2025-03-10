import ParticlesBackground from "../ParticlesBackground"
import WhoIam from "./WhoIam"
import Skillset from "./Skillset"
import ToolsIUse from "./ToolsIUse"

export default function About(){
    return (
        <div className="min-h-screen mt-24 flex flex-col">
            <div className="h-1/2">
                <WhoIam />
            </div>
            <div className="h-1/2 bg-main-gradient">
                <Skillset />
                <div className="bg-secondary">
                    <ToolsIUse />
                </div>
            </div>
        </div>
    )
}