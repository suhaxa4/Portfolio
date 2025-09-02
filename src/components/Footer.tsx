import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "your@email.com" },
    { icon: Phone, label: "Phone", value: "+91-1234567890" },
    { icon: MapPin, label: "Location", value: "New Delhi, India" },
  ];

  const onlineProfiles = [
    { icon: Github, label: "GitHub", value: "github.com/yourprofile", active: true },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", active: true },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A quick glance at my background, skills, and how to reach me.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-glass p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Online Profiles */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Find Me Online</h3>
            <div className="space-y-4">
              {onlineProfiles.map((profile, index) => {
                const Icon = profile.icon;
                return (
                  <Card
                    key={index}
                    className="bg-glass p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{profile.label}</p>
                        <p className="text-muted-foreground">{profile.value}</p>
                      </div>
                    </div>
                    {profile.active && (
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
