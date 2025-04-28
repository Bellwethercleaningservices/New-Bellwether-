import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/" className="text-2xl font-bold">
              BELLWETHER
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-gray-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
