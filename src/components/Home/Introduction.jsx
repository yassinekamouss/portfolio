import Avatar from "../../assets/avatar.png";

export default function Introduction() {
  return (
    <div className="w-4/5 mx-auto p-4 mt-24 font-sans text-white">
      <div className="mt-12 px-4 py-6 md:px-16">
        <div className="text-4xl font-bold text-center">
            <span className="shadow-sm bg-clip-text">
                LET ME INTRODUCE <span className="text-primary">MYSELF</span>
            </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 px-4">
            <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                <img src={Avatar} alt="Yassine Kamouss" className="w-64 h-64 rounded-full mx-auto md:mx-0 shadow-lg" />
            </div>
            <div className="w-full md:w-2/3">
                <p className="text-xl md:ms-[-20px] text-gray-300 leading-relaxed mb-4">
                    Hi! I’m Yassine, a full stack developer passionate about crafting innovative solutions. I love diving into the world of DevOps,
                    exploring cloud technologies, and experimenting with artificial intelligence anything that pushes the boundaries of tech inspires me.
                    Currently pursuing higher studies in IT, I blend theory and practice to build meaningful projects. Curious, driven, and always up for a
                    challenge, I see coding as a way to turn ideas into reality.
                </p>
                <p className="text-xl md:ms-[-20px] text-gray-300 leading-relaxed mb-4">
                    In my journey, I focus on learning new technologies and applying them in real-world scenarios to make an impact. My goal is to continue
                    growing as a developer while contributing to the tech community by building scalable and efficient solutions.
                </p>
                <p className="text-xl md:ms-[-20px] text-gray-300 leading-relaxed">
                    I believe in the power of collaboration and strive to work with like-minded individuals who share the same passion for creating impactful
                    products. Let’s connect and build something amazing together!
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
