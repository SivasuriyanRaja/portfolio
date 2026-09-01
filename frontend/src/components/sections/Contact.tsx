import { motion } from 'framer-motion';
import { GitBranch, Mail, Send } from 'lucide-react';

const Contact = () => {
  // Build a mailto link on submit so no backend is needed
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const body = `Hi Sivasuriyan,\n\nName: ${name}\n\n${message}`;
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display uppercase text-6xl md:text-8xl text-cream mb-6 leading-[0.9]">
            GET IN<br />
            <span className="text-primary">TOUCH</span>
          </h2>
          <p className="font-body text-cream/60 text-lg mb-12 max-w-sm leading-relaxed">
            Interested in collaborating, have a project in mind, or just want to say hi? Fill in the form and it'll open in your email client.
          </p>

          <div className="space-y-5">
            <a
              href="https://github.com/SivasuriyanRaja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <GitBranch size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-body font-bold text-xs uppercase tracking-widest text-cream/40 mb-0.5">GitHub</p>
                <p className="font-body text-cream group-hover:text-primary transition-colors font-medium">
                  github.com/SivasuriyanRaja
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-body font-bold text-xs uppercase tracking-widest text-cream/40 mb-0.5">Email</p>
                <p className="font-body text-cream/70 font-medium">Use the form →</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

          <form
            onSubmit={handleSubmit}
            className="relative bg-black border border-white/10 p-8 md:p-10 rounded-[40px] space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-cream/40 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-cream/40 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-cream/40 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-primary transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-cream/40 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/20 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-black font-body font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-cream transition-colors flex items-center justify-center gap-2 group"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
