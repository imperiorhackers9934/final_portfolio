
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Imperior Blogs",
    description: "A Next JS blog platform with a sleek, futuristic design and advanced features.",
    image: "https://hximboiknruyncrgrqjk.supabase.co/storage/v1/object/sign/mypersonals/imperior_blogs.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteXBlcnNvbmFscy9pbXBlcmlvcl9ibG9ncy5wbmciLCJpYXQiOjE3NDQ0ODE5MzcsImV4cCI6MjM3NTIwMTkzN30.QKOo3VLqwlWrObrZ3rtaX1tunD6zvLNPHT_MHiuBzUU",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    githubLink: "https://github.com/imperiorhackers9934/imperiorblogs",
    liveLink: "https://imperiorblogs.vercel.app/",
  },
  {
    id: 2,
    title: "Gaming Portfolio",
    description: "A dynamic portfolio showcasing gaming projects and achievements.",
    image: "https://hximboiknruyncrgrqjk.supabase.co/storage/v1/object/sign/mypersonals/gaming_portfolio.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteXBlcnNvbmFscy9nYW1pbmdfcG9ydGZvbGlvLnBuZyIsImlhdCI6MTc0NDQ4MjM0MiwiZXhwIjoyMzc1MjAyMzQyfQ.IjEtkfRbLwMFvhOObvPFjwjFOmxr2SYanzECEhGog_E",
    tech: ["Next.js", "Framer Motion", "Node Js", "JSON"],
    githubLink: "https://github.com/imperiorhackers9934/gaming_portfolio",
    liveLink: "https://gamingportfolio-tanishq-mishras-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Imperior BOT",
    description: "A Telegram Bot for accessing PSIT ERP features in telegram.",
    image: "https://hximboiknruyncrgrqjk.supabase.co/storage/v1/object/sign/mypersonals/telegram_bot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteXBlcnNvbmFscy90ZWxlZ3JhbV9ib3QucG5nIiwiaWF0IjoxNzQ0NDgyNjcxLCJleHAiOjIzNzUyMDI2NzF9.oj7v1H76ndtMyUjtE0mi5x7BvIAO-DzW7TPFT9iC9As",
    tech: ["Python", "Railway Deployment", "Beautiful Soup"],
    githubLink: "https://github.com/imperiorhackers9934/mytestbot",
    liveLink: "https://t.me/Imperior_erpbot",
  },
  {
    id: 4,
    title: "iChat",
    description: "A basic Chatting Application with real-time messaging and user authentication.",
    image: "https://hximboiknruyncrgrqjk.supabase.co/storage/v1/object/sign/mypersonals/ichat.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteXBlcnNvbmFscy9pY2hhdC5qcGVnIiwiaWF0IjoxNzQ0NDgzMDQ0LCJleHAiOjIzNzUyMDMwNDR9.XX1q9vG-2dB3mcNtCnJj7gCzg4DsNlPV648fCwSCXMQ",
    tech: ["Expo (React Native)", "Node.js", "Clerk Auth", "Supabase"],
    githubLink: "https://github.com/imperiorhackers9934/iChat",
    liveLink: "https://lnkd.in/dPuTv6Vx",
  },
];


const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient-primary">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="scifi-panel relative group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,240,255,0.2)]"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute inset-0 bg-scifi-blue/80 opacity-50 group-hover:opacity-70 transition-opacity z-0"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 mix-blend-luminosity"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-scifi-darker via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-gradient-primary">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} className="bg-scifi-cyan/20 text-white border border-scifi-cyan/40">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white hover:bg-scifi-cyan/20 border border-scifi-cyan/30"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-scifi-cyan/20 hover:bg-scifi-cyan/40 text-white border border-scifi-cyan/50"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
