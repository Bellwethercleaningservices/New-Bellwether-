import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BELLWETHER</h3>
            <p className="mb-4">Premium cleaning services for discerning clients in East London. Offering deep cleaning, end of tenancy, and regular maintenance services.</p>
            <p>Operating hours: 9am-3pm, Monday to Friday</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-gray-300 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Email: customerinfo@bellwether.com</p>
            <p className="mb-2">Based in: Barking, East London</p>
            <p className="mb-4">Serving affluent areas within 15 miles</p>
            <Link href="/booking" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors inline-block">
              Book a Cleaning
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} BELLWETHER Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
