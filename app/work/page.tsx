import Image from 'next/image';

export default function Work() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">My Work in St Paul's</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Infrastructure & Safety Improvements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Pavement Safety Campaign</h3>
              <p className="mb-4 text-gray-700">
                Led a successful campaign to address dangerous pavement conditions in St Paul's, resulting in:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                <li>Increased maintenance and repairs</li>
                <li>Improved safety measures for pedestrians</li>
                <li>Better accessibility for all residents</li>
                <li>Regular inspections and maintenance schedules</li>
              </ul>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="https://i2-prod.gloucestershirelive.co.uk/incoming/article2474053.ece/ALTERNATES/s615b/0_MW_GLO_250119Pavements_03JPG.jpg"
                  alt="Daud McDonald inspecting pavement conditions"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600">
                Daud McDonald inspecting pavement conditions in St Paul's, working to ensure safe walking routes for all residents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Road Safety Initiatives</h3>
              <p className="mb-4 text-gray-700">
                Implemented several road safety measures, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Traffic calming measures in residential areas</li>
                <li>Improved pedestrian crossings</li>
                <li>Better street lighting</li>
                <li>Clearer road markings and signage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Road Resurfacing Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">St Paul's Road Resurfacing</h3>
              <p className="mb-4 text-gray-700">
                Successfully campaigned for and oversaw the resurfacing of key roads in St Paul's, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                <li>Improved road surface quality</li>
                <li>Better drainage systems</li>
                <li>Enhanced road markings</li>
                <li>Safer junctions and crossings</li>
              </ul>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi_n9FIObnzWth_2umabc9Grl5ycM5RU1og&s"
                  alt="Road resurfacing work in St Paul's"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600">
                Road resurfacing work in progress, improving safety and accessibility for all road users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Impact</h3>
              <p className="mb-4 text-gray-700">
                The road resurfacing projects have resulted in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Reduced vehicle damage and maintenance costs</li>
                <li>Improved road safety for all users</li>
                <li>Better accessibility for emergency services</li>
                <li>Enhanced local business access</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Community Engagement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Residents' Association Leadership</h3>
              <p className="mb-4 text-gray-700">
                As Chairman of the St Paul's Residents' Association, I have:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Organized regular community meetings</li>
                <li>Facilitated dialogue between residents and authorities</li>
                <li>Advocated for community needs and concerns</li>
                <li>Built strong relationships with local organizations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Community Events</h3>
              <p className="mb-4 text-gray-700">
                Organized and supported various community events:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Neighborhood clean-up initiatives</li>
                <li>Community safety workshops</li>
                <li>Local business support programs</li>
                <li>Youth engagement activities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Transport & Parking Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Parking Regulations</h3>
              <p className="mb-4 text-gray-700">
                Worked to implement fair and effective parking solutions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Balanced resident and visitor parking needs</li>
                <li>Improved parking enforcement</li>
                <li>Clearer parking restrictions</li>
                <li>Better signage and information</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Public Transport</h3>
              <p className="mb-4 text-gray-700">
                Advocated for improved public transport options:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Better bus routes and schedules</li>
                <li>Improved accessibility for all users</li>
                <li>Safer transport hubs</li>
                <li>Integration with local development plans</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Future Projects</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">
              Looking ahead, I am committed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Continuing to improve local infrastructure</li>
              <li>Enhancing community safety measures</li>
              <li>Developing sustainable transport solutions</li>
              <li>Strengthening community engagement</li>
              <li>Supporting local businesses and services</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
} 