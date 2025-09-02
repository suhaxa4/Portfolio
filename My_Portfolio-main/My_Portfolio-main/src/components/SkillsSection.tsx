import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, GitBranch, Palette, Zap, Globe, Smartphone } from "lucide-react";

const skills = {
  "Programming & Scripting": [
    "Python",
    "Shell Scripting",
    "Basics of JavaScript",
    "React.js",
    "Node.js",
  ],
  "Cybersecurity Tools": [
    "Burp Suite",
    "Wireshark",
    "Nmap",
    "Wazuh",
  ],
  "Reconnaissance & Scanning": [
    "Footprinting",
    "Network Scanning",
    "Web Application Scanning",
  ],
};

const tools = [
  { name: "Honeypots", icon: Code },
  { name: "Git", icon: GitBranch },
  { name: "Kubernetes", icon: Palette },
  { name: "Docker", icon: Zap },
  { name: "MongoDB", icon: Globe },
  
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
         
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, items], idx) => (
            <Card key={idx} className="bg-glass p-6 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="bg-glass p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Introduction to Cyber Security (Cisco)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Cyber Security Essentials (Cisco)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Introduction to Packet Tracer (Cisco)
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
