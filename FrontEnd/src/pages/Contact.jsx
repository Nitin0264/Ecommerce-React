
import React, { useState } from "react";

export default function Contact() {
  const PHONE_NUMBER = "9548648227";

  const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hello! I need help regarding my order."
  )}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderType: "Order Enquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        orderType: "Order Enquiry",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">


{/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-white border-b border-zinc-100">

  {/* Soft background details */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-70" />
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-zinc-50 rounded-full blur-3xl opacity-60" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-24 lg:py-28">

    <div className="max-w-3xl">

      {/* Small label */}
      <div className="flex items-center gap-3 mb-7">

        <span className="w-10 h-px bg-zinc-900" />

        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">
          Contact Us
        </span>

      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight text-zinc-950">

        Let's talk
        <br />

        <span className="italic font-normal text-zinc-400">
          fashion.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-7 max-w-xl text-sm sm:text-base text-zinc-500 leading-7">
        Have a question about an order, product, size or delivery?
        We're here to help you find exactly what you're looking for.
      </p>

      {/* Small visual accent */}
      <div className="mt-8 flex items-center gap-3">

        <span className="w-16 h-px bg-zinc-200" />

        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
          We're here to help
        </span>

      </div>

    </div>

  </div>
</section>
```


      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-5">

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
                Get in touch
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif">
                We're here for you.
              </h2>

              <p className="mt-4 text-sm text-zinc-500 leading-6 max-w-md">
                Whether you're looking for product information or need help
                with an order, feel free to reach out to us.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 mb-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-950 hover:text-white transition-all duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xl group-hover:bg-white/10 group-hover:border-white/20">
                  💬
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 group-hover:text-white/50">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-semibold">
                    +91 {PHONE_NUMBER}
                  </p>
                </div>

              </div>

              <span className="text-xl transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@developerhub.com"
              className="group flex items-center justify-between p-5 mb-4 rounded-2xl border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all duration-300"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-xl group-hover:bg-white/10">
                  ✉️
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 group-hover:text-white/50">
                    Email
                  </p>

                  <p className="mt-1 font-semibold text-sm sm:text-base">
                    contact@developerhub.com
                  </p>
                </div>

              </div>

              <span className="text-xl transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Small brand message */}
            <div className="mt-10 p-6 rounded-2xl bg-zinc-950 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Need quick help?
              </p>

              <h3 className="mt-3 text-xl font-serif">
                Chat with us directly.
              </h3>

              <p className="mt-2 text-sm text-white/50 leading-6">
                For faster assistance with orders, products and availability,
                WhatsApp is the quickest way to reach us.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors"
              >
                Start a conversation
                <span>↗</span>
              </a>
            </div>

          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="lg:col-span-7">

            <div className="rounded-3xl border border-zinc-200 p-6 sm:p-10">

              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-3">
                  Send us a message
                </p>

                <h2 className="text-3xl font-serif">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm text-zinc-500">
                  Tell us what you need and we'll get back to you.
                </p>
              </div>

              {isSubmitted ? (

                /* SUCCESS MESSAGE */
                <div className="py-12 text-center">

                  <div className="w-16 h-16 mx-auto rounded-full bg-zinc-950 text-white flex items-center justify-center text-2xl">
                    ✓
                  </div>

                  <h3 className="mt-6 text-2xl font-serif">
                    Message received
                  </h3>

                  <p className="mt-3 text-sm text-zinc-500 max-w-sm mx-auto leading-6">
                    Thank you for contacting us. We'll get back to you as soon
                    as possible.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-7 px-6 py-3 rounded-full border border-zinc-300 text-sm font-medium hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all"
                  >
                    Send another message
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 outline-none text-sm focus:border-zinc-900 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 outline-none text-sm focus:border-zinc-900 focus:bg-white transition-all"
                      />
                    </div>

                  </div>

                  {/* ENQUIRY TYPE */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                      What do you need help with?
                    </label>

                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 outline-none text-sm focus:border-zinc-900 focus:bg-white transition-all"
                    >
                      <option>Order Enquiry</option>
                      <option>Product Information</option>
                      <option>Size & Fit</option>
                      <option>Delivery Question</option>
                      <option>Return & Exchange</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 outline-none text-sm focus:border-zinc-900 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />

                          <path
                            d="M21 12a9 9 0 01-9 9"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>

                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-lg">→</span>
                      </>
                    )}
                  </button>

                </form>

              )}

            </div>
          </div>

        </div>
      </main>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Looking for something?
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-serif">
                Find your next favourite piece.
              </h2>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-zinc-950 text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-zinc-800 hover:scale-[1.02] transition-all"
            >
              Chat on WhatsApp
              <span>↗</span>
            </a>

          </div>

        </div>
      </section>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >

        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.53 0 .23 5.3.23 11.82c0 2.08.54 4.11 1.57 5.9L.13 24l6.43-1.68a11.77 11.77 0 005.49 1.4h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.15-1.23-6.12-3.36-8.42zM12.06 21.7h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.85 9.85 0 01-1.51-5.19C2.12 6.37 6.58 1.91 12.06 1.91c2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 012.9 7.01c0 5.48-4.46 9.88-9.91 9.88zm5.41-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>

        <span className="absolute right-16 whitespace-nowrap bg-zinc-950 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          Chat with us
        </span>

      </a>

    </div>
  );
}

