import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-[20vw] font-bold font-heading text-white/5 leading-none">404</h1>
    <p className="text-3xl font-heading text-cream -mt-8 mb-6">Page Not Found</p>
    <Link
      to="/"
      className="flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
    >
      <Home size={20} /> Back Home
    </Link>
  </div>
);

export default NotFound;
