import Link from "next/link";
import { Home, Plane, LineChart, Database, ShieldAlert } from "lucide-react";

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
  const projectIcon = () => {
    switch (slug) {
      case "housing-price-prediction":
        return <Home className="h-5 w-5 text-gray-600" />;
      case "british-airways-tableau":
        return <Plane className="h-5 w-5 text-gray-600" />;
      case "stock-sentiment-analyzer":
        return <LineChart className="h-5 w-5 text-gray-600" />;
      case "smartrefi":
        return <Database className="h-5 w-5 text-gray-600" />;
      case "seattle-crime-analysis":
        return <ShieldAlert className="h-5 w-5 text-gray-600" />;
      default:
        return null;
    }
  };
  return (
    <Link
      href={`/projects/${slug}`}
      className="block rounded-lg border border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md hover:border-gray-300"
    >
      <div className="flex items-center gap-2">
        {projectIcon()}
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <p className="mt-3 text-xs text-gray-500">{tech}</p>
    </Link>
  );
}
