import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <section className="min-h-screen flex justify-center items-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent ">
          Featured Projects
        </h2>
        <Link to={"https://book-reco-psi.vercel.app/"} target="_blank" rel="noopener noreferrer">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,224,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Book.Reco</h3>
            <p className="text-gray-400 mb-4">Book.Reco is a web app that lets users search and explore books by title, author, or category. It provides detailed book info using the Google Books API, with a clean and responsive design built for easy browsing.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Zustand", "Axios", "Google Books API"].map((tech) => (
                <span key={tech} className="bg-blue-500/10 text-blue-500 text-sm px-3 py-1 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        </Link>
      </div>
    </section>
  );
};