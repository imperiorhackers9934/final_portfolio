
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-scifi-cyan/10 bg-scifi-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient-primary">Tanishq Mishra</h2>
            <p className="text-gray-400 text-sm mt-1">Student at PSIT Kanpur</p>
          </div>
          
          <div className="flex items-center text-sm text-gray-400 text-center md:text-left">
            <p>© {currentYear} All Rights Reserved | Made with</p>
            <Heart className="mx-1 text-scifi-cyan h-4 w-4" />
            <p>by Tanishq Mishra</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
