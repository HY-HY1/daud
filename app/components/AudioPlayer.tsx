"use client"
import { useState } from 'react';

interface AudioPlayerProps {
  title: string;
  audioUrl: string;
  initialPlaying?: boolean;
}

export default function AudioPlayer({ title, audioUrl, initialPlaying = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);

  const togglePlay = () => {
    const audio = document.getElementById(`audio-${title}`) as HTMLAudioElement;
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
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
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
            <div className="h-full bg-white w-0" id={`progress-${title}`}></div>
          </div>
        </div>
      </div>
      <audio
        id={`audio-${title}`}
        src={audioUrl}
        onTimeUpdate={(e) => {
          const audio = e.currentTarget;
          const progressBar = document.getElementById(`progress-${title}`);
          if (progressBar) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;
          }
        }}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
} 