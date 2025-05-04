import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Daud McDonald</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative h-64 w-full">
              <Image
                src="https://i2-prod.gloucestershirelive.co.uk/incoming/article9328608.ece/ALTERNATES/s615b/0_Daud-McDonald.jpg"
                alt="Daud McDonald"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">Community Leader & Advocate</h2>
            <p className="text-lg mb-4">
              Daud McDonald is a dedicated community leader and the Chairman of the St Paul's Residents' Association (SPRA). 
              With over a decade of experience in community activism, Daud has been instrumental in addressing local issues 
              and improving the quality of life for St Paul's residents.
            </p>
            <p className="text-lg mb-4">
              His commitment to public safety and infrastructure improvement has made him a trusted voice in the community. 
              Daud's work focuses on ensuring that residents' concerns are heard and addressed by local authorities.
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Infrastructure Advocacy</h3>
              <p>
                Successfully brought attention to dangerous pavement conditions in St Paul's, leading to increased 
                maintenance and safety improvements. His efforts helped prevent further accidents and improved 
                accessibility for all residents.
              </p>
              <div className="mt-4 relative h-48 w-full">
                <Image
                  src="https://i2-prod.gloucestershirelive.co.uk/incoming/article2474052.ece/ALTERNATES/s615b/1_MW_GLO_250119Pavements_08JPG.jpg"
                  alt="Pavement conditions in St Paul's"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
              <p>
                Established strong relationships between residents and local authorities, ensuring that community 
                concerns are properly addressed. Organized regular meetings and forums to discuss important local issues.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Transport & Parking</h3>
              <p>
                Advocated for fair parking regulations and improved transport infrastructure, working to find 
                solutions that benefit both residents and local businesses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Public Safety</h3>
              <p>
                Championed initiatives to improve road safety and pedestrian access, particularly in areas with 
                high foot traffic and vulnerable road users.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Vision for St Paul's</h2>
          <p className="text-lg mb-4">
            Daud's vision for St Paul's is one of a safe, accessible, and thriving community where residents' 
            voices are heard and their needs are met. He believes in:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Maintaining and improving local infrastructure</li>
            <li>Ensuring fair and effective parking regulations</li>
            <li>Promoting community engagement and participation</li>
            <li>Advocating for better transport solutions</li>
            <li>Creating a safer environment for all residents</li>
          </ul>
        </section>
      </div>
    </main>
  );
} 