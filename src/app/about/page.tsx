import Image from "next/image";

export const metadata = { title: "About | 11 Chair Avenue" };

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
        <Image
          src="/images/owner.png"
          alt="Business Owner"
          width={200}
          height={200}
          className="rounded-2xl object-cover"
        />
        <p className="text-gray-700 leading-relaxed">
          Hi, I&apos;m <span className="font-semibold">Kristen</span>, the
          sole craftswoman behind 11 Chair Avenue. 
          <br />
          <br />
          With a passion for breathing
          new life into well‑loved furniture, I specialize in
          hand‑stitched upholstery that respects each chair&apos;s unique story. 
          Every project is a collaboration—I listen to your vision and use
          premium fabrics and traditional techniques to create heirloom pieces
          that fit perfectly into your space and lifestyle. 
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <ul className="space-y-1">
          <li>
            Email: {" "}
            <a
              href="mailto:hello@11chairavenue.com"
              className="text-blue-600 underline"
            >
              mrs.moore531@gmail.com
            </a>
          </li>
          <li>
            Instagram: {" "}
            <a
              href="https://instagram.com/11chairavenue"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @11chairavenue
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}