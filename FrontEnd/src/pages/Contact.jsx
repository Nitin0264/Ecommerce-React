import React, { useState } from 'react';

export default function Contact() {
  const PHONE_NUMBER = "9548648227";
  const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent("Hello! I have an inquiry regarding your services.")}`;

  // Form States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API Call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    { q: "What are your standard delivery timelines?", a: "For premium custom development and designs, delivery ranges from 2 to 4 weeks depending on the project complexity and scope." },
    { q: "Do you offer emergency technical support?", a: "Yes, our priority support tier includes 24/7 coverage for system critical issues. Standard support operates during office hours." },
    { q: "Can we migrate our legacy setup to React & Tailwind?", a: "Absolutely. We specialize in converting legacy templates, Bootstrap setups, or raw HTML platforms into highly performant modern React stacks." },
    { q: "How do payments work for international clients?", a: "We accept payments globally through secured channels including Stripe, PayPal, and direct wire transfers with milestone-based scheduling." }
  ];

  return (
    <div className="relative min-h-screen w-screen bg-white text-zinc-800 font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden">
      
      {/* ── HEADER BANNER HERO ── */}
      <section className="relative border-b border-zinc-100 bg-zinc-50/50 py-20 px-4 text-center w-full">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-600 tracking-wider uppercase">
            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-serif tracking-tight text-zinc-900">
            Let's Forge Something <span className="text-zinc-600">Incredible</span>
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Have a project in mind, a business query, or looking to step up your modern interface game? Drop a line below.
          </p>
        </div>
      </section>

      {/* ── MAIN INTERACTIVE GRID PANEL ── */}
      <main className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
        
        {/* LEFT COLUMN: CONTACT CARDS & METRICS (SPAN 5) */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 border-l-4 border-zinc-400 pl-3">
              Direct Channels
            </h2>
            
            {/* WhatsApp Integration Card */}
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-zinc-50 border border-zinc-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-2xl flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform duration-300">
                  💬
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Instant WhatsApp Chat</h3>
                  <p className="text-lg font-bold text-zinc-900 mt-0.5 group-hover:text-emerald-600 transition-colors">+91 {PHONE_NUMBER}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-xs mt-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Live connection • Typical response under 15 mins
              </p>
            </a>

            {/* Email Contact Card */}
            <div className="group bg-zinc-50 border border-zinc-200 hover:border-zinc-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-2xl flex items-center justify-center text-zinc-600 group-hover:scale-105 transition-transform duration-300">
                  ✉️
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Official Email</h3>
                  <p className="text-lg font-bold text-zinc-900 mt-0.5">contact@developerhub.com</p>
                </div>
              </div>
              <p className="text-zinc-400 text-xs mt-4">For formal RFPs, documentation, and asset delivery.</p>
            </div>

            {/* Location Workspace Card */}
            <div className="group bg-zinc-50 border border-zinc-200 hover:border-zinc-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-2xl flex items-center justify-center text-zinc-600 group-hover:scale-105 transition-transform duration-300">
                  📍
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Primary Location</h3>
                  <p className="text-lg font-bold text-zinc-900 mt-0.5">Dehradun, India</p>
                </div>
              </div>
              <p className="text-zinc-400 text-xs mt-4">Available for localized consults and remote collaborations globally.</p>
            </div>
          </div>

          {/* Operational Metrics Sub-block */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-r border-zinc-200 pr-2">
                <div className="text-3xl font-black text-zinc-900">99.4%</div>
                <div className="text-xs text-zinc-500 mt-1">Client Satisfaction</div>
              </div>
              <div className="pl-2">
                <div className="text-3xl font-black text-zinc-600">24 Hr</div>
                <div className="text-xs text-zinc-500 mt-1">Max Turnaround</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-END DYNAMIC FORM (SPAN 7) */}
        <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-2">
            Send Secure Message
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Fill out the criteria below. Our data pipelines handle delivery directly to the core engineering desk instantly.
          </p>

          {isSubmitted ? (
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 text-center space-y-4 animate-[fadeInUp_0.4s_ease]">
              <div className="w-16 h-16 bg-zinc-800 text-white text-3xl rounded-full flex items-center justify-center mx-auto shadow-sm">
                ✓
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Message Dispatched Successfully</h3>
              <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                Thank you for reaching out. Your communication payload has safely cleared pipelines. Expect a direct callback shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 border border-zinc-300 hover:border-zinc-400 rounded-xl text-xs font-medium text-zinc-600 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-500 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-500 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Subject Context</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Web Application / E-Commerce Upgrade Development" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Detailed Scope Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your project timeline, specific technical stack demands, or targeted features..." 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-500 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-zinc-900 hover:bg-zinc-800 active:scale-[0.99] text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Payload...
                  </>
                ) : (
                  <>
                    Transmit Message Payload
                    <span className="text-base">→</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Alternative direct divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-3 text-zinc-400 tracking-widest font-bold">Or Connect Instantly</span></div>
          </div>

          {/* Embedded Large WhatsApp Shortcut Button */}
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-sm border border-emerald-700/10 group"
          >
            <span className="text-xl group-hover:rotate-12 transition-transform">💬</span>
            <div className="text-left">
              <p className="text-sm font-semibold">Launch Secure WhatsApp Chat</p>
              <p className="text-[10px] text-emerald-100 font-normal tracking-wide opacity-80">Bypasses contact forms • Connects to mobile +91 {PHONE_NUMBER}</p>
            </div>
          </a>
        </div>
      </main>

      {/* ── DESIGN SHOWCASE SECTION: ACCORDION FAQS ── */}
      <section className="border-t border-zinc-200 bg-zinc-50/30 py-20 px-4 relative z-10 w-full">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 font-serif">Frequently Asked Solutions</h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">Get answers to critical logistical engineering questions instantly right here.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between text-zinc-800 font-medium text-sm sm:text-base hover:bg-zinc-50"
                >
                  <span>{faq.q}</span>
                  <span className={`text-zinc-400 transform transition-transform duration-200 ${activeFaq === index ? 'rotate-180 text-zinc-600' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 border-t border-zinc-100 p-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                  <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOATING PERMANENT WHATSAPP ICON BADGE ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Direct Link to WhatsApp Support"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.48 4.96c.002 0 .003 0 .005 0 5.405 0 9.801-4.382 9.804-9.77.002-2.61-1.012-5.064-2.857-6.912C16.656 1.03 14.225.016 11.666.016c-5.417 0-9.82 4.394-9.823 9.784-.001 1.768.467 3.493 1.357 5.023l-.994 3.633 3.72-.973zm13.102-5.464c-.33-.165-1.951-.963-2.251-1.073-.302-.11-.522-.165-.742.165-.22.33-.85.11-.85 1.073s-.22.413-.55.248c-.33-.165-1.391-.512-2.65-1.635-.98-.874-1.64-1.953-1.832-2.283-.193-.33-.02-.507.145-.672.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.742-1.788-1.016-2.448-.267-.643-.539-.556-.742-.566-.19-.01-.41-.01-.63-.01-.22 0-.577.083-.88.413-.302.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.555 5.64 4.983.788.34 1.405.543 1.884.696.792.25 1.513.215 2.083.13.635-.094 1.951-.798 2.226-1.568.275-.77.275-1.43.193-1.568-.083-.138-.303-.22-.633-.385z" />
        </svg>
        
        {/* Hover Label Tooltip */}
        <span className="absolute right-16 bg-zinc-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-md tracking-wide pointer-events-none whitespace-nowrap">
          Message Us Directly
        </span>
      </a>
    </div>
  );
}