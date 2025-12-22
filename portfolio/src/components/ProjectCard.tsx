type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
};

export default function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <p className="mt-3 text-xs text-gray-500">{tech}</p>
    </div>
  );
}