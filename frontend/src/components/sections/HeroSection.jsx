import mansi1 from '../../assets/mansi1.png'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f4f7f0 0%, #fdf8f2 40%, #e6edd9 100%)',
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-sage-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] rounded-full bg-earth-100/40 blur-3xl pointer-events-none" />

      {/* Decorative line art */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="130" stroke="#5a7137" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="100" stroke="#5a7137" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="70" stroke="#5a7137" strokeWidth="0.5" />
          <path d="M140 10 L140 270 M10 140 L270 140" stroke="#5a7137" strokeWidth="0.5" />
          <path d="M140 10 Q200 140 140 270 Q80 140 140 10" stroke="#9a623c" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-8 h-px bg-sage-500" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-sage-600">Certified Yoga Instructor</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.95] mb-8">
              Find Your <br />
              <em className="text-sage-600 not-italic">Inner</em>{' '}
              <span className="text-earth-500">Peace</span>
            </h1>

            <p className="font-body text-lg text-charcoal/60 leading-relaxed max-w-md mb-12">
              Journey inward with Mansi Sharma — where ancient wisdom meets modern life. Transform your body, calm your mind, and awaken your spirit.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#schedule" className="btn-primary">
                View Schedule
              </a>
              <a href="#programs" className="btn-outline">
                Explore Programs
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-16 pt-10 border-t border-sage-200">
              {[
                { number: '8+', label: 'Years Teaching' },
                { number: '500+', label: 'Students Guided' },
                { number: '6', label: 'Yoga Styles' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-sage-700">{stat.number}</div>
                  <div className="font-body text-xs tracking-wider uppercase text-charcoal/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
{/* Image */}
<div className="relative flex justify-center lg:justify-end">
  <div className="relative w-[340px] h-[440px] md:w-[400px] md:h-[520px]">
    
    <div className="absolute inset-0 rounded-sm overflow-hidden">
      <img src={mansi1} alt="Mansi Sharma" className="w-full h-full object-cover" />
    </div>

    {/* Decorative offset border */}
    <div className="absolute -bottom-4 -right-4 w-full h-full border border-sage-400/40 rounded-sm -z-10" />
    <div className="absolute -bottom-8 -right-8 w-full h-full border border-earth-300/30 rounded-sm -z-20" />

    {/* Floating badge */}
    <div className="absolute -left-6 bottom-20 bg-white shadow-xl rounded-sm px-5 py-4 border-l-4 border-sage-500">
      <div className="font-display text-xl text-sage-700 italic">200hr RYT</div>
      <div className="font-body text-xs tracking-wider uppercase text-charcoal/50">Yoga Alliance Certified</div>
    </div>

  </div>
</div>
         
              
        </div>  

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs tracking-widest uppercase text-charcoal/30">Scroll</span>
        <svg className="w-4 h-4 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      </div>
    </section>
  )
}
