import React from 'react';
import { Theme } from '../types';

interface PostsProps {
  theme: Theme;
}

const Posts: React.FC<PostsProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4 px-2">Posts</h2>
      <div
        className={`relative backdrop-blur-lg rounded-3xl p-3 sm:p-4 border transition-all duration-300 ease-in-out hover:scale-[1.02] ${
          isDark
            ? 'bg-white/5 border-white/10 shadow-2xl shadow-black/20'
            : 'bg-white/40 border-black/10 shadow-2xl shadow-gray-500/20'
        }`}
      >
        <div className="flex items-center gap-3 mb-4 px-1 sm:px-0">
          <img
            src="https://picsum.photos/seed/avatar2/40/40"
            alt="Sarah J."
            className="w-10 h-10 rounded-full border-2 border-white/20"
          />
          <div>
            <p className="font-bold">Sarah J.</p>
            <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>Posted 2 hours ago</p>
          </div>
        </div>
        <p className={`mb-4 px-1 sm:px-0 text-base ${isDark ? 'text-neutral-200' : 'text-slate-800'}`}>
          Just captured this amazing sunset. Nature never ceases to amaze me! 🌅 #sunset #photography #nature
        </p>
        <div className="overflow-hidden rounded-2xl cursor-pointer">
          <img
            src="https://picsum.photos/seed/post1/1280/800"
            alt="Sunset post"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Posts;