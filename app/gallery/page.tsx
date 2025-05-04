import Image from 'next/image';

export default function Gallery() {
  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Cutesy Me</h1>
        <p className="text-xl text-gray-700 mb-12 text-center">A collection of moments from my work in St Paul's</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full mb-4">
              <Image
                src="https://i2-prod.gloucestershirelive.co.uk/incoming/article1445112.ece/ALTERNATES/s615b/Daud-McDonald.jpg"
                alt="Daud McDonald in St Paul's"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Working in the community
            </p>
          </div>

          {/* Second Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full mb-4">
              <Image
                src="https://i2-prod.gloucestershirelive.co.uk/incoming/article9328608.ece/ALTERNATES/s615b/0_Daud-McDonald.jpg"
                alt="Daud McDonald at a community event"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Engaging with residents
            </p>
          </div>

          {/* Third Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full mb-4">
              <Image
                src="https://i2-prod.gloucestershirelive.co.uk/incoming/article2474053.ece/ALTERNATES/s615b/0_MW_GLO_250119Pavements_03JPG.jpg"
                alt="Daud McDonald inspecting pavement conditions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Inspecting pavement conditions
            </p>
          </div>

          {/* Fourth Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImjC94Qhvr3bhe52bsuimTMjCu-fjmNkfNw&s"
                alt="Daud McDonald's logo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              My official logo
            </p>
          </div>

          {/* Fifth Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full mb-4">
              <Image
                src="https://i2-prod.gloucestershirelive.co.uk/news/cheltenham-news/article951108.ece/ALTERNATES/s615b/St-Pauls.jpg"
                alt="St Paul's neighborhood"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              The beautiful St Paul's neighborhood
            </p>
          </div>

          {/* Sixth Image */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-64 w-full mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi_n9FIObnzWth_2umabc9Grl5ycM5RU1og&s"
                alt="Road resurfacing work in St Paul's"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Road resurfacing project in progress
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 