
const skills = {
  Backend: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs'],
  Database: ['PostgreSQL', 'SQL', 'Spring Data JPA', 'Hibernate'],
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Thymeleaf'],
  Tools: ['Git', 'Linux', 'Maven'],
}

const navigation = [
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

function SectionHeading({ number, children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm text-teal-300">{number}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {children}
      </h2>
      <div className="h-px flex-1 bg-slate-800" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-300">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-[#0b1120]/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a href="#home" className="font-mono text-lg font-bold text-teal-300">
            gour<span className="text-slate-100">.dev</span>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-teal-300"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <section
          id="home"
          className="flex min-h-[75vh] scroll-mt-24 flex-col justify-center py-20 sm:py-28"
        >
          <p className="mb-5 font-mono text-sm text-teal-300">
            HELLO, I'M VAIBHAV GOUR
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-6xl">
            Full Stack Java Developer.
          </h1>

          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-slate-400 sm:text-2xl">
            I build web applications from database to interface.
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-slate-400">
            I work with Java, Spring Boot and PostgreSQL to build web
            applications, REST APIs and secure application features.
            I care about clean implementation, reliable functionality
            and interfaces that are easy to use.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-teal-300 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-teal-200"
            >
              View my work <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/Vaibhav-Gour-Resume.pdf"
              className="rounded-md border border-slate-700 px-5 py-3 font-medium text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              Download resume
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-slate-500">
            JAVA · SPRING BOOT · POSTGRESQL · REST APIS
          </p>
        </section>

        <section id="experience" className="scroll-mt-24 py-16">
          <SectionHeading number="01">Experience</SectionHeading>

          <article className="border-l border-slate-700 pl-6">
            <p className="font-mono text-sm text-teal-300">
              OCT 2024 — PRESENT
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-100">
              Assistant System Engineer
            </h3>

            <p className="mt-1 text-slate-400">
              Tata Consultancy Services (TCS)
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 marker:text-teal-300">
              <li>
                Work on a Spring Boot web application using Java and
                PostgreSQL.
              </li>
              <li>
                Develop application features and REST APIs across
                backend logic, data persistence and user-facing pages.
              </li>
              <li>
                Work with Spring Security, JWT-based authentication
                and role-based authorization.
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-800 px-3 py-1 font-mono text-xs text-slate-400"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </article>
        </section>

        <section id="projects" className="scroll-mt-24 py-16">
          <SectionHeading number="02">Selected project</SectionHeading>

          <article className="rounded-xl border border-slate-800 bg-[#111a2a] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-teal-300">
                  FULL STACK APPLICATION
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-100">
                  E-commerce Management Application
                </h3>
              </div>
              <span className="rounded-md border border-slate-700 px-3 py-1 font-mono text-xs text-slate-400">
                Java
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              A web application for managing products, categories,
              inventory and users. The application combines a web
              interface with backend business logic, REST APIs and
              PostgreSQL persistence.
            </p>

            <h4 className="mt-7 font-medium text-slate-100">
              Key features
            </h4>

            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                'Product and category management',
                'Product search and filtering',
                'User management and authorization',
                'JWT authentication and password hashing',
              ].map((feature) => (
                <li key={feature} className="flex gap-2 text-sm leading-6">
                  <span className="text-teal-300" aria-hidden="true">↗</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-slate-800 pt-5">
              <p className="font-mono text-xs leading-6 text-slate-400">
                JAVA · SPRING BOOT · SPRING SECURITY · JPA · POSTGRESQL ·
                THYMELEAF
              </p>
            </div>

            {/* Add verified GitHub and live-demo links here when ready. */}
          </article>
        </section>

        <section id="skills" className="scroll-mt-24 py-16">
          <SectionHeading number="03">Technical skills</SectionHeading>

          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <article
                key={category}
                className="rounded-lg border border-slate-800 p-5"
              >
                <h3 className="font-semibold text-slate-100">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-800/70 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16">
          <SectionHeading number="04">About me</SectionHeading>

          <div className="max-w-3xl space-y-4 leading-7 text-slate-400">
            <p>
              I have a background in Electronics and Telecommunication
              Engineering and work as a software developer at TCS.
              My current focus is Java-based web development.
            </p>
            <p>
              I enjoy understanding how application layers fit together,
              writing maintainable code and strengthening my engineering
              skills by building and improving software.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-slate-100">Education</h3>
            <p className="mt-2 text-slate-300">
              B.Tech. — Electronics and Telecommunication Engineering
            </p>
            <p className="mt-1 text-sm text-slate-500">
              MIT Academy of Engineering, Pune · 2020–2024
            </p>
            <p className="mt-2 text-slate-300">
              HSC
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Kendriya Vidyalaya C.R.P.F. Nagpur · 2018–2019
            </p>
            <p className="mt-2 text-slate-300">
              SSC
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Kendriya Vidyalaya C.R.P.F. Nagpur · 2016–2017
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <SectionHeading number="05">Let's connect</SectionHeading>

          <h3 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
            Interested in working together?
          </h3>

          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            I'm interested in opportunities to contribute to Java
            backend and full-stack engineering teams.
          </p>

          <a
            href="mailto:vaibh1gour.com"
            className="mt-7 inline-flex rounded-md bg-teal-300 px-5 py-3 font-medium text-slate-950 hover:bg-teal-200"
          >
            Email me
          </a>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://github.com/vaibhgour"
              className="text-slate-400 hover:text-teal-300"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-gour"
              className="text-slate-400 hover:text-teal-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-7 text-sm text-slate-500">
          <p>Designed and built by Vaibhav Gour.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
