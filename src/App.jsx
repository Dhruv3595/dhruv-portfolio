import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-900 text-white font-sans">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dhruv Pandya</h1>
          <nav className="hidden md:flex gap-4">
            {['about','experience','projects','education','skills','contact'].map((item) => (
              <a key={item} href={`#${item}`} className="px-6 py-3 rounded-xl text-base font-medium bg-white/5 hover:bg-purple-600 transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-7xl font-bold mb-8">
          Dhruv Pandya
        </motion.h1>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl">
          Software Engineer | React.js Developer | Data Science Engineer
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
        <div className="space-y-6 text-gray-300 text-2xl leading-relaxed">
          <p>I am a passionate Software Engineer with hands-on industry experience in frontend development, full-stack web applications, and data-driven solutions. My journey began with web design and gradually evolved into building scalable and production-ready applications using modern technologies.</p>
          <p>I have professional experience working with React.js, JavaScript, HTML, CSS, PHP, and MySQL, focusing on clean architecture, reusable components, and performance optimization. I enjoy solving real-world problems and transforming business requirements into intuitive digital experiences.</p>
          <p>Currently, I am working as a Data Science Engineer where I perform exploratory data analysis, build data-driven insights, and apply machine learning techniques using Python. This unique combination allows me to build applications that are both visually appealing and intelligent.</p>
          <p>I am actively seeking opportunities where I can contribute to impactful products, grow with strong engineering teams, and deliver real value through technology.</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">Professional Experience</h2>
        <div className="space-y-10">
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">Data Science Engineer – BrainyBeam Info-Tech Pvt. Ltd.</h3>
            <p className="text-purple-400 text-xl">Jan 2026 – Present | Ahmedabad</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-2xl">
              <li>• Performed exploratory data analysis (EDA) to extract insights</li>
              <li>• Built machine learning models using Python</li>
              <li>• Created visual reports to support business decisions</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">Front-End Developer – Cognifyz Technologies</h3>
            <p className="text-purple-400 text-xl">Oct 2025 – Dec 2025 | Hybrid</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-2xl">
              <li>• Developed responsive interfaces using React.js</li>
              <li>• Built reusable UI components</li>
              <li>• Collaborated with backend and design teams</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">React JS Intern – Creart Solution</h3>
            <p className="text-purple-400 text-xl">Jun 2025 – Sep 2025 | Ahmedabad</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-2xl">
              <li>• Built React components using hooks</li>
              <li>• Integrated frontend with APIs</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">Web Designer Intern – Way To Web Pvt. Ltd.</h3>
            <p className="text-purple-400 text-xl">May 2023 – Aug 2023 | Ahmedabad</p>
            <ul className="mt-4 space-y-2 text-gray-300 text-2xl">
              <li>• Designed modern UI layouts</li>
              <li>• Improved website usability and engagement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">Locify – Password Manager</h3>
            <p className="text-gray-300 text-2xl mt-4">Secure password management application built using React.js with authentication and responsive UI.</p>
            <p className="text-purple-400 text-xl mt-3">React.js, JavaScript, PHP, MySQL</p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">Vehicle Wash Booking System</h3>
            <p className="text-gray-300 text-2xl mt-4">Full-stack booking system for managing vehicle wash services and admin operations.</p>
            <p className="text-purple-400 text-xl mt-3">HTML, CSS, JavaScript, PHP, MySQL</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">Education</h2>
        <div className="space-y-8">
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">B.E. Computer Science & Engineering – GTU</h3>
            <p className="text-gray-300 text-2xl">CGPA: 9.09 | June 2026</p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">Diploma Computer Engineering – GTU</h3>
            <p className="text-gray-300 text-2xl">CGPA: 8.76 | 2023</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-14">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-10 text-2xl text-gray-300">
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <ul className="space-y-2">
              <li>React.js (Hooks, Components, State)</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5, CSS3</li>
              <li>Responsive & Mobile-First Design</li>
              <li>UI/UX Best Practices</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">Backend & Databases</h3>
            <ul className="space-y-2">
              <li>PHP Backend Development</li>
              <li>RESTful API Integration</li>
              <li>MySQL Database Design</li>
              <li>Authentication & Authorization</li>
              <li>Server-Side Validation</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">Data Science & Analytics</h3>
            <ul className="space-y-2">
              <li>Python for Data Analysis</li>
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Data Visualization</li>
              <li>Machine Learning Fundamentals</li>
              <li>Pandas, Matplotlib, Seaborn</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
            <ul className="space-y-2">
              <li>Python</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>C / C++</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">Tools & Platforms</h3>
            <ul className="space-y-2">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>XAMPP</li>
              <li>Cloud Computing Basics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-black/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="text-gray-300 text-2xl leading-relaxed">
              <h3 className="text-3xl font-semibold mb-4">Dhruv Pandya</h3>
              <p className="mb-4">Software Engineer | React.js Developer | Data Science Engineer</p>
              <p className="mb-4">
                I am a results-driven Software Engineer with hands-on experience in building scalable web applications and data-driven solutions using modern technologies.
              </p>
              <p>
                Open to full-time opportunities and collaborations where I can contribute to impactful products and grow with strong engineering teams.
              </p>
            </div>
            <div className="bg-white/5 p-12 rounded-3xl space-y-5 text-2xl text-center">
              <a href="mailto:pdhruvn3595@gmail.com" className="block hover:text-purple-400">📧 pdhruvn3595@gmail.com</a>
              <a href="tel:+917359774363" className="block hover:text-purple-400">📞 +91 7359774363</a>
              <a href="https://www.linkedin.com/in/dhruv-pandya07/" target="_blank" className="block hover:text-purple-400">💼 LinkedIn</a>
              <a href="https://github.com/Dhruv3595" target="_blank" className="block hover:text-purple-400">💻 GitHub</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
