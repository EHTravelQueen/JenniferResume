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
        "Built strong executive relationships to maintain alignment across leadership.",
        "Established standardized delivery cadences and planning rhythms.",
        "Drove Agile best-practice adoption and continuous improvement.",
        "Owned cross-program dependency management and risk mitigation.",
        "Developed executive-level program reviews for leadership visibility."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#111318] text-white">

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 px-6 py-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight">
            Jennifer Higgs Stewart
          </h1>

          <p className="mt-6 text-lg text-neutral-300">
            Operations and program management leader with 18+ years of experience driving enterprise delivery and Agile transformation.
          </p>

          <div className="mt-6 text-sm text-neutral-400">
            Maple Grove, MN • (763) 634-1741 • jenahiggs@gmail.com
          </div>
        </div>

        {/* RIGHT SIDE (FIXED IMAGE) */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10">
          
          <img
            src="/images/triangle-white-turq-necklace.jpg.jpg"
            alt="Signature statement necklace"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm text-amber-300 uppercase tracking-wide">
              Signature Piece
            </p>
            <h3 className="text-xl font-semibold">
              Visual Identity
            </h3>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Experience</h2>

        {experience.map((job) => (
          <div key={job.role} className="mt-6 p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-neutral-400">
              {job.company} • {job.location} • {job.dates}
            </p>

            <ul className="mt-4 list-disc pl-5 text-neutral-300">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

    </main>
  );
}
