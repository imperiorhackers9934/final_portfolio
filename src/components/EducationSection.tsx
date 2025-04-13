
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educationData: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'PSIT Kanpur',
    location: 'Bhauti, Kanpur',
    period: '2023 - PRESENT',
    description: 'Currently pursuing a B.Tech in Computer Science with a focus on AI and Machine Learning.',
    achievements: [
      'Full Stack Web Development',
      'Contribution in Vyomnauts Club Website development',
      'Data Structures and Algorithms',
      'Introduced with OOPs, C++, and Java',
      'Started AI and ML with Python',
      'Started Android Development with React Native',
    ]
  },
  {
    id: 2,
    degree: 'Intermediate in PCM',
    institution: 'HAL Vidyalaya',
    location: 'HAL Township Kanpur',
    period: '2021 - 2022',
    description: 'Focused on core subjects including Physics, Chemistry, and Mathematics.',
    achievements: [
      'Able to make frontend using HTML, CSS, JS',
      'PHP and MySQL for begineer',
      'INtroduced with Python Programming'
    ]
  },
  {
    id: 3,
    degree: 'High School',
    institution: 'HAL Vidyalaya',
    location: 'HAL Township Kanpur',
    period: '2019 - 2020',
    description: 'Intensive program covering basic Science, Mathematics, and Computer Science principles.',
    achievements: [
      'Built First HTML Webpage',
      'Introduced with Linux',
      'Made YouTube Channel with 7K Subscribers'
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-scifi-blue/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient-primary">Education</h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-scifi-cyan/80 via-scifi-cyan/30 to-transparent"></div>
          
          {educationData.map((item, index) => (
            <div key={item.id} className="relative mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-scifi-darker border-2 border-scifi-cyan animate-pulse-glow z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10 md:pr-16' : 'md:pr-10 md:pl-16'} pl-10`}>
                  <div className="scifi-panel p-6 rounded-lg">
                    <div className="mb-4 flex items-center">
                      <GraduationCap className="text-scifi-cyan mr-3" size={24} />
                      <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    </div>
                    
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="text-scifi-cyan/70 mr-2" size={16} />
                        <span>{item.institution}, {item.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="text-scifi-cyan/70 mr-2" size={16} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    {item.achievements && (
                      <div className="mt-4">
                        <h4 className="text-scifi-cyan/90 font-semibold mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <Award className="text-scifi-cyan/70 mt-1 shrink-0" size={14} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Spacer for alternative layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
