export default function Footer() {
  return (
    <footer className="w-full py-10 bg-navy-light text-slate-muted border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {new Date().getFullYear()} Sudip Parajuli. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="https://github.com/sudip-parajuli" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/sudip-parajuli-8073601a1" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">LinkedIn</a>
          <a href="https://x.com/sudip_parajuli" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">Twitter/X</a>
        </div>
        <div className="text-xs text-slate-500">
          Built with Next.js 15, Tailwind & Motion
        </div>
      </div>
    </footer>
  );
}
