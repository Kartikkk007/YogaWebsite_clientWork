export default function AboutSection() {
  const values = [
    {
      icon: '☯',
      title: 'Mind-Body Unity',
      description: 'Every session weaves breathwork with movement to cultivate holistic awareness.',
    },
    {
      icon: '🌿',
      title: 'Rooted in Tradition',
      description: 'Classical teachings adapted thoughtfully for the demands of contemporary life.',
    },
    {
      icon: '🤍',
      title: 'Inclusive Space',
      description: 'Every body, every level, every background — welcomed without judgement.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sage-100 rounded-sm h-64 flex items-center justify-center text-5xl pt-8">🌸</div>
              <div className="bg-earth-100 rounded-sm h-64 mt-12 flex items-center justify-center text-5xl">🧘</div>
              <div className="col-span-2 bg-gradient-to-r from-sage-200 to-earth-100 rounded-sm h-40 flex items-center justify-center">
                <p className="font-display text-xl text-sage-800 italic px-6 text-center">
                  "The yoga mat is a mirror in which we see ourselves."
                </p>
              </div>
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-sage-300 rounded-full -z-10" />
          </div>

          {/* Right — Story */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-earth-400" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-earth-500">My Story</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
              Meet <em className="text-sage-600">Mansi</em>
            </h2>

            <div className="space-y-5 text-charcoal/65 font-body leading-relaxed">
              <p>
                My journey with yoga began over a decade ago, not in a studio, but on a small balcony in Delhi — drawn by curiosity and the need to find stillness in a busy world.
              </p>
              <p>
                Trained in Rishikesh and certified with a 200hr RYT through Yoga Alliance, I have spent years deepening my practice across Hatha, Vinyasa, Ashtanga, and Yin traditions. Today I blend these disciplines to create sessions that are both challenging and deeply nourishing.
              </p>
              <p>
                My philosophy is simple: yoga is not about touching your toes — it is about what you learn on the way down. I teach from a place of compassion, helping each student discover their own rhythm and strength.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((val) => (
                <div key={val.title} className="flex gap-5">
                  <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-charcoal text-sm tracking-wide mb-1">{val.title}</h4>
                    <p className="font-body text-sm text-charcoal/55 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
