type Props = {
  params: {
    slug?: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const slug = params?.slug ?? "project";

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-3xl font-bold text-black capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="mt-6 text-gray-700">
        Project details coming soon.
      </p>
    </main>
  );
}