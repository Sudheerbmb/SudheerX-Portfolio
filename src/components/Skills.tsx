import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 70 },
  ];

  const frameworks = [
    'React', 'Vue.js', 'Angular', 'Next.js', 'Express.js', 
    'Django', 'Flask', 'TailwindCSS', 'Bootstrap', 'Material UI'
  ];

  const tools = [
    'Git', 'Figma', 'Adobe XD', 'VS Code', 'Docker', 
    'AWS', 'Firebase', 'MongoDB', 'PostgreSQL', 'Redis'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication',
    'Project Management', 'Time Management', 'Adaptability',
    'Critical Thinking', 'Attention to Detail', 'Creativity'
  ];

  return (
    <section id="skills" className="section-padding bg-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Skills</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            I have acquired a diverse set of skills throughout my journey as a developer.
            Here's a comprehensive overview of my technical and soft skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Skills */}
          <div className="glass-card rounded-xl p-6 space-y-6 interactive-card">
            <h4 className="text-xl font-semibold">Technical Proficiency</h4>
            
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-foreground/80">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-muted">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </Progress>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills Container */}
          <div className="space-y-12">
            {/* Frameworks & Libraries */}
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-4">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((item) => (
                  <Badge 
                    key={item} 
                    className="bg-primary/20 hover:bg-primary/30 text-foreground border border-primary/30"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((item) => (
                  <Badge 
                    key={item} 
                    className="bg-accent/20 hover:bg-accent/30 text-foreground border border-accent/30"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((item) => (
                  <Badge 
                    key={item} 
                    className="bg-secondary/20 hover:bg-secondary/30 text-foreground border border-secondary/30"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
