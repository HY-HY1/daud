import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Daud McDonald</h1>
              <h2 className="text-2xl md:text-3xl mb-6">Your Voice for St Paul's</h2>
              <p className="text-lg mb-8">Dedicated to making St Paul's a better place for everyone through community engagement and effective representation.</p>
              <Link href="/about" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="https://i2-prod.gloucestershirelive.co.uk/news/cheltenham-news/article951108.ece/ALTERNATES/s615b/St-Pauls.jpg"
                  alt="St Paul's neighborhood"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Issues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Infrastructure & Safety</h3>
              <p>Advocating for better pavement maintenance and road safety in St Paul's to prevent accidents and improve accessibility. Successfully campaigned for road resurfacing and improved pedestrian safety measures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
              <p>Working closely with residents and local organizations to address community concerns and implement effective solutions. Leading the St Paul's Residents' Association to ensure residents' voices are heard.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Transport & Parking</h3>
              <p>Fighting for fair parking regulations and improved transport infrastructure to benefit all residents. Successfully implemented balanced parking solutions and better public transport options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Road Resurfacing Success</h3>
              <p>Successfully campaigned for and oversaw the resurfacing of key roads in St Paul's, improving safety and accessibility for all road users.</p>
              <div className="mt-4 relative h-48 w-full">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi_n9FIObnzWth_2umabc9Grl5ycM5RU1og&s"
                  alt="Road resurfacing work in St Paul's"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pavement Safety Improvements</h3>
              <p>Led a successful campaign to address dangerous pavement conditions, resulting in increased maintenance and improved safety measures for pedestrians.</p>
              <div className="mt-4 relative h-48 w-full">
                <Image
                  src="https://i2-prod.gloucestershirelive.co.uk/incoming/article2474053.ece/ALTERNATES/s615b/0_MW_GLO_250119Pavements_03JPG.jpg"
                  alt="Daud McDonald inspecting pavement conditions"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-8">Join me in making St Paul's a better place for everyone. Together, we can continue to improve our community.</p>
          <Link href="/contact" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
