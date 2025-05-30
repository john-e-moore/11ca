import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);
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
