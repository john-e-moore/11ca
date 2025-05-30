import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = { title: "Gallery | 11 Chair Avenue" };

export default function Gallery() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Project Gallery</h1>
      <p className="text-gray-600">
        Browse a selection of recent upholstery transformations. Click a project
        to see more images.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/gallery/${project.slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src={project.cover}
                alt={project.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold">{project.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}