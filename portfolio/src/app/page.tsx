import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { Linkedin, Github, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <img
        src="/images/headshot.jpg"
        alt="Justin Kim headshot"
        className="mb-6 h-28 w-28 rounded-full object-cover"
      />
      <h1 className="text-4xl font-bold text-black">Justin Kim</h1>

      <p className="mt-2 text-lg font-medium text-gray-800">
        Data Analytics & Finance Projects
      </p>

      <p className="mt-6 max-w-xl text-gray-700">
        Graduate student in data analytics engineering building practical projects
        across finance, analytics, and machine learning.
      </p>

      <div className="mt-6 flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/jkim555"
          target="_blank"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-gray-900"
        >
          <Linkedin className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/iluvcoding123"
          target="_blank"
          aria-label="GitHub"
          className="text-gray-700 hover:text-gray-900"
        >
          <Github className="h-6 w-6" />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          aria-label="Resume"
          className="text-gray-700 hover:text-gray-900"
        >
          <FileText className="h-6 w-6" />
        </a>
      </div>

      {/* Projects */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
    ))}
      </section>
    </main>
  );
}