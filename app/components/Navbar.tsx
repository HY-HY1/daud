import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImjC94Qhvr3bhe52bsuimTMjCu-fjmNkfNw&s"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-blue-900">Daud McDonald</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-900 transition"
            >
              About
            </Link>
            <Link 
              href="/work" 
              className="text-gray-700 hover:text-blue-900 transition"
            >
              My Work
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Contact
            </Link>
          </div>
          
          <button className="md:hidden">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 