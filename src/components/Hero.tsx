
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create animated background grid
    const createGrid = () => {
      grid.innerHTML = '';
      const cellSize = 50;
      const columns = Math.ceil(grid.offsetWidth / cellSize);
      const rows = Math.ceil((grid.offsetHeight * 3) / cellSize); // Triple height for continuous flow
      
      for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement('div');
        const random = Math.random();
        
        // Different cell types based on random value
        if (random < 0.1) {
          cell.className = 'bg-neon-purple/10 border border-neon-purple/30 rounded-md';
        } else if (random < 0.2) {
          cell.className = 'bg-neon-blue/10 border border-neon-blue/20 rounded-md';
        } else if (random < 0.25) {
          cell.className = 'bg-neon-cyan/5 border border-neon-cyan/20 rounded-full';
        } else {
          cell.className = random < 0.4 ? 'border border-white/5 rounded-md' : '';
        }
        
        grid.appendChild(cell);
      }

      // Set the grid layout
      grid.style.gridTemplateColumns = `repeat(${columns}, ${cellSize}px)`;
      grid.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    };

    createGrid();
    window.addEventListener('resize', createGrid);

    return () => {
      window.removeEventListener('resize', createGrid);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 grid animate-grid-flow opacity-40"
        style={{ willChange: 'transform' }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-90"></div>
      
      {/* Content */}
      <div className="container relative z-10 pt-20 lg:pt-0">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <p className="text-accent font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-gradient">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/90 max-w-2xl">
            I create <span className="text-neon-cyan">innovative</span> and <span className="text-neon-purple">impactful</span> digital experiences
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-primary hover:bg-primary/90">View My Work</Button>
            <Button variant="outline" className="neon-border">Contact Me</Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center space-x-6 mt-8">
            <a href="#" className="text-foreground/80 hover:text-neon-purple transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-foreground/80 hover:text-neon-blue transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-foreground/80 hover:text-neon-cyan transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-foreground/80 hover:text-neon-orange transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-foreground/80 transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
