import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans antialiased">
      <Head>
        <title>Alex Schaffer - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 bg-gray-950/90 backdrop-blur-lg z-10 py-6">
        <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Schaffer.Engineering</div>
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Hey, I’m <span className="text-blue-400">Alex!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            Full-Stack Software Engineer crafting seamless web and mobile applications.
          </p>
          <a
            href="#experience"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Experience
          </a>
          <Analytics />
          <SpeedInsights />
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold tracking-tight mb-6">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-6">
            Full-Stack Software Engineer with a talent for crafting web and mobile applications that deliver seamless performance. I harness Java, C#, Python, and TypeScript to build tools that solve real problems, from polished front-end interfaces to robust back-end systems powered by MySQL and Redis. While pursuing a B.S. in Computer Science, I blend the latest academic knowledge with practical, hands-on experience.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Skills</h3>
            <ul className="flex flex-wrap gap-4 text-gray-400">
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Java</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">C#</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Python</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">TypeScript</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript (ES6+)</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Swift</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">HTML5</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">CSS3</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">SwiftUI</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">MySQL</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Redis</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Tomcat 9</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">RESTful APIs</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Git</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">AWS</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">CI/CD</li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400">Software Engineer</h3>
              <p className="text-gray-400">Lite-Check LLC | November 2022 – Present</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Designed and developed full-stack web applications using Java, Swift, TypeScript, Python, and MySQL.</li>
                <li>Transformed the web app into a fully responsive platform.</li>
                <li>Revamped navigation and introduced account management features.</li>
                <li>Built and refined the Sentry iOS app with Swift and SwiftUI.</li>
                <li>Enhanced cloud infrastructure with Redis and Tomcat 9.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400">Pickup and Delivery Driver</h3>
              <p className="text-gray-400">ABF Freight | May 2021 – July 2022</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Delivered freight punctually across daily routes.</li>
                <li>Interacted with customers professionally, resolving inquiries swiftly.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-400">Ramp Transport Driver</h3>
              <p className="text-gray-400">FedEx Express | January 2018 – May 2021</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Operated CDL A vehicles with precision under strict schedules.</li>
                <li>Adapted to high-pressure environments during peak periods.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Education</h3>
            <p className="text-gray-300">B.S. in Computer Science (In Progress)</p>
            <p className="text-gray-400">North Idaho College | 2024 – Present</p>
            <p className="text-gray-300 mt-2">Software Engineering Certificate</p>
            <p className="text-gray-400">Coding Dojo | 2022</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-400 mb-8">
            Reach out at{' '}
            <a href="mailto:schaffer.engineering@gmail.com" className="text-blue-400 hover:underline">
              schaffer.engineering@gmail.com
            </a>{' '}
            |{' '}
            <a href="https://github.com/Aschaffer8770" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </p>
          <div className="space-x-4">
            <a
              href="mailto:schaffer.engineering@gmail.com"
              className="inline-block bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Alex_Schaffer_Resume.pdf"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400 text-sm">
        <p>© 2025 Alex Schaffer. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}