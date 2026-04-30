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
    image: "/images/triangle-white-turq-necklace.jpg.jpg",
    note: "Geometric statement necklace with bold triangular wire design and red accents—perfect for the hero section or featured visual."
  },
  {
    title: "Signature Detail",
    image: "/images/brass-wire-wrapped-earrings.jpg.jpg",
    note: "Textured brass earrings with an organic, handcrafted pattern—perfect as a standout opening visual."
  },
  {
    title: "Craft & Precision",
    image: "/images/citrine-brass-tree-necklace.jpg.jpg",
    note: "Wire-wrapped tree of life pendant with citrine stones, showcasing detail and artisan craftsmanship."
  },
  {
    title: "Statement Piece",
    image: "/images/medium-red-brass-earrings.jpg.jpg",
    note: "Bold brass and red accent earrings that add personality and contrast to the collection."
  },
  {
    title: "Curated Collection",
    image: "/images/desert-jasper-bracelet.jpg.jpg",
    note: "Earth-toned jasper bracelet with copper wire wrapping—natural, grounded, and versatile."
  }
];
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Jennifer Higgs Stewart</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {experience.map((job) => (
          <div key={job.role} className="mb-6">
            <h3 className="text-xl font-bold">{job.role}</h3>
            <p>{job.company} — {job.location}</p>
            <p className="text-sm text-gray-400">{job.dates}</p>
            <p className="mt-2">{job.summary}</p>
            <ul className="list-disc ml-5 mt-2">
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Jewelry Showcase</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {jewelryCards.map((item) => (
            <div key={item.title} className="border p-3 rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-3"/>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm">{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
