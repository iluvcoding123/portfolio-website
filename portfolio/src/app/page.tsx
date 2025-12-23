import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

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

      {/* Projects */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
    ))}
      </section>
    </main>
  );
}