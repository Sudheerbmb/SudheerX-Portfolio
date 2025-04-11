
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/20 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-gradient">Portfolio</span>
            </a>
            <p className="text-foreground/60 mt-2 text-sm">
              Creating digital experiences that matter.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-foreground/60 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-primary" /> using React & TailwindCSS
            </p>
            <p className="text-foreground/60 text-sm mt-1">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
