import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import ffWebImg from "../assets/ff-web.png";
import englishCenterImg from "../assets/englishcenter.png";
import appTrackerImg from "../assets/app-tracker.png";
const projects = [
  {
    id: 1,
    title: "Fresh-Fruit-Web",
    timeline: "09/2025 - 11/2025",
    description:
      "A full-stack e-commerce web application for fresh produce, built to deliver a smooth shopping experience from product discovery to checkout. It includes category-based browsing, detailed product views, cart and quantity management, and a scalable backend structure designed for future admin features such as inventory control, order management, and promotional campaigns.",
    image: ffWebImg,
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Express.js", "Vite"],
    demoUrl: null,
    githubUrl: "https://github.com/vanhuy2005/fresh-fruit-web",
  },
  {
    id: 2,
    title: "English Center",
    timeline: "11/2025 - 12/2025",
    description:
      "A learning management platform developed for English centers to streamline daily academic operations and communication. The system supports class scheduling workflows, student profile and progress management, and role-based modules for administrators, teachers, and learners, helping teams manage teaching activities more efficiently and consistently.",
    image: englishCenterImg,
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Express.js", "Vite"],
    demoUrl: null,
    githubUrl: "https://github.com/vanhuy2005/english-center",
  },
  {
    id: 3,
    title: "Application Job Tracker",
    timeline: "02/2026 - Now",
    description:
      "An ongoing job application tracking system that helps users organize opportunities and stay on top of every application stage. It provides structured status pipelines, deadline reminders, and task-focused workflows to manage follow-ups, interviews, and priorities in one place, making the job search process more transparent, consistent, and easier to maintain over time.",
    image: appTrackerImg,
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "Express.js",
      "TypeScript",
      "Vite",
      "Socket.IO",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/HoshinoAquamarine01/Job-Application-Tracker",
  },
];
const ProjectSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({
      ...prev,
      [projectId]: true,
    }));
  };
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Project</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, including both completed and
          ongoing work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex h-full flex-col rounded-lg bg-card overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-secondary/50 relative">
                {imageErrors[project.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                    <span className="text-muted-foreground text-sm">
                      Image unavailable
                    </span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Time: {project.timeline}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center pt-2">
                  <div className="flex items-center space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
