"use client"
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById('daudy-song') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

      {/* I Love Snakes Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">I Love Snakes</h2>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Daud's Passion for Snakes</h3>
                  <p className="mb-4">
                    Daud McDonald has a unique passion for snakes and has been actively involved in snake conservation and education. His love for these fascinating creatures has made him a well-known figure in the local reptile community.
                  </p>
                  <p className="mb-4">
                    "Snakes are misunderstood creatures that play a vital role in our ecosystem. Through education and proper handling, we can learn to appreciate and protect these amazing animals." - Daud McDonald
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Regular speaker at local schools about snake conservation</li>
                    <li>Advocate for responsible snake ownership</li>
                    <li>Supports local reptile rescue organizations</li>
                    <li>Promotes snake awareness and safety education</li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-96">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2HDO6307-uVhAV5I2U2wiguZv3R0y8V0eA&s"
                    alt="Daud McDonald with a snake"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
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

      {/* Audio Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">My Daudy Song</h2>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                <div className="flex-1">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-0" id="progress-bar"></div>
                  </div>
                </div>
              </div>
              <audio
                id="daudy-song"
                src="https://cdn1.suno.ai/4213deea-0819-47f9-8634-ba50ddfccc35.mp3"
                onTimeUpdate={(e) => {
                  const audio = e.currentTarget;
                  const progressBar = document.getElementById('progress-bar');
                  if (progressBar) {
                    const progress = (audio.currentTime / audio.duration) * 100;
                    progressBar.style.width = `${progress}%`;
                  }
                }}
                onEnded={() => setIsPlaying(false)}
              />
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
