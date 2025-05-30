import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-600">{project.description}</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {project.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${project.title} image ${i + 1}`}
            width={800}
            height={600}
            className="rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}
