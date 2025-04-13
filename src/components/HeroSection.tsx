
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const [currentRole, setCurrentRole] = useState(0);
const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const roles = [
  "Student.",
  "Developer.",
  "Designer.",
  "Creator.",
  "Problem Solver.",
  "Tech Enthusiast.",
  "Full-Stack Developer.",
];

// Typing and deleting logic
useEffect(() => {
  const currentRoleText = roles[currentRole];

  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayAfterType = 1500;

  let timer: number;

  if (!isDeleting && displayText !== currentRoleText) {
    // Typing
    timer = window.setTimeout(() => {
      setDisplayText(currentRoleText.substring(0, displayText.length + 1));
    }, typingSpeed);
  } else if (!isDeleting && displayText === currentRoleText) {
    // Pause before deleting
    timer = window.setTimeout(() => {
      setIsDeleting(true);
    }, delayAfterType);
  } else if (isDeleting && displayText !== "") {
    // Deleting
    timer = window.setTimeout(() => {
      setDisplayText(currentRoleText.substring(0, displayText.length - 1));
    }, deletingSpeed);
  }

  return () => clearTimeout(timer);
}, [displayText, isDeleting, currentRole]);

// Move to next role after deleting
useEffect(() => {
  if (isDeleting && displayText === "") {
    setIsDeleting(false);
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }
}, [displayText, isDeleting]);


  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = isMobile ? 40 : 80; // Reduce particles on mobile
    
    // Ensure canvas fills the container
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(0, ${Math.floor(Math.random() * 100) + 150}, ${Math.floor(Math.random() * 100) + 150}, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines if they're close
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < (isMobile ? 80 : 100)) { // Shorter connection distance on mobile
            if (!ctx) return;
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - distance / (isMobile ? 80 : 100))})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      <div className="max-w-4xl mx-auto text-center z-10 px-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8">
          <div className="inline-block">
            <span className="text-gradient-primary typing-text">{displayText}</span>
            <span className="text-gradient-primary typing-cursor">|</span>
          </div>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-gray-300 max-w-2xl mx-auto">
          Bringing visionary ideas to life through elegant code and design.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button 
            className="scifi-panel bg-scifi-blue/80 hover:bg-scifi-blue text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border border-scifi-cyan/50 animate-pulse-glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border border-scifi-cyan/50 hover:bg-scifi-blue/30"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="text-scifi-cyan cursor-pointer" 
          size={isMobile ? 24 : 32} 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  );
};

export default HeroSection;
