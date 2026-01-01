import { Palette, PenTool, Layout, Zap } from "lucide-react";

const highlights = [
    {
        icon: Palette,
        title: "Visual Storytelling",
        description: "Transforming complex ideas into compelling visual narratives that resonate with the audience."
    },
    {
        icon: PenTool,
        title: "Brand Identity",
        description: "Crafting unique and consistent brand identities that build trust and market presence."
    },
    {
        icon: Layout,
        title: "Layout Design",
        description: "Focusing on functional aesthetics to ensure clean, organized, and impactful compositions."
    },
    {
        icon: Zap,
        title: "Creative Strategy",
        description: "Delivering innovative design solutions tailored to meet specific business goals and user needs."
    },
];


export const About = () => {
    return (
        <section id="about"className="py-32 relative overflow-hidden min-h-screen w-full bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Creating Impactful Visual Design,
                        <span className="font-serif italic font-normal text-white">
                            {""}
                             Turning Ideas into Visual.
                        </span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I am a fresh graduate graphic designer 
                            who has been studying and practicing graphic 
                            design for the past three years. During this time, 
                            I have developed a strong foundation in 
                            visual design, layout, color theory, and branding. 
                            I enjoy turning ideas into clear, engaging, 
                            and meaningfull visuals that communicate effectively.
                        </p>
                        <p>
                            In addition to my academic background, 
                            I gained hands-on experience through a three-month internship,
                            where I worked on real design projects
                            and collaborated with a team. This experience 
                            helped me understand professional workflows, meet 
                            deadlines, and adapt to client needs.
                        </p>
                        <p>
                            I am passionate about learning, growing, and continuously
                            improving my skills as a graphic designer. I am motivated, 
                            detail-oriented, and eager to contribute creative solutions 
                            while gaining more professional experience in the design industry.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to create clear, meaningfull, and visually 
                            impactful designs that communicate ideas effectively,
                            while continuously learning and growing as a graphic designer."
                        </p>
                    </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
