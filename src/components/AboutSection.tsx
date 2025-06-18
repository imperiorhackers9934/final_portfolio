
import { FileText, User, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const handleDownloadCV = () => {
    // This would download a CV if implemented
    window.open('./MyResume.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient-primary">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="border-b-2 border-scifi-cyan pb-1">Who I Am</span>
              </h3>
              <p className="text-gray-300 mb-6">
  I'm a full-stack developer and digital visionary, crafting next-gen websites and applications that merge clean architecture with immersive design. Armed with modern technologies like React, Node.js, and cloud-native solutions, I bring ideas to life through scalable, efficient code and visually compelling interfaces.
</p>
<p className="text-gray-300 mb-6">
  My approach blends technical precision with creative problem-solving—resulting in seamless, high-performance experiences that engage, inspire, and push the boundaries of what's possible on the web.
</p>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="flex items-center gap-3">
                  <User size={20} className="text-scifi-cyan" />
                  <span>Tanishq Mishra</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-scifi-cyan" />
                  <span>2k23.cs2313608@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-scifi-cyan" />
                  <span>PSIT Kanpur</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-scifi-cyan" />
                  <span>Available for Projects and Idea Discussion</span>
                </div>
              </div>
              
              <Button 
                onClick={handleDownloadCV}
                className="scifi-panel bg-scifi-blue/60 hover:bg-scifi-blue text-white px-6 py-3 mt-4 border border-scifi-cyan/50"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full border-2 border-scifi-cyan/30 animate-pulse-glow"></div>
              <div className="absolute inset-2 rounded-full border border-scifi-cyan/50"></div>
              <div className="absolute inset-4 rounded-full border border-scifi-cyan/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-scifi-blue to-scifi-darker overflow-hidden border border-scifi-cyan/50">
                  <img 
                    src="./tanishq.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover opacity-70 mix-blend-lighten"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
