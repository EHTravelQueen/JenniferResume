export default function JenniferHiggsStewartOnlineResume() {
  const imageExt = ".jpg.jpg";

  const experience = [
    {
      role: "Engineering Program Manager III",
      company: "Quantum Corp.",
      location: "Remote (Mendota Heights, MN)",
      dates: "Jul 2021 – Feb 2024",
      focus: "Enterprise storage hardware & software delivery",
      bullets: [
        "Led and coached multiple cross-functional teams delivering enterprise storage hardware and software.",
        "Developed strong executive relationships to maintain alignment.",
        "Established delivery cadences and execution rhythms.",
        "Drove Agile best practices and continuous improvement.",
        "Owned cross-program dependency management and risk mitigation.",
        "Created executive-level program visibility and reporting."
      ]
    }
  ];

  const skills = [
    "Program Management",
    "Agile Leadership",
    "Stakeholder Engagement",
    "Executive Communication",
    "Team Development",
    "Process Improvement",
    "JIRA",
    "Confluence"
  ];

  const certifications = [
    "Certified Scrum Professional (CSP-SM)",
    "Advanced Certified Scrum Master",
    "ICAgile Certified Coach (ICP-ACC)",
    "Certified Scrum Master"
  ];

  const jewelryCards = [
    {
      title: "Statement Necklace",
      image: `/images/triangle-white-turq-necklace${imageExt}`,
      note: "Signature visual accent."
    },
    {
      title: "Brass Wire Earrings",
      image: `/images/brass-wire-wrapped-earrings${imageExt}`,
      note: "Handcrafted detail."
    },
    {
      title: "Citrine Tree Necklace",
      image: `/images/citrine-brass-tree-necklace${imageExt}`,
      note: "Warm artisan feel."
    },
    {
      title: "Red Brass Earrings",
      image: `/images/medium-red-brass-earrings${imageExt}`,
      note: "Bold contrast piece."
    },
    {
      title: "Desert Jasper Bracelet",
      image: `/images/desert-jasper-bracelet${imageExt}`,
      note: "Earth-tone balance."
    }
  ];

  return (
    <main className="min-h-screen bg-[#111318] text-white px-6">

      {/* HEADER */}
      <header className="py-6 border-b border-white/10">
        <h1 className="text-2xl font-semibold">Jennifer Higgs Stewart</h1>
        <p className="text-sm text-gray-400">Online Resume</p>
      </header>

      {/* HERO */}
      <section className="py-12">
        <h2 className="text-4xl font-bold leading-tight">
          Building structure, clarity, and momentum across
          <span className="text-yellow-400"> complex delivery environments.</span>
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl">
          Operations and program management leader with 18+ years of experience
          driving enterprise delivery and Agile transformation.
        </p>

        <div className="mt-4 text-sm text-gray-400">
          Maple Grove, MN • (763) 634-1741 • jenahiggs@gmail.com
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Experience</h3>

        {experience.map((job) => (
          <div key={job.role} className="mb-6 p-5 border border-white/10 rounded-xl">
            <h4 className="font-semibold text-lg">{job.role}</h4>
            <p className="text-gray-400 text-sm">
              {job.company} • {job.location} • {job.dates}
            </p>

            <ul className="mt-3 list-disc pl-5 text-gray-300">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 border border-white/20 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        <ul className="text-gray-300">
          {certifications.map((cert) => (
            <li key={cert}>• {cert}</li>
          ))}
        </ul>
      </section>

      {/* JEWELRY SECTION */}
      <section className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Visual Brand Accent</h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {jewelryCards.map((piece) => (
            <div key={piece.title}>
              <img
                src={piece.image}
                alt={piece.title}
                className="rounded-lg mb-2"
              />
              <p className="text-sm text-gray-400">{piece.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-10 border-t border-white/10">
        <h3 className="text-2xl font-semibold mb-3">Contact</h3>
        <p>Email: jenahiggs@gmail.com</p>
        <p>Phone: (763) 634-1741</p>
      </section>

    </main>
  );
}
