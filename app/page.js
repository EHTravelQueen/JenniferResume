export default function JenniferHiggsStewartOnlineResume() {
  const experience = [
    {
      role: "Engineering Program Manager III",
      company: "Quantum Corp.",
      location: "Remote (Mendota Heights, MN)",
      dates: "Jul 2021 – Feb 2024",
      summary:
        "Led enterprise storage hardware and software delivery across globally distributed teams, improving execution consistency, visibility, and cross-program alignment.",
      bullets: [
        "Coached multiple cross-functional teams delivering enterprise storage hardware and software.",
        "Built strong executive relationships to maintain alignment across leadership and stakeholders.",
        "Established standardized delivery cadences, planning forums, and execution rhythms.",
        "Drove Agile best-practice adoption and continuous improvement to reduce schedule risk.",
        "Owned cross-program dependency management, risk mitigation, and blocker resolution.",
        "Developed executive-level program reviews to improve visibility into progress, risks, and trade-offs.",
        "Designed shared templates, dashboards, and information radiators to improve transparency."
      ]
    }
  ];

  const jewelryCards = [
    {
      title: "Hero Statement Necklace",
      /images/triangle-white-turq-necklace.jpg.jpg
      note: "Geometric statement necklace with bold triangular wire design."
    },
    {
      title: "Signature Detail",
      image: "/images/brass-wire-wrapped-earrings.jpg",
      note: "Textured brass earrings with handcrafted detail."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-white/10 px-6 py-4">
        <h1 className="text-xl font-semibold">Jennifer Higgs Stewart</h1>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-3xl font-bold">Professional Summary</h2>
        <p className="mt-4 text-neutral-300">
          Operations and program management leader with 18+ years of experience driving large-scale delivery and Agile transformation.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-3xl font-bold">Experience</h2>
        {experience.map((item) => (
          <div key={item.role} className="mt-6">
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-neutral-400">{item.company} • {item.dates}</p>
            <ul className="mt-3 list-disc pl-5 text-neutral-300">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-3xl font-bold">Jewelry Showcase</h2>
        <div className="mt-6 grid grid-cols-2 gap-6">
          {jewelryCards.map((j) => (
            <div key={j.title}>
              <img src={j.image} className="rounded-xl" />
              <p className="mt-2 text-sm text-neutral-300">{j.note}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-sm text-neutral-400">
        Contact: jenahiggs@gmail.com
      </footer>
    </div>
  );
}
