import React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Space } from "@/components/sections/Space";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Space />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
