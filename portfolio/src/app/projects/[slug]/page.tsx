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

      {project.slug === "stock-sentiment-analyzer" && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Example Outputs
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <img
              src="/images/stock-sentiment-headlines.png"
              alt="Stock sentiment headlines table"
              className="rounded-lg border"
            />
            <img
              src="/images/stock-sentiment-distribution.png"
              alt="Sentiment label distribution chart"
              className="rounded-lg border"
            />
            <img
              src="/images/stock-sentiment-trends.png"
              alt="Sentiment trends over time"
              className="rounded-lg border"
            />
          </div>
        </section>
      )}
    </main>
  );
}