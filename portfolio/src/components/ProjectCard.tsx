import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tech: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block rounded-lg border border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md hover:border-gray-300"
    >
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <p className="mt-3 text-xs text-gray-500">{tech}</p>
    </Link>
  );
}