import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';


interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickQuestions = [
  "What are Omphile's top skills?",
  "Tell me about his mentorship experience",
  "What certifications does he have?",
  "How can I contact Omphile?",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Ask Omphile AI. Ask me anything about Omphile's skills, experience, projects, or how to work with him!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simple keyword-based responses (fallback when no API key)
    const lower = text.toLowerCase();
    let response = '';

    if (lower.includes('skill') || lower.includes('tech') || lower.includes('language')) {
      response = "Omphile's core skills include React, TypeScript, Node.js, Python, JavaScript, SQL, MongoDB, Tailwind CSS, and Docker on the technical side. He's also expert in Prompt Engineering, Generative AI, Agile/Scrum, curriculum design, and technical facilitation.";
    } else if (lower.includes('mentor') || lower.includes('teach') || lower.includes('coach')) {
      response = "Omphile has mentored 500+ learners over 3+ years! His mentorship covers code reviews, one-on-one coaching, career readiness training, CV reviews, interview preparation, and LinkedIn optimization. He's facilitated 10+ bootcamp cohorts through CAPACITI.";
    } else if (lower.includes('cert') || lower.includes('qualif')) {
      response = "Omphile holds 12+ certifications including: Google AI Essentials, AWS Cloud Practitioner, Microsoft Azure Fundamentals, Meta Front-End Developer, IBM Data Science Professional, Google UX Design, and Professional Scrum Master I.";
    } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('reach') || lower.includes('email')) {
      response = "You can reach Omphile at omphile@capaciti.org.za, connect on LinkedIn at linkedin.com/in/omphile-rantswele, or use the Contact form on this page. You can also book a free 30-minute call via Calendly!";
    } else if (lower.includes('project') || lower.includes('portfolio') || lower.includes('built')) {
      response = "Omphile has built several impactful projects including: TalentBridge (learner management platform), AI Career Coach, PromptCraft Studio, DevLearn Community Portal, Scrum Sprint Tracker, and a Digital Skills Assessment Engine. Check the Projects section for full case studies!";
    } else if (lower.includes('cv') || lower.includes('resume')) {
      response = "You can download Omphile's CV using the 'Download CV' button in the Hero section at the top of the page. For the most up-to-date version, you can also reach out directly via the Contact form.";
    } else if (lower.includes('workshop') || lower.includes('speak') || lower.includes('talk')) {
      response = "Omphile has delivered 20+ workshops and speaking engagements including: Introduction to Generative AI, Full-Stack Bootcamps, AI in Education keynotes, Career Readiness workshops, Prompt Engineering Masterclasses, and Agile/Scrum workshops across South Africa.";
    } else if (lower.includes('ai') || lower.includes('artificial intelligence') || lower.includes('machine learning')) {
      response = "Omphile is an AI Facilitator who specializes in Generative AI, Prompt Engineering, and AI Literacy. He's delivered 20+ AI workshops and designed AI curriculum for bootcamp programmes. He actively uses and teaches ChatGPT, Gemini, GitHub Copilot, and more.";
    } else if (lower.includes('experience') || lower.includes('work') || lower.includes('career') || lower.includes('background')) {
      response = "Omphile's career spans Software Development → Technical Mentor → Bootcamp Facilitator → Tech Champion → AI Facilitator → Learning Experience Leader. He's been at CAPACITI Tech Accelerator for 3+ years, supporting 5+ technology streams including Software Dev, Data Engineering, Cloud, Cybersecurity, and UX.";
    } else {
      response = "Great question! Omphile is a multifaceted tech professional. He's a Software Developer, Technical Mentor, AI Facilitator, and Learning Experience Professional based in South Africa. Feel free to ask me about his skills, projects, certifications, workshops, or how to get in touch!";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-400/30 hover:scale-110 transition-transform ${open ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6 text-gray-900" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-gray-950 animate-pulse" />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-h-[560px] flex flex-col glass rounded-2xl shadow-2xl shadow-cyan-400/10 border border-cyan-400/15 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-gray-900" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Ask Omphile AI</p>
                  <p className="text-emerald-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-xl hover:bg-white/5 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors" aria-label="Minimize">
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-xl hover:bg-white/5 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'assistant' ? 'bg-gradient-to-br from-cyan-400 to-emerald-400' : 'bg-slate-700'}`}>
                    {msg.role === 'assistant' ? <Bot className="w-3.5 h-3.5 text-gray-900" /> : <User className="w-3.5 h-3.5 text-slate-300" />}
                  </div>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'assistant'
                      ? 'bg-slate-800/80 text-slate-300'
                      : 'bg-cyan-400/15 text-cyan-100 border border-cyan-400/20'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-gray-900" />
                  </div>
                  <div className="bg-slate-800/80 rounded-xl px-3 py-2.5 flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map(q => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/5">
              <form
                onSubmit={e => { e.preventDefault(); send(input); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about Omphile..."
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-gray-900 hover:opacity-90 transition-opacity disabled:opacity-40"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
