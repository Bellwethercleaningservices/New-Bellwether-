import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Our Premium Services</h1>
        
        <div className="mt-12">
          <div id="deep-cleaning" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Deep Cleaning</h2>
                <p className="mb-4">
                  Our signature deep cleaning service goes beyond the surface to ensure every corner of your home or office is immaculately clean. This comprehensive service is perfect for seasonal cleaning, preparing for special events, or simply refreshing your space.
                </p>
                <p className="mb-4">
                  Our deep cleaning includes all standard cleaning tasks plus detailed attention to areas that are often overlooked, such as:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Interior cabinet and drawer cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Detailed bathroom sanitization including grout and scale removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Thorough kitchen appliance cleaning (inside and out)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Baseboards, crown molding, and door frame dusting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Window sill and track cleaning</span>
                  </li>
                </ul>
                <Link href="/booking" className="btn-primary">Book Deep Cleaning</Link>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/images/gallery/IMG_6929.jpeg" 
                  alt="Deep Cleaning Service" 
                  width={500} 
                  height={350} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div id="end-of-tenancy" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Image 
                  src="/images/gallery/IMG_6933.jpeg" 
                  alt="End of Tenancy Cleaning" 
                  width={500} 
                  height={350} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">End of Tenancy Cleaning</h2>
                <p className="mb-4">
                  Moving out of a property? Our end of tenancy cleaning service is designed to help you recover your deposit and leave the property in pristine condition for the next occupants.
                </p>
                <p className="mb-4">
                  This thorough service meets the high standards required by landlords and letting agents, covering:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Complete deep cleaning of all rooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Oven and appliance deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Limescale removal from bathrooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Wall spot cleaning and mark removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Window and blind cleaning</span>
                  </li>
                </ul>
                <Link href="/booking" className="btn-primary">Book End of Tenancy Cleaning</Link>
              </div>
            </div>
          </div>
          
          <div id="regular-maintenance" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Regular Maintenance Cleaning</h2>
                <p className="mb-4">
                  Maintain the pristine condition of your home or office with our regular maintenance cleaning service. We offer flexible scheduling options to suit your needs, whether weekly, bi-weekly, or monthly.
                </p>
                <p className="mb-4">
                  Our regular maintenance cleaning includes:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Dusting and wiping of all surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Vacuuming and mopping of floors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Bathroom and kitchen sanitization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Emptying bins and general tidying</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-bold">✓</span>
                    <span>Customized cleaning plan based on your preferences</span>
                  </li>
                </ul>
                <Link href="/booking" className="btn-primary">Book Regular Cleaning</Link>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/images/gallery/IMG_6928.jpeg" 
                  alt="Regular Maintenance Cleaning" 
                  width={500} 
                  height={350} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Service Areas</h2>
          <p className="text-center mb-8">
            BELLWETHER Cleaning Services proudly serves affluent areas within 15 miles of Barking, East London, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Canary Wharf</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Stratford</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Hackney</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Shoreditch</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Wanstead</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Ilford</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Woodford</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <p className="font-semibold">Chigwell</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">Book Now</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
