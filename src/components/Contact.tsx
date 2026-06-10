import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // EmailJS integration — replace with real service ID, template ID, public key
    try {
      const emailjs = await import('emailjs-com');
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
    } catch {
      // Fallback: open mailto
      const mailto = `mailto:omphile@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`)}`;
      window.location.href = mailto;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Let's Connect</p>
          <h2 className="section-title text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Open to new opportunities, collaborations, speaking engagements, and partnerships
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect with Me</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'omphile@capaciti.org.za', href: 'mailto:omphile@capaciti.org.za' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'omphile-rantswele', href: 'https://linkedin.com/in/omphile-rantswele' },
                  { icon: Github, label: 'GitHub', value: 'OmphileRantswele', href: 'https://github.com/OmphileRantswele' },
                  { icon: MapPin, label: 'Location', value: 'Gauteng, South Africa', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://calendly.com/omphilerantswele"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-cyan-400/30 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400/20 transition-colors">
                <Calendar className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Schedule a Meeting</p>
                <p className="text-slate-500 text-xs">Book a free 30-min call on Calendly</p>
              </div>
            </a>

            <div className="glass-card p-5">
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm always excited to discuss new projects, mentorship opportunities, speaking engagements,
                or just to connect with fellow tech enthusiasts. Drop me a message!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: 'name', label: 'Full Name', placeholder: 'Thabo Mokoena', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'thabo@company.co.za', type: 'email' },
                  { name: 'company', label: 'Company (Optional)', placeholder: 'Your Organization', type: 'text' },
                  { name: 'subject', label: 'Subject', placeholder: 'Project Collaboration', type: 'text' },
                ].map(({ name, label, placeholder, type }) => (
                  <div key={name}>
                    <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required={name !== 'company'}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl text-emerald-300 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" /> Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-400/10 border border-red-400/20 rounded-xl text-red-300 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" /> Something went wrong. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 text-base py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-950/30 border-t-gray-950 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
