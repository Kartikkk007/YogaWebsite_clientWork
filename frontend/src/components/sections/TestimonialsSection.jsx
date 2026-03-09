const testimonials = [
  {
    name: 'Priya R.',
    city: 'Delhi',
    text: 'Mansi has completely transformed the way I relate to my body. Her guidance is patient, precise, and deeply intuitive. After 6 months with her, I am stronger and calmer than I have ever been.',
    rating: 5,
    initials: 'PR',
    color: 'bg-sage-200 text-sage-800',
  },
  {
    name: 'Arjun M.',
    city: 'Mumbai',
    text: 'I was a sceptic before I tried Mansi\'s Ashtanga class. Two years later, yoga is the cornerstone of my daily routine. She teaches with such passion and authenticity.',
    rating: 5,
    initials: 'AM',
    color: 'bg-earth-200 text-earth-800',
  },
  {
    name: 'Kavya S.',
    city: 'Bengaluru',
    text: 'The Yin & Restorative sessions have been life-changing for my anxiety. Mansi creates such a safe, nurturing environment. I always leave feeling completely renewed.',
    rating: 5,
    initials: 'KS',
    color: 'bg-rose-200 text-rose-800',
  },
  {
    name: 'Rohan T.',
    city: 'Pune',
    text: 'As someone with a bad back, I was nervous to start yoga. Mansi modified every pose for my needs and never made me feel limited. My chronic pain has reduced significantly.',
    rating: 5,
    initials: 'RT',
    color: 'bg-indigo-200 text-indigo-800',
  },
  {
    name: 'Sneha P.',
    city: 'Hyderabad',
    text: "The online classes are just as immersive as in-person. Mansi energy travels through the screen. Her morning Vinyasa flow is my favourite way to start the day.",
    rating: 5,
    initials: 'SP',
    color: 'bg-amber-200 text-amber-800',
  },
  {
    name: 'Ananya K.',
    city: 'Chennai',
    text: 'I joined for fitness but stayed for the mental clarity. Mansi weaves in philosophy and breathwork so naturally. Every class is a meditation in motion.',
    rating: 5,
    initials: 'AK',
    color: 'bg-teal-200 text-teal-800',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-sage-500" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-sage-600">Student Stories</span>
            <div className="w-8 h-px bg-sage-500" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-tight">
            Words of <em className="text-sage-600">Gratitude</em>
          </h2>
          <p className="font-body text-charcoal/55 mt-4 text-sm leading-relaxed">
            The greatest reward is witnessing transformation — in strength, in stillness, and in how students carry themselves through life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`border border-sage-100 rounded-sm p-8 hover:shadow-md transition-all duration-300 ${
                i === 1 ? 'md:translate-y-4' : ''
              } ${i === 4 ? 'md:translate-y-2' : ''}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-lg text-charcoal/75 italic leading-relaxed mb-8">
                "{t.text}"
              </blockquote>

              <div className="flex items-center gap-3 pt-6 border-t border-sage-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-body font-semibold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-charcoal">{t.name}</div>
                  <div className="font-body text-xs text-charcoal/45">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
