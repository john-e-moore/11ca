import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center space-y-6">
      <Image
        src="/images/logo.png"
        alt="11 Chair Avenue Logo"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold">
        Custom Chair Upholstery &amp; Restoration
      </h1>
      <p className="max-w-prose text-lg text-gray-600">
        Transforming beloved chairs into timeless pieces, one stitch at a time.
      </p>
      <a
        href="mailto:hello@11chairavenue.com"
        className="inline-block px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Get a Quote
      </a>
    </section>
  );
}
