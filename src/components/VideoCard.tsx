import React from 'react';
import { VideoData, Theme } from '../types';

interface VideoCardProps {
  video: VideoData;
  theme: Theme;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, theme }) => {
  const isDark = theme === 'dark';
  return (
    <div
      className={`relative backdrop-blur-lg rounded-3xl p-3 sm:p-4 border transition-all duration-300 ease-in-out hover:scale-[1.02] ${
        isDark
          ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/20'
          : 'bg-white/40 border-black/10 shadow-2xl shadow-gray-500/20'
      }`}
    >
      <div className="flex items-center justify-between mb-4 px-1 sm:px-0">
        <div className="flex items-center gap-4">
          <img
            src={`https://picsum.photos/seed/${video.avatarSeed}/48/48`}
            alt={video.author}
            className="w-12 h-12 rounded-full border-2 border-white/20"
          />
          <div>
            <p className="font-bold">{video.author}</p>
          </div>
        </div>
        <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>{video.date}</p>
      </div>
      <div className="relative overflow-hidden rounded-2xl group transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">
        <img
          src={`https://picsum.photos/seed/${video.thumbnailSeed}/1280/720`}
          alt={video.title}
          className="w-full h-auto object-cover aspect-video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {video.duration}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-white/80 drop-shadow-lg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="pt-4 px-1 sm:px-0">
        <h3 className="font-bold text-lg leading-tight">{video.title}</h3>
        <p className={`text-sm ${isDark ? 'text-neutral-300' : 'text-slate-600'}`}>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;