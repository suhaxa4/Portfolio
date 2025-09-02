import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Hi, I’m Suhana Mishra</h1>
          <h2 className="text-2xl font-semibold">A Cybersecurity Student</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I have strong work ethic and adaptability, familiar with cloud environments like AWS. Quick to learn new 
technologies and apply classroom knowledge to security challenges. Committed to continuous learning and contributing to team success. 


          </p>

          <div className="flex space-x-4">
            <Button asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE - Profile Photo */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Suhana Mishra"
            className="rounded-full w-80 h-80 object-cover shadow-2xl border-4"
          />
        </div>
      </div>
    </section>
  );
}
