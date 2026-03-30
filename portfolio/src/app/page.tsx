import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { Linkedin, Github, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
      <div className="pl-2 sm:pl-4">
      <div className="flex items-center gap-6">
        <img
          src="/images/headshot.jpg"
          alt="Justin Kim headshot"
          className="h-28 w-28 rounded-full object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-black">Justin Kim</h1>

          <p className="mt-2 text-lg font-medium text-gray-800">
            Applied Data Analytics & Finance
          </p>
        </div>
      </div>

      <p className="mt-6 max-w-xl text-gray-700 sm:max-w-none sm:whitespace-nowrap">
        Graduate student in data analytics engineering with experience in Python, SQL, and building end-to-end data projects.
      </p>

      <div className="mt-6 flex items-center gap-8">
        <a
          href="/resume.pdf"
          target="_blank"
          aria-label="Resume"
          className="text-gray-600 transition-colors duration-150 hover:text-gray-900"
        >
          <FileText className="h-7 w-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/jkim555"
          target="_blank"
          aria-label="LinkedIn"
          className="text-gray-600 transition-colors duration-150 hover:text-gray-900"
        >
          <Linkedin className="h-7 w-7" />
        </a>

        <a
          href="https://github.com/iluvcoding123"
          target="_blank"
          aria-label="GitHub"
          className="text-gray-600 transition-colors duration-150 hover:text-gray-900"
        >
          <Github className="h-7 w-7" />
        </a>
        
      </div>
      </div>
      {/* Projects */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
    ))}
      </section>
      </div>
    </main>
  );
}
