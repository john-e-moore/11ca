import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "11 Chair Avenue | Custom Upholstery",
  description: "Hand‑crafted chair upholstery by a passionate artisan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased bg-gray-50">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <footer className="w-full border-t py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 11 Chair Avenue. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
