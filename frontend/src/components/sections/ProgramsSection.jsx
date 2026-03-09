const programs = [
  {
    name: 'Hatha Yoga',
    emoji: '🌸',
    level: 'Beginner',
    duration: '60 min',
    bg: 'bg-sage-50',
    accent: 'text-sage-700',
    border: 'border-sage-200',
    tag: 'bg-sage-100 text-sage-700',
    description:
      'The foundation of all yoga styles. Hatha focuses on precise alignment, steady breathing, and holding postures to build strength and flexibility.',
    benefits: ['Improved posture', 'Stress relief', 'Foundation for all styles'],
  },
  {
    name: 'Vinyasa Flow',
    emoji: '🌊',
    level: 'Intermediate',
    duration: '60 min',
    bg: 'bg-earth-50',
    accent: 'text-earth-600',
    border: 'border-earth-200',
    tag: 'bg-earth-100 text-earth-700',
    description:
      'A dynamic, flowing practice that synchronises breath with movement. Each class is creatively sequenced to challenge and invigorate.',
    benefits: ['Cardiovascular health', 'Dynamic strength', 'Creative expression'],
  },
  {
    name: 'Ashtanga Primary',
    emoji: '🔥',
    level: 'Advanced',
    duration: '90 min',
    bg: 'bg-rose-50',
    accent: 'text-rose-700',
    border: 'border-rose-200',
    tag: 'bg-rose-100 text-rose-700',
    description:
      'The traditional Ashtanga primary series — a set sequence of postures practiced with Ujjayi breath, creating an intense internal heat and detoxification.',
    benefits: ['Deep detox', 'Athletic strength', 'Mental discipline'],
  },
  {
    name: 'Yin & Restorative',
    emoji: '🌙',
    level: 'All Levels',
    duration: '75 min',
    bg: 'bg-indigo-50',
    accent: 'text-indigo-700',
    border: 'border-indigo-200',
    tag: 'bg-indigo-100 text-indigo-700',
    description:
      'Slow, floor-based postures held for several minutes to release deep connective tissue, calm the nervous system, and restore vital energy.',
    benefits: ['Deep relaxation', 'Fascia release', 'Sleep improvement'],
  },
  {
    name: 'Pranayama & Meditation',
    emoji: '☁️',
    level: 'All Levels',
    duration: '45 min',
    bg: 'bg-amber-50',
    accent: 'text-amber-700',
    border: 'border-amber-200',
    tag: 'bg-amber-100 text-amber-700',
    description:
      'Dedicated breathwork and seated meditation practice. Learn ancient techniques to manage energy, reduce anxiety, and cultivate inner stillness.',
    benefits: ['Anxiety reduction', 'Mental clarity', 'Energetic balance'],
  },
  {
    name: 'Power Yoga',
    emoji: '⚡',
    level: 'Advanced',
    duration: '60 min',
    bg: 'bg-orange-50',
    accent: 'text-orange-700',
    border: 'border-orange-200',
    tag: 'bg-orange-100 text-orange-700',
    description:
      'A strength-focused, athletic style of yoga that builds muscle, improves endurance, and leaves you feeling powerful and energised.',
    benefits: ['Core strength', 'Muscle tone', 'Endurance'],
  },
]

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
  'All Levels': 'bg-blue-100 text-blue-700',
}

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-cream">
      <div className="container-max">
        {/* Heading */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-sage-500" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-sage-600">What We Offer</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-tight">
            Yoga <em className="text-sage-600">Programs</em>
          </h2>
          <p className="font-body text-charcoal/55 mt-4 leading-relaxed">
            Whether you are stepping onto the mat for the first time or deepening an established practice, there is a class crafted for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div
              key={prog.name}
              className={`${prog.bg} border ${prog.border} rounded-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{prog.emoji}</div>
                <span className={`tag-level ${levelColors[prog.level]}`}>
                  {prog.level}
                </span>
              </div>

              <h3 className={`font-display text-2xl mb-3 ${prog.accent}`}>{prog.name}</h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-6">{prog.description}</p>

              <div className="space-y-2 mb-6">
                {prog.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                    <span className="font-body text-xs text-charcoal/55">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-current/10">
                <svg className="w-4 h-4 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body text-xs text-charcoal/40">{prog.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
