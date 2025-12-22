import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-3xl font-bold text-black">
        {project.title}
      </h1>

      <p className="mt-4 max-w-2xl text-gray-700">
        {project.description}
      </p>

      <p className="mt-6 text-sm text-gray-500">
        <span className="font-medium text-gray-700">Tech:</span>{" "}
        {project.tech}
      </p>

      <div className="mt-10 rounded-lg border border-dashed border-gray-300 p-8 text-gray-500">
        Project visuals coming soon.
      </div>
    </main>
  );
}