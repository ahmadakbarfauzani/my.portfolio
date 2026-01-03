import { Github, ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
    {
    title: "Poster",
    description:
      "Poster design focused on strong visual hierarchy, clear typography, and clean layout.",
      image: "/Project/Project-1.png",
      tags: ["Photoshop", "Illustrator"],
      link: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%201.png",
      github: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%201.png",
    },
    {
    title: "Magazine",
    description:
      "Magazine design emphasizing layout consistency, typography, and visual storytelling.",
      image: "/Project/Project-2.png",
      tags: ["Photoshop", "Illustrator"],
      link: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%202.png",
      github: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%202.png",
    },
    {
    title: "Packaging",
    description:
      "Packaging design that balances aesthetics and functionality to enhance product appeal.",
      image: "/Project/Project-3.png",
      tags: ["Photoshop", "Illustrator"],
      link: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%203.png",
      github: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%203.png",
    },
    {
    title: "UI/UX",
    description:
      "UI/UX design focused on intuitive navigation, usability, and clean interface design.",
      image: "/Project/Project-4.png",
      tags: ["Photoshop", "Illustrator", "Figma"],
      link: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%204.png",
      github: "https://github.com/ahmadakbarfauzani/my.portfolio/blob/main/public/Project/Project%204.png",
    },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-screen w-full bg-background">
    {/* Bg glows */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10" >
      {/* section header */}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-10 text-secondary-foreground">
          Projects that {""}
          <span className="font-serif italic font-normal text-white">
            make an impact.
            </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          Selected projects that reflect my approach to visual design,
          combining creativity, clarity, and functionality.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image}
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
              className="absolute inset-0
              bg-gradient-to-t from-card via-card/50
              to-transparent opacity-60"
              />
              {/* overlay links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                 href={project.link}
                 target="_blank" 
                 rel="noreferrer"
                 className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ArrowUpRight className="w-5 h-5"/>
                </a>
                <a 
                 href={project.github}
                 target="_blank" 
                 rel="noreferrer"
                 className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                 >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                 <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                 <ArrowUpRight 
                   className="w-5 h-5
                  text-muted-foreground group-hover:text-primary
                  group-hover:translate-x-1
                  group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                  <span 
                  key={tagIdx}
                  className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer">
                  {tag}
                  </span>
                ))}</div>
             </div>
          </div>
        ))}
      </div>

      {/* view All CTA */}
      <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <a 
          href="https://github.com/ahmadakbarfauzani?tab=repositories" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block"
        >
        <AnimatedBorderButton>
        <div className="flex items-center gap-2">
           View All Projects
           <ArrowUpRight className="w-5 h-5" />
        </div>
           </AnimatedBorderButton>
            </a>
         </div>
        </div>
    </section>
  );
};