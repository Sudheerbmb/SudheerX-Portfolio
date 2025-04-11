
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  // Project categories
  const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: '',
      category: 'Web',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A mobile application for managing tasks, projects, and team collaboration with real-time updates.',
      image: '',
      category: 'Mobile',
      tags: ['React Native', 'Firebase', 'Redux'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations, responsive design, and interactive elements.',
      image: '',
      category: 'UI/UX',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description: 'A comprehensive RESTful API service with authentication, rate limiting, and extensive documentation.',
      image: '',
      category: 'Backend',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media platforms with data visualization and reporting features.',
      image: '',
      category: 'Web',
      tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information with interactive maps and forecasts.',
      image: '',
      category: 'Mobile',
      tags: ['Flutter', 'Dart', 'OpenWeatherAPI'],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background/95 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Showcase</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Projects</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and expertise
            in different areas of development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "neon-border"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden interactive-card"
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted flex items-center justify-center">
                {/* Replace with project image */}
                <span className="text-sm text-muted-foreground">Project Image</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <Badge className="bg-accent/20 text-accent">{project.category}</Badge>
                </div>
                
                <p className="text-foreground/70 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/30 text-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-between pt-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.links.github} 
                      className="text-foreground/80 hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.links.demo} 
                      className="text-foreground/80 hover:text-accent transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <a 
                    href={`#project-${project.id}`} 
                    className="text-sm text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" className="neon-border gap-2">
            View All Projects
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
