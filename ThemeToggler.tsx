import React, { useState } from 'react';
import Icon from './Icon';
import { Theme } from '../types';

interface ThemeTogglerProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ theme, toggleTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDark = theme === 'dark';

  return (
    <div className={`fixed top-1/2 -translate-y-1/2 right-0 z-50 transition-transform duration-500 ease-in-out ${isExpanded ? '' : 'translate-x-[calc(100%-2.5rem)]'}`}>
      <div
        className={`flex items-center rounded-full p-1.5 transition-all duration-300 ${isExpanded ? 'backdrop-blur-xl border shadow-2xl gap-1' : 'border-transparent'}`}
        style={
          isExpanded
            ? {
                background: isDark ? 'rgba(20, 16, 43, 0.8)' : 'rgba(255,255,255,0.6)',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              }
            : { background: 'transparent' }
        }
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Hide toggles' : 'Show toggles'}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            isExpanded
              ? isDark
                ? 'bg-white/5 hover:bg-white/10 text-white'
                : 'bg-black/5 hover:bg-black/10 text-slate-800'
              : 'text-white'
          }`}
          style={!isExpanded ? { filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' } : {}}
        >
          <Icon name={isExpanded ? 'chevronRight' : 'chevronLeft'} className="w-5 h-5" />
        </button>
        <div className={`flex items-center transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-w-40 gap-1' : 'max-w-0'}`}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
              isDark ? 'text-neutral-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-black hover:bg-black/5'
            }`}
          >
            <Icon name={isDark ? 'moon' : 'sun'} className="w-5 h-5" />
          </button>
          <button
            aria-label="Open market"
            className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
              isDark ? 'text-neutral-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-black hover:bg-black/5'
            }`}
          >
            <Icon name="shoppingBag" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;