import React from 'react';
import { Theme, ShortVideoData } from '../types';

interface ShortsProps {
  theme: Theme;
}

const shortVideos: ShortVideoData[] = [
  { id: 1, seed: 'short1', title: 'Mountain View' },
  { id: 2, seed: 'short2', title: 'Ocean Waves' },
  { id: 3, seed: 'short3', title: 'City Lights' },
  { id: 4, seed: 'short4', title: 'Forest Trail' },
  { id: 5, seed: 'short5', title: 'Desert Dunes' },
  { id: 6, seed: 'short6', title: 'Icy Peaks' },
  { id: 7, seed: 'short7', title: 'River Wild' },
  { id: 8, seed: 'short8', title: 'Sunny Beach' },
  { id: 9, seed: 'short9', title: 'Starry Night' },
  { id: 10, seed: 'short10', title: 'Autumn Leaves' },
  { id: 11, seed: 'short11', title: 'Urban Jungle' },
  { id: 12, seed: 'short12', title: 'Misty Morning' },
  { id: 13, seed: 'short13', title: 'Volcanic Plains' },
  { id: 14, seed: 'short14', title: 'Deep Sea' },
  { id: 15, seed: 'short15', title: 'Tropical Paradise' },
  { id: 16, seed: 'short16', title: 'Northern Lights' },
  { id: 17, seed: 'short17', title: 'Canyon Depths' },
  { id: 18, seed: 'short18', title: 'Rolling Hills' },
  { id: 19, seed: 'short19', title: 'Ancient Ruins' },
  { id: 20, seed: 'short20', title: 'Futuristic City' },
];

const Shorts: React.FC<ShortsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4 px-2">Shorts</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {shortVideos.map((video) => (
          <div key={video.id} className="flex-shrink-0 w-36 group cursor-pointer">
            <div
              className={`relative backdrop-blur-lg rounded-3xl p-2 border transition-all duration-300 ease-in-out hover:scale-105 ${
                isDark
                  ? 'bg-white/5 border-white/10 shadow-xl shadow-black/20'
                  : 'bg-white/40 border-black/10 shadow-xl shadow-gray-500/20'
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${video.seed}/200/300`}
                alt={video.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="absolute inset-2 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <p className="absolute bottom-4 left-0 right-0 text-white text-sm font-bold text-center px-2 drop-shadow-md">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shorts;