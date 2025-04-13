
import { useState } from 'react';
import { Send, Mail, MessageSquare, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";

const ContactSection = () => {
  const { toast } = useToast();
  const supabase = createClient("https://hximboiknruyncrgrqjk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4aW1ib2lrbnJ1eW5jcmdycWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NTc2OTgsImV4cCI6MjA1ODIzMzY5OH0.mwQt890uxS1yjpnbmPSHqZNtltMheZD7Ep9jZRb8Jrg");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // This would handle the form submission in a real app
    console.log('Form data:', formData);

    const { data, error } = await supabase
      .from('portfolio')
      .insert([
        { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message },
      ])
      .select()
      if (error) {
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
        return;
      }
    if (data) {
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
      variant: "default",
    });
  }
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient-primary">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="scifi-panel p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind or just want to say hello? Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="scifi-panel flex items-center justify-center w-12 h-12 rounded-full border border-scifi-cyan/50">
                  <Mail className="text-scifi-cyan" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a href="mailto:2k23.cs2313608@gmail.com" className="text-gray-300 hover:text-scifi-cyan transition-colors">
                    2k23.cs2313608@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="scifi-panel flex items-center justify-center w-12 h-12 rounded-full border border-scifi-cyan/50">
                  <MessageSquare className="text-scifi-cyan" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Discord</h4>
                  <p className="text-gray-300">johndoe#1234</p>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="scifi-panel flex items-center justify-center w-12 h-12 rounded-full border border-scifi-cyan/50">
                  <Phone className="text-scifi-cyan" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+91 96518633XX</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/imperiorhackers9934"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scifi-panel flex items-center justify-center w-10 h-10 rounded-full border border-scifi-cyan/50 hover:bg-scifi-cyan/20 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanishq-mishra9936/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scifi-panel flex items-center justify-center w-10 h-10 rounded-full border border-scifi-cyan/50 hover:bg-scifi-cyan/20 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com/tanishq9936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scifi-panel flex items-center justify-center w-10 h-10 rounded-full border border-scifi-cyan/50 hover:bg-scifi-cyan/20 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scifi-panel p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6" name='Contact' method="POST" data-netlify="true">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-scifi-blue/20 border-scifi-cyan/30 focus:border-scifi-cyan focus:ring-scifi-cyan/30 text-white"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-scifi-blue/20 border-scifi-cyan/30 focus:border-scifi-cyan focus:ring-scifi-cyan/30 text-white"
                  required
                />
              </div>

              <div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="bg-scifi-blue/20 border-scifi-cyan/30 focus:border-scifi-cyan focus:ring-scifi-cyan/30 text-white"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="bg-scifi-blue/20 border-scifi-cyan/30 focus:border-scifi-cyan focus:ring-scifi-cyan/30 text-white min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 bg-scifi-blue hover:bg-scifi-cyan/20 border border-scifi-cyan/50 text-white"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
