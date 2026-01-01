import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/ahmadakbarfauzani", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmad-akbar-fauzani-a79359394/", label: "LinkedIn" },
    { icon: Instagram, href: "https://Instagram.com/akbarfzann", label: "Instagram" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            AAF<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Ahmad Akbar Fauzani. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => 
                        <a
                        key={social.label} 
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                        >
                            <social.icon className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};