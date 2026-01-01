import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const workHistory = [
    {
        role: "Graphic Design",
        period: "3 years",
        description: "Providing graphic design services focused on clear visuals and effective communication.",
        highlights: ["Social Media Content", "Brand Identity Assist", "Layouting"]
    },
    {
        role: "Web Design",
        period: "3 years",
        description: "Designing clean and user-friendly websites with a focus on visual clarity and usability.",
        highlights: ["Front end"]
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24 animate-fade-in">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
                        Creative design services {" "}
                        <span 
                        className="font-serif italic font-normal text-white"
                        >
                            Clean visuals.</span>
                    </h2>
                    <p className="text-muted-foreground text-xsm mt-5 leading-relaxed opacity-90">
                        I help brands stand out through purposeful design, combining 
                         visual clarity and strategic thinking to create 
                        beautiful, functional experiences.
                    </p>
                </div>

                {/* Experience List */}
                <div className="max-w-4xl space-y-12">
                    {workHistory.map((work, idx) => (
                        <div 
                            key={idx}
                            className="group relative flex flex-col md:flex-row gap-8 p-1 animate-fade-in"
                            style={{ animationDelay: `${idx * 200}ms` }}
                        >
                            {/* Garis Dekorasi Samping */}
                            <div className="hidden md:block w-1 bg-gradient-to-b from-primary to-transparent rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />

                            <div className="flex-1 glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-primary mb-1">
                                            <Briefcase size={16} />
                                            <span className="text-xs font-bold uppercase tracking-widest">{work.role}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{work.company}</h3>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-muted-foreground bg-white/5 px-4 py-2 rounded-full text-xs self-start">
                                        <Calendar size={14} />
                                        {work.period}
                                    </div>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {work.description}
                                </p>

                                {/* Mini Pills untuk Skill */}
                                <div className="flex flex-wrap gap-2">
                                    {work.highlights.map((skill, i) => (
                                        <span key={i} className="flex items-center gap-1 text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20">
                                            <CheckCircle2 size={10} />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Glow supaya gak sepi */}
            <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10" />
        </section>
    );
};