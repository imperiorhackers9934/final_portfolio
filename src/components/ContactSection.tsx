import { useState } from 'react';
import { Send, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient-primary">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info (unchanged) */}
          <div className="scifi-panel p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind or just want to say hello? Feel free to reach out through any of the channels below.
            </p>
            {/* Info blocks omitted for brevity */}
          </div>

          {/* Contact Form */}
          <div className="scifi-panel p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-scifi-blue/20 border-scifi-cyan/30 text-white"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-scifi-blue/20 border-scifi-cyan/30 text-white"
                />
              </div>

              <div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-scifi-blue/20 border-scifi-cyan/30 text-white"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="bg-scifi-blue/20 border-scifi-cyan/30 text-white min-h-[150px]"
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
