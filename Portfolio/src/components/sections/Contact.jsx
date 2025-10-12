import emailjs from 'emailjs-com';
import { useState } from 'react';


export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const hundleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          alert("Message Sent Successfully");
          setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert("An error occurred, Please try again",));

  };
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="w-150 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">Contact Me</h2>
        <form className="space-y-6" onSubmit={hundleSubmit}>
          <div className="relative">
            <input type="text" id="name" name="name" value={formData.name} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Name..." onChange={(e) => setFormData({...formData, name: e.target.value}) } />
          </div>
          <div className="relative">
            <input type="email" id="email" name="email" value={formData.email} required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value}) }/>
          </div>
          <div className="relative">
            <textarea id="message" name="message" value={formData.message} rows="4" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Write Your Message" onChange={(e) => setFormData({...formData, message: e.target.value}) }></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-meduim py-3 px-6 rounded transition relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">Send Message</button>
        </form>
      </div>
    </section>
  );
};