
import React from 'react';
import { CalendarDays, Briefcase, GraduationCap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: 'Jan 2022 - Present',
      description: 'Led the development of the company\'s flagship product, improving performance by 40%. Collaborated with design team to implement responsive UI components.',
      skills: ['React', 'TypeScript', 'NextJS', 'GraphQL'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: 'Mar 2019 - Dec 2021',
      description: 'Developed and maintained multiple web applications. Implemented RESTful APIs and optimized database queries for improved performance.',
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Creative Agency',
      period: 'Jun 2017 - Feb 2019',
      description: 'Created responsive websites for clients across various industries. Collaborated with designers to ensure pixel-perfect implementation.',
      skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP'],
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'University Name',
      period: '2015 - 2017',
      description: 'Specialized in software engineering with focus on web technologies and cloud computing.',
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2011 - 2015',
      description: 'Graduated with honors. Participated in coding competitions and hackathons.',
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Feb 2023',
    },
    {
      id: 2,
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'Nov 2022',
    },
    {
      id: 3,
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Jul 2021',
    },
    {
      id: 4,
      name: 'React Advanced Concepts',
      issuer: 'Meta',
      date: 'Mar 2021',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Experience & Education</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            My professional experience, educational background, and certifications
            that have shaped my career in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={24} />
              <h4 className="text-2xl font-semibold">Work Experience</h4>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={job.id} className="relative">
                  {/* Timeline line */}
                  {index < workExperience.length - 1 && (
                    <div className="absolute top-8 bottom-0 left-4 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 mt-1.5">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="glass-card rounded-xl p-6 flex-1 interactive-card">
                      <div className="flex flex-wrap justify-between gap-2 mb-2">
                        <h5 className="text-xl font-medium">{job.title}</h5>
                        <div className="flex items-center text-foreground/70 text-sm">
                          <CalendarDays size={14} className="mr-1" />
                          {job.period}
                        </div>
                      </div>
                      
                      <p className="text-accent mb-4">{job.company}</p>
                      <p className="text-foreground/70 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            className="bg-primary/20 hover:bg-primary/30 text-foreground/90 border border-primary/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-secondary" size={24} />
                <h4 className="text-2xl font-semibold">Education</h4>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="glass-card rounded-xl p-6 interactive-card">
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <h5 className="text-lg font-medium">{edu.degree}</h5>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <CalendarDays size={14} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-accent mb-3">{edu.institution}</p>
                    <p className="text-foreground/70 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-accent"
                >
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <path d="m8 3v4" />
                  <path d="m16 3v4" />
                  <path d="m8 11h8" />
                  <path d="m8 15h5" />
                </svg>
                <h4 className="text-2xl font-semibold">Certifications</h4>
              </div>

              <div className="glass-card rounded-xl p-6 interactive-card">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <React.Fragment key={cert.id}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-base font-medium">{cert.name}</h5>
                          <p className="text-foreground/70 text-sm">{cert.issuer}</p>
                        </div>
                        <Badge className="bg-accent/20 text-foreground/90 border border-accent/30">
                          {cert.date}
                        </Badge>
                      </div>
                      {index < certifications.length - 1 && (
                        <Separator className="bg-border/40" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
