import React, { useState } from 'react';
import ThemeToggler from './components/ThemeToggler';
import BottomNav from './components/BottomNav';
import LongVideos from './components/LongVideos';
import Shorts from './components/Shorts';
import Posts from './components/Posts';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#100b1a] text-white' : 'bg-[#f8f5f2] text-slate-900'
      }`}
    >
      {/* Dynamic Background */}
      <div
        className={`absolute top-[-20%] left-[-20%] w-[60vw] h-[60vh] rounded-full blur-[150px] animate-pulse transition-opacity duration-500 ${
          isDark ? 'bg-purple-600/30' : 'bg-purple-400/20'
        }`}
      ></div>
      <div
        className={`absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] rounded-full blur-[120px] animate-pulse delay-1000 transition-opacity duration-500 ${
          isDark ? 'bg-orange-500/20' : 'bg-orange-400/20'
        }`}
      ></div>
      <div
        className={`absolute top-[10%] right-[5%] w-[40vw] h-[40vh] rounded-full blur-[100px] animate-pulse delay-500 transition-opacity duration-500 ${
          isDark ? 'bg-emerald-500/20' : 'bg-emerald-400/20'
        }`}
      ></div>

      {/* SVG Ribbons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient id="orange-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ffb58a' }} />
              <stop offset="100%" style={{ stopColor: '#ff8450' }} />
            </linearGradient>
            <linearGradient id="purple-ribbon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#a367ff' }} />
              <stop offset="100%" style={{ stopColor: '#d58aff' }} />
            </linearGradient>
            <filter id="ribbon-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
          <path
            d="M -200 100 C 200 200, 400 600, 700 700"
            stroke="url(#orange-ribbon)"
            strokeWidth="120"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
            filter="url(#ribbon-blur)"
          />
          <path
            d="M 1640 200 C 1300 300, 1000 700, 1200 950"
            stroke="url(#purple-ribbon)"
            strokeWidth="100"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
            filter="url(#ribbon-blur)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen pb-32">
        <header className="absolute top-0 left-0 right-0 z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end">
            <div className="font-logo font-bold text-3xl italic text-[#ff7f50] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Vionex
            </div>
          </div>
        </header>
        <main className="w-full max-w-7xl flex flex-col items-center gap-10 pt-24 px-4 sm:px-6 lg:px-8">
          <LongVideos theme={theme} />
          <Shorts theme={theme} />
          <Posts theme={theme} />
        </main>
      </div>

      <BottomNav theme={theme} />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;