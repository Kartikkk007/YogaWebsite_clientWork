const WHATSAPP_NUMBER = '9650340359' // Replace with Mansi's actual number
const EMAIL = 'mansi@yoga.com'       // Replace with actual email

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-earth-400" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-earth-500">Get in Touch</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-tight mb-6">
              Begin Your <em className="text-sage-600">Journey</em>
            </h2>
            <p className="font-body text-charcoal/60 leading-relaxed mb-10">
              Have questions about which class is right for you? Want to arrange a private session? Mansi would love to hear from you. Reach out directly — no forms, no wait.
            </p>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${9650340359}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 border border-green-200 bg-green-50 hover:bg-green-100 rounded-sm transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-green-800 text-sm mb-0.5">Chat on WhatsApp</div>
                  <div className="font-body text-xs text-green-600/70">Usually responds within a few hours</div>
                </div>
                <svg className="w-5 h-5 text-green-400 ml-auto group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-5 p-6 border border-sage-200 bg-sage-50 hover:bg-sage-100 rounded-sm transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-sage-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-sage-800 text-sm mb-0.5">Send an Email</div>
                  <div className="font-body text-xs text-sage-600/70">{EMAIL}</div>
                </div>
                <svg className="w-5 h-5 text-sage-400 ml-auto group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — decorative quote block */}
          <div className="relative">
            <div className="bg-sage-800 rounded-sm p-12 text-center">
              <div className="font-display text-7xl text-sage-600 mb-4 leading-none">"</div>
              <blockquote className="font-display text-2xl text-white italic leading-relaxed mb-8">
                Yoga is not about self-improvement. It is about self-acceptance.
              </blockquote>
              <div className="w-12 h-px bg-sage-500 mx-auto mb-4" />
              <p className="font-body text-sage-400 text-xs tracking-widest uppercase">Gurmukh Kaur Khalsa</p>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl p-6 rounded-sm border border-sage-100 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-body text-xs tracking-widest uppercase text-charcoal/50">Available Now</span>
              </div>
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                Accepting new students for both <strong>group classes</strong> and <strong>private one-on-one sessions</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
