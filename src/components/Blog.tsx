
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';

const Blog = () => {
  // Blog posts data
  const posts = [
    {
      id: 1,
      title: 'How to Build a RESTful API with Node.js and Express',
      excerpt: 'Learn how to create a robust RESTful API using Node.js and Express with proper error handling and data validation.',
      image: '',
      category: 'Backend',
      date: 'Apr 15, 2023',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Modern React State Management Patterns',
      excerpt: 'Explore different state management patterns in React applications, from Context API to Redux and beyond.',
      image: '',
      category: 'Frontend',
      date: 'Mar 8, 2023',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Introduction to TypeScript for JavaScript Developers',
      excerpt: 'A comprehensive guide to TypeScript for JavaScript developers, covering types, interfaces, and advanced features.',
      image: '',
      category: 'TypeScript',
      date: 'Feb 22, 2023',
      readTime: '10 min read',
    },
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Latest Articles</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Blog</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            I share my knowledge and insights about programming, development,
            and technology through my blog posts.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="glass-card rounded-xl overflow-hidden interactive-card"
            >
              {/* Post Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                {/* Replace with blog post image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  Blog Post Image
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-primary/80 hover:bg-primary text-foreground">
                  {post.category}
                </Badge>
              </div>
              
              {/* Post Content */}
              <div className="p-6 space-y-4">
                {/* Meta info */}
                <div className="flex items-center text-foreground/60 text-sm gap-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title and Excerpt */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                    <a href={`#blog-${post.id}`}>{post.title}</a>
                  </h4>
                  <p className="text-foreground/70 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Read More Link */}
                <div className="pt-2">
                  <a 
                    href={`#blog-${post.id}`} 
                    className="text-accent hover:text-accent/80 flex items-center gap-1 transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Posts */}
        <div className="text-center mt-12">
          <Button variant="outline" className="neon-border gap-2">
            View All Posts
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
