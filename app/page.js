export default function JenniferHiggsStewartOnlineResume() {
  const experience = [
    {
      role: "Engineering Program Manager III",
      company: "Quantum Corp.",
      location: "Remote (Mendota Heights, MN)",
      dates: "Jul 2021 – Feb 2024",
      focus: "Enterprise storage hardware & software delivery",
      bullets: [
        "Led and coached multiple cross-functional teams delivering enterprise storage hardware and software, improving delivery consistency across globally distributed teams.",
        "Developed and cultivated strong relationships with executive leadership to drive business success and maintain alignment across diverse stakeholder groups.",
        "Established standardized delivery cadences, planning forums, and execution rhythms in partnership with engineering managers, increasing predictability and alignment across programs.",
        "Drove continuous process improvements and Agile best-practice adoption, reducing schedule risk and improving delivery efficiency.",
        "Owned cross-program dependency management, risk mitigation, and blocker resolution, proactively addressing execution challenges before milestone impact.",
        "Facilitated and managed project plans, schedules, and other project documentation.",
        "Developed and facilitated executive-level program reviews, improving visibility into progress, risks, and trade-offs for senior leadership.",
        "Designed and implemented shared templates, dashboards, and information radiators, significantly improving transparency and cross-team coordination."
      ]
    },
    {
      role: "Program Manager / Agile Coach / Principal Scrum Master",
      company: "Veritas Technologies",
      location: "Roseville, MN",
      dates: "Mar 2016 – Apr 2021",
      focus: "Agile transformation, enterprise coaching & product delivery",
      bullets: [
        "Led high-performing Agile teams delivering complex virtualization, telemetry, and API capabilities for the NetBackup product.",
        "Served as enterprise Agile coach, mentoring scrum masters, engineering managers, and leaders on Agile execution, metrics, and continuous improvement.",
        "Partnered with leadership to define and roll out delivery KPIs, linking team-level execution to enterprise objectives and improving outcome-based decision-making.",
        "Designed and facilitated onboarding and Agile training programs, accelerating new hire productivity by 35%.",
        "Introduced emerging Agile practices and scaled ways of working, developing an internal playbook adopted across teams and programs.",
        "Facilitated cross-functional collaboration between engineering, UX, and product, improving customer-focused delivery and reducing rework."
      ]
    },
    {
      role: "Senior Business Analyst / Project Manager",
      company: "Best Buy Corporation, Optum via Randstad Technologies",
      location: "Bloomington, MN",
      dates: "Nov 2014 – Dec 2015",
      focus: "E-commerce, access management & Agile delivery",
      bullets: [
        "Partnered with business stakeholders and software teams to define, prioritize, and deliver requirements for e-commerce and access management platforms.",
        "Supported Agile delivery through backlog refinement, capacity planning, and sprint prioritization, ensuring alignment with business goals.",
        "Created clear process flows and requirements documentation, improving communication and reducing delivery friction.",
        "Acted as a cross-functional liaison, increasing transparency and reducing delivery delays across teams."
      ]
    },
    {
      role: "Solution Analyst / Product Management – Accessibility",
      company: "Target Corporation",
      location: "Minneapolis, MN",
      dates: "Jan 2013 – Nov 2014",
      focus: "Accessibility compliance, QA process improvement & product support",
      bullets: [
        "Directed an Accessibility Compliance team supporting enterprise digital initiatives.",
        "Established and refined QA and accessibility processes for site refreshes, campaigns, and special projects, improving operational efficiency and consistency.",
        "Managed team capacity and delivery across multiple initiatives, meeting deadlines while maintaining high quality standards.",
        "Trained and mentored team members, increasing productivity and strengthening knowledge sharing.",
        "Partnered with internal teams and third-party vendors to align requirements and compliance standards, improving stakeholder confidence.",
        "Mentored a direct report, improving performance and leadership capability."
      ]
    },
    {
      role: "Quality & Standards Lead / UAT Coordinator",
      company: "Target Corporation",
      location: "Minneapolis, MN",
      dates: "Aug 2012 – Jan 2013",
      focus: "QA, accessibility review & UAT coordination",
      bullets: [
        "Implemented QA and accessibility review processes for interactive marketing campaigns, establishing repeatable and reliable workflows.",
        "Coordinated UAT execution and stakeholder approvals, ensuring quality and compliance prior to launch.",
        "Improved vendor collaboration by reviewing technical documentation and providing clear, actionable compliance feedback."
      ]
    }
  ];

  const earlyCareer = [
    {
      role: "Quality Assurance Analyst / Business Analyst / QA Test Lead",
      company: "Olson Advertising & Carmichael Lynch",
      dates: "2011 – 2012",
      bullets: [
        "Led requirements gathering, documentation, and testing for client websites and digital campaigns.",
        "Authored functional and technical specifications, improving delivery clarity and reducing rework.",
        "Served as liaison between business, design, and development teams to streamline delivery."
      ]
    },
    {
      role: "Firmware & Software Engineer",
      company: "Medtronic, Inc.",
      dates: "2005 – 2007; 2010 – 2011",
      bullets: [
        "Developed and validated software and firmware requirements and test cases for regulated medical device systems.",
        "Partnered with systems engineers to ensure completeness, traceability, and testability of requirements.",
        "Contributed to both Agile and waterfall lifecycles, improving test coverage and delivery efficiency.",
        "Promoted within one year based on performance and adaptability."
      ]
    },
    {
      role: "Quality Testing Engineer",
      company: "Trading Technologies International",
      dates: "2008 – 2009",
      bullets: [
        "Designed and executed test cases and requirements for high-performance financial trading platforms.",
        "Contributed to process improvements in a fast-paced, high-reliability environment."
      ]
    }
  ];

  const skills = [
    "Program Management",
    "Cross-Functional Leadership",
    "Stakeholder Engagement",
    "Executive Communication",
    "Team Development & Mentorship",
    "Facilitation",
    "Roadmap Planning",
    "Change Adoption",
    "Agile Transformation",
    "Enterprise Agile Coaching",
    "Requirements Gathering",
    "Conflict Resolution",
    "User Stories",
    "Problem Solving",
    "Metrics",
    "Process Improvement",
    "Collaborative Leadership",
    "Continuous Improvement",
    "Global Team Enablement",
    "JIRA",
    "Confluence"
  ];

  const certifications = [
    { name: "Certified Scrum Professional (CSP-SM)", org: "Scrum Alliance", date: "Mar 2025" },
    { name: "Advanced Certified Scrum Master", org: "Scrum Alliance", date: "Aug 2020" },
    { name: "Agile Coaching Certification / ICP-ACC", org: "ICAgile", date: "May 2019" },
    { name: "Certified Scrum Master", org: "Scrum Alliance", date: "Mar 2016" }
  ];

  return (
    <main className="min-h-screen bg-[#111318] text-slate-100">
      <style>{`
        html { scroll-behavior: smooth; }
        .panel { background: rgba(255,255,255,.065); backdrop-filter: blur(18px); }
        .gold { background: linear-gradient(90deg, #f9e7b0, #d8aa45, #fff1c8); -webkit-background-clip: text; color: transparent; }
        .soft-glow { box-shadow: 0 24px 80px rgba(216,170,69,.13); }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111318]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[.35em] text-amber-300/80">Online Resume</p>
            <h1 className="text-lg font-semibold tracking-tight">Jennifer Higgs Stewart</h1>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#profile">Profile</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#credentials">Credentials</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,170,69,.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-5xl">
            <div className="mb-5 inline-flex w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[.23em] text-amber-200">
              Program Management • Agile Leadership • Enterprise Operations
            </div>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Building structure, clarity, and momentum across <span className="gold">complex delivery environments.</span>
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              Operations and program management leader with 18+ years of experience driving large-scale product delivery, enterprise operations, and Agile transformations across global, distributed teams.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2">Maple Grove, MN</span>
              <a className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 hover:bg-white/[.08]" href="tel:7636341741">(763) 634-1741</a>
              <a className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 hover:bg-white/[.08]" href="mailto:jenahiggs@gmail.com">jenahiggs@gmail.com</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#experience" className="rounded-2xl bg-amber-300 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">View Experience</a>
              <a href="#contact" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/[.06]">Contact Jennifer</a>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["18+", "Years of experience"],
            ["Global", "Distributed team leadership"],
            ["35%", "New hire productivity lift"],
            ["Enterprise", "Operations & delivery models"]
          ].map(([stat, label]) => (
            <div key={label} className="panel rounded-[1.5rem] border border-white/10 p-6">
              <p className="text-3xl font-semibold text-amber-200">{stat}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.15fr_.85fr]">
          <section className="panel rounded-[2rem] border border-white/10 p-7">
            <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Executive Profile</p>
            <h3 className="mt-3 text-2xl font-semibold">
              Trusted partner to executives, engineering leaders, and cross-functional teams.
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Known for translating strategy into execution, building scalable operating models, and improving delivery predictability through metrics, leadership coaching, and repeatable processes. Jennifer strengthens stakeholder confidence, accelerates delivery, and improves operational health.
            </p>
          </section>

          <section className="panel rounded-[2rem] border border-white/10 p-7">
            <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Leadership Strength</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                "Executive communication and decision support",
                "Delivery operating models and program rhythm",
                "Agile coaching, mentoring, and enablement",
                "Metrics, dashboards, visibility, and accountability"
              ].map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">{item}</p>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Professional Experience</p>
            <h3 className="mt-3 text-3xl font-semibold">Career leadership timeline</h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Select each gold role card to expand and view detailed responsibilities.
          </p>
        </div>

        <div className="space-y-5">
          {experience.map((job) => (
            <details key={job.role} className="group panel rounded-[2rem] border border-white/10 p-6 open:border-amber-300/30 open:bg-white/[.08]">
              <summary className="cursor-pointer list-none">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-amber-200 group-open:text-white">{job.role}</h4>
                    <p className="mt-1 text-slate-300">{job.company} • {job.location}</p>
                    <p className="mt-3 text-sm text-amber-200/90">{job.focus}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1 text-sm text-slate-300">{job.dates}</span>
                    <span className="text-xl text-amber-200 transition group-open:rotate-45">+</span>
                  </div>
                </div>
              </summary>
              <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm leading-7 text-slate-300">
                {job.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <section className="panel rounded-[2rem] border border-white/10 p-7">
          <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Earlier Career Foundation</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {earlyCareer.map((job) => (
              <article key={job.role} className="rounded-[1.5rem] border border-white/10 bg-white/[.035] p-5">
                <h4 className="font-semibold text-white">{job.role}</h4>
                <p className="mt-1 text-sm text-slate-400">{job.company}</p>
                <p className="mt-2 text-xs uppercase tracking-[.2em] text-amber-200/80">{job.dates}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                  {job.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <section className="panel rounded-[2rem] border border-white/10 p-7">
            <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Credentials</p>
            <div className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{cert.org} • {cert.date}</p>
                </div>
              ))}
            </div>
            <div id="credentials" className="mt-5 rounded-2xl border border-white/10 bg-white/[.035] p-4">
              <p className="font-semibold text-white">Education</p>
              <p className="mt-2 text-sm text-slate-300">B.S., Computer Information Systems</p>
              <p className="text-sm text-slate-400">Florida A&amp;M University • Apr 2005</p>
            </div>
          </section>

          <section className="panel rounded-[2rem] border border-white/10 p-7">
            <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Skills & Strengths</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-sm text-slate-200">{skill}</span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12">
        <div className="panel soft-glow rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-950/30 via-slate-900 to-[#111318] p-8">
          <p className="text-sm uppercase tracking-[.3em] text-amber-300/75">Contact</p>
          <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-3xl font-semibold">Ready to bring structure, clarity, and momentum to complex delivery.</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Available for senior program management, engineering program management, Agile coaching, delivery leadership, and operational transformation opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:jenahiggs@gmail.com" className="rounded-2xl bg-amber-300 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">Email Jennifer</a>
              <a href="tel:7636341741" className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/[.06]">Call</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>Jennifer Higgs Stewart • Maple Grove, MN</p>
          <p>Operations • Program Management • Agile Leadership</p>
        </div>
      </footer>
    </main>
  );
}
