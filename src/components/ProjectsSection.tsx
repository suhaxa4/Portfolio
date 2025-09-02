import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Threat Intelligence Platform on Cloud",
      description:
        "Developed a cloud-hosted honeypot using React.js, Node.js, MongoDB, and Cowrie Honeypot for real-time threat intelligence visualization with API integration (OTX, AbuseIPDB).",
      image: "🛡️",
      technologies: ["React.js", "Node.js", "MongoDB", "Cowrie"],
      featured: true,
    },
    {
      title: "Threat Detection Through Honeypot Data",
      description:
        "Deployed honeypots for SSH, HTTP, RTSP, and ONVIF protocols to simulate vulnerable NVR IoT devices. Dockerized for scalable deployment with comprehensive log aggregation.",
      image: "📹",
      technologies: ["Docker", "SSH", "HTTP", "ONVIF"],
      featured: true,
    },
    {
      title: "HID Device Emulation Attack",
      description:
        "Programmed an Arduino to emulate a Human Interface Device (HID) for keystroke injection attacks, establishing reverse connections with Metasploit and HoaxShell.",
      image: "🔧",
      technologies: ["Arduino", "Metasploit", "HoaxShell", "HID"],
      featured: false,
    },
    {
      title: "Cisco Network Security Solution",
      description:
        "Developed network security policies and ACLs to address campus resource misuse by restricting access to irrelevant websites using Cisco Packet Tracer.",
      image: "🌐",
      technologies: ["Cisco Packet Tracer", "ACLs", "Network Policies"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-glass overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-glass p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h4 className="text-lg font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
