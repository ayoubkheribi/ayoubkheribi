export const About = () => {
  return (
    <section className="min-h-screen flex justify-center items-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent ">About Me</h1>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a front-end developer specializing in React and Tailwind CSS, focused on building clean, responsive, and accessible user interfaces. I enjoy solving UI challenges, learning new technologies, and collaborating to turn ideas into polished products.
          </p>
          <div className="">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Skills</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Proficient in React, JavaScript (ES6+), HTML5, and CSS3</li>
                <li>Experienced with Tailwind CSS for rapid UI development</li>
                <li>Familiar with version control using Git and GitHub</li>
                <li>Knowledge of responsive design principles and mobile-first development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};