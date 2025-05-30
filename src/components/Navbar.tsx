"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        pathname === href
          ? "bg-gray-900 text-white"
          : "text-gray-700 hover:bg-gray-200"
      )}
    >
      {label}
    </Link>
  );

  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-lg font-semibold">11 Chair Avenue</span>
        </Link>
        <div className="flex space-x-2">
          {link("/", "Home")}
          {link("/about", "About")}
          {link("/gallery", "Gallery")}
        </div>
      </div>
    </nav>
  );
}