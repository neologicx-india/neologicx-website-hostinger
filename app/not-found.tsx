import Link from 'next/link';
import { Home, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white p-6">
      <div className="max-w-xl text-center flex flex-col items-center">
        {/* Decorative 404 Element */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-50 rounded-full"></div>
          <h1 className="relative text-8xl md:text-9xl font-extrabold text-slate-900 tracking-tighter">
            40<span className="text-primary">4</span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-4">
          Oops! Page not found
        </h2>

        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
