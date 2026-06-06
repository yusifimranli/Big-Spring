import React from 'react'

function Contact() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#0AA8A7]" />
          <input type="email" placeholder="Your email" className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#0AA8A7]" />
          <input type="text" placeholder="Subject" className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#0AA8A7]" />
          <textarea placeholder="Your message" rows="6" className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#0AA8A7]"></textarea>
          
          <button className="bg-[#0AA8A7] text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
            Send Now
          </button>
        </form>

        {/* Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Why you should contact us!</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
          </p>
          
          <ul className="space-y-3 text-slate-800">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#0AA8A7] rounded-full"></span>
              <strong>phone:</strong> +88 125 256 452
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#0AA8A7] rounded-full"></span>
              <strong>Mail:</strong> info@bigspring.com
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#0AA8A7] rounded-full"></span>
              <strong>Address:</strong> 360 Main rd, Rio, Brazil
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact