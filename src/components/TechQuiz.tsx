import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronRight, RotateCcw, CheckCircle, XCircle, Trophy, Target, Lightbulb } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const questions: Question[] = [
  {
    question: 'What does the "async/await" pattern help with in JavaScript?',
    options: ['Memory management', 'Handling asynchronous operations', 'CSS animations', 'Database design'],
    correct: 1,
    explanation: 'async/await is syntactic sugar over Promises, making asynchronous code easier to write and read. It pauses execution until the Promise resolves.',
    category: 'JavaScript',
    difficulty: 'Beginner',
  },
  {
    question: 'In React, what is the purpose of the "useEffect" hook?',
    options: ['Managing component state', 'Handling side effects', 'Creating context', 'Defining routes'],
    correct: 1,
    explanation: 'useEffect lets you perform side effects in function components — data fetching, subscriptions, DOM manipulation. It runs after render by default.',
    category: 'React',
    difficulty: 'Beginner',
  },
  {
    question: 'What is a "closure" in JavaScript?',
    options: ['A way to close browser tabs', 'A function that retains access to its outer scope', 'A CSS layout technique', 'A type of loop'],
    correct: 1,
    explanation: 'A closure is a function that remembers and can access variables from its lexical scope, even when executed outside that scope. This is fundamental to how JavaScript works.',
    category: 'JavaScript',
    difficulty: 'Intermediate',
  },
  {
    question: 'What does "Prompt Engineering" primarily involve?',
    options: ['Hardware engineering', 'Crafting effective inputs for AI models', 'Network security', 'Database optimization'],
    correct: 1,
    explanation: 'Prompt engineering is the art and science of designing inputs (prompts) that produce optimal outputs from AI models like ChatGPT and Gemini.',
    category: 'AI',
    difficulty: 'Beginner',
  },
  {
    question: 'Which HTTP method is typically used to update an existing resource?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correct: 2,
    explanation: 'PUT is used to update/replace an existing resource entirely. PATCH is used for partial updates. POST creates new resources, and GET retrieves them.',
    category: 'Web Dev',
    difficulty: 'Beginner',
  },
  {
    question: 'What is the main benefit of Docker containers?',
    options: ['Faster internet', 'Consistent environments across dev/prod', 'Better UI design', 'Automatic testing'],
    correct: 1,
    explanation: 'Docker containers package applications with all their dependencies, ensuring they run consistently across any environment — eliminating "it works on my machine" issues.',
    category: 'DevOps',
    difficulty: 'Intermediate',
  },
  {
    question: 'In Agile Scrum, what is a "Sprint"?',
    options: ['A running event', 'A fixed time-box for delivering work', 'A debugging technique', 'A type of database query'],
    correct: 1,
    explanation: 'A Sprint is a time-boxed iteration (usually 1-4 weeks) where a team delivers a potentially shippable product increment. It includes planning, daily standups, and a retrospective.',
    category: 'Agile',
    difficulty: 'Beginner',
  },
  {
    question: 'What is "few-shot prompting" in AI?',
    options: ['Using few AI models', 'Providing examples in the prompt to guide output', 'Running AI on low-power devices', 'Minimal training data'],
    correct: 1,
    explanation: 'Few-shot prompting includes a few examples of the desired input/output pattern in the prompt itself, helping the AI understand the format and style you expect.',
    category: 'AI',
    difficulty: 'Intermediate',
  },
  {
    question: 'What does the "virtual DOM" do in React?',
    options: ['Stores data in memory', 'Acts as a lightweight copy for efficient updates', 'Manages network requests', 'Handles authentication'],
    correct: 1,
    explanation: 'The virtual DOM is a lightweight JavaScript representation of the actual DOM. React diffs the virtual DOM against the real DOM and applies only the minimal changes needed, making updates efficient.',
    category: 'React',
    difficulty: 'Intermediate',
  },
  {
    question: 'What is a " JOIN" operation in SQL?',
    options: ['Connecting to a server', 'Combining rows from two tables based on related columns', 'Creating indexes', 'Importing data'],
    correct: 1,
    explanation: 'SQL JOINs combine rows from two or more tables based on a related column (usually a foreign key). Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.',
    category: 'Databases',
    difficulty: 'Beginner',
  },
];

const diffColors: Record<string, string> = {
  Beginner: 'tag-accent',
  Intermediate: 'tag-primary',
  Advanced: 'bg-orange-400/10 text-orange-300 border border-orange-400/20',
};

export default function TechQuiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const isCorrect = selected === q.correct;
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === q.correct) setScore(s => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  };

  const percentage = Math.round((score / questions.length) * 100);
  const level = percentage >= 80 ? 'Advanced' : percentage >= 50 ? 'Intermediate' : 'Beginner';
  const levelColor = percentage >= 80 ? 'emerald' : percentage >= 50 ? 'cyan' : 'blue';

  return (
    <section id="quiz" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="tag tag-accent mb-4 mx-auto w-fit">Test Your Knowledge</p>
          <h2 className="section-title text-white mb-4">
            Tech <span className="gradient-text">Quiz</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Challenge yourself with questions on web dev, AI, cloud, databases, and Agile
          </p>
        </motion.div>

        {!started ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 text-center"
          >
            <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-white text-xl font-bold mb-3">Ready to test your tech skills?</h3>
            <p className="text-slate-400 text-sm mb-2 max-w-md mx-auto">
              10 questions across JavaScript, React, AI, DevOps, Databases, and Agile.
              See where you stand and learn something new!
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-6">
              <span className="flex items-center gap-1"><Target className="w-3 h-3" /> 10 Questions</span>
              <span className="flex items-center gap-1"><Lightbulb className="w-3 h-3" /> Explanations</span>
              <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> Skill Level</span>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="btn-primary text-base px-8 py-3 inline-flex items-center gap-2"
            >
              Start Quiz <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ) : finished ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 text-center"
          >
            <Trophy className="w-16 h-16 text-emerald-400 mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-white text-xl font-bold mb-2">Quiz Complete!</h3>
            <div className="text-5xl font-black gradient-text mb-2">{percentage}%</div>
            <p className="text-slate-400 text-sm mb-1">
              You got {score} out of {questions.length} correct
            </p>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold mb-6 bg-${levelColor}-400/10 text-${levelColor}-400 border border-${levelColor}-400/20`}>
              <Target className="w-4 h-4" /> Skill Level: {level}
            </div>

            <div className="glass-card p-4 mb-6 text-left">
              <h4 className="text-white font-semibold text-sm mb-2">Want to level up?</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">
                Based on your results, I recommend focusing on the areas where you struggled.
                Book a free mentorship session and I'll create a personalized study plan.
              </p>
              <a
                href="https://calendly.com/omphilerantswele"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-5 inline-flex items-center gap-2"
              >
                Get Personalized Guidance
              </a>
            </div>

            <button
              onClick={restart}
              className="btn-secondary text-sm py-2.5 px-6 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 sm:p-8"
          >
            {/* Progress */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 text-xs font-medium">Question {current + 1} of {questions.length}</span>
              <span className={`tag text-xs ${diffColors[q.difficulty]}`}>{q.difficulty}</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full mb-6 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Category */}
            <span className="tag tag-primary text-xs mb-4 inline-flex">{q.category}</span>

            {/* Question */}
            <h3 className="text-white text-lg font-bold mb-6 leading-snug">{q.question}</h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                let optClass = 'glass-card p-4 cursor-pointer border border-white/5';
                if (answered) {
                  if (i === q.correct) optClass = 'p-4 border-2 border-emerald-400/50 bg-emerald-400/5 rounded-xl';
                  else if (i === selected && !isCorrect) optClass = 'p-4 border-2 border-red-400/50 bg-red-400/5 rounded-xl';
                  else optClass = 'p-4 border border-white/5 rounded-xl opacity-50';
                } else if (i === selected) {
                  optClass = 'p-4 border-2 border-cyan-400/50 bg-cyan-400/5 rounded-xl';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={answered}
                    className={`w-full text-left flex items-center gap-3 ${optClass} transition-all duration-200 hover:border-cyan-400/30 disabled:cursor-default`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 flex-shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-slate-300 text-sm">{opt}</span>
                    {answered && i === q.correct && <CheckCircle className="w-5 h-5 text-emerald-400 ml-auto flex-shrink-0" />}
                    {answered && i === selected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 ml-auto flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {answered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-400/5 border border-emerald-400/15' : 'bg-red-400/5 border border-red-400/15'} mb-6`}>
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                      <span className={`text-sm font-semibold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isCorrect ? 'Correct!' : 'Not quite!'}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{q.explanation}</p>
                  </div>

                  <button
                    onClick={next}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {current + 1 >= questions.length ? 'See Results' : 'Next Question'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
