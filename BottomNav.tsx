import React, { useState } from 'react';
import Icon from './Icon';
import { Theme, IconName } from '../types';

interface BottomNavProps {
  theme: Theme;
}

const BottomNav: React.FC<BottomNavProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [animation, setAnimation] = useState<Record<string, string>>({
    home: '',
    chat: '',
    plus: '',
    bell: '',
    user: '',
  });

  const handleIconClick = (iconName: string) => {
    if (animation[iconName]) return;
    
    const animationClasses: Record<string, string> = {
      home: 'ripple-effect',
      chat: 'bounce-effect',
      plus: 'expand-glow-effect',
      bell: 'shake-effect',
      user: 'spin-effect',
    };
    
    const animationDurations: Record<string, number> = {
      home: 400,
      chat: 400,
      plus: 400,
      bell: 300,
      user: 400,
    };

    setAnimation((prev) => ({ ...prev, [iconName]: animationClasses[iconName] }));
    setTimeout(() => {
      setAnimation((prev) => ({ ...prev, [iconName]: '' }));
    }, animationDurations[iconName]);
  };

  const icons: { name: string; componentName: IconName }[] = [
    { name: 'home', componentName: 'home' },
    { name: 'chat', componentName: 'chat' },
    { name: 'plus', componentName: 'plus' },
    { name: 'bell', componentName: 'bell' },
    { name: 'user', componentName: 'user' },
  ];

  return (
    <>
      <style>{`
        @keyframes ripple { to { box-shadow: 0 0 0 1.5rem rgba(255, 255, 255, 0); } }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-10px) scale(1.1); } 60% { transform: translateY(-5px) scale(1.05); } }
        @keyframes expand-glow { 50% { transform: scale(1.2); filter: drop-shadow(0 0 8px currentColor); } }
        @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0) rotate(-1deg); } 20%, 80% { transform: translate3d(2px, 0, 0) rotate(1deg); } 30%, 50%, 70% { transform: translate3d(-3px, 0, 0) rotate(-1deg); } 40%, 60% { transform: translate3d(3px, 0, 0) rotate(1deg); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .ripple-effect { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5); animation: ripple 0.4s ease-out; }
        .bounce-effect { animation: bounce 0.4s ease-in-out; }
        .expand-glow-effect { animation: expand-glow 0.4s ease-in-out; }
        .shake-effect { animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both; }
        .spin-effect { animation: spin 0.4s linear; }
      `}</style>
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <nav
          aria-label="Main Navigation"
          className={`flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-xl border rounded-full px-3 py-2 shadow-lg transition-all duration-300 ${
            isDark ? 'border-white/20 bg-black/30 shadow-black/40' : 'border-black/10 bg-white/30 shadow-gray-900/20'
          }`}
        >
          {icons.map((icon) => (
            <button
              key={icon.name}
              onClick={() => handleIconClick(icon.name)}
              aria-label={icon.name}
              className={`group p-2.5 rounded-full transition-all duration-300 ease-out hover:scale-110 ${
                isDark ? 'text-neutral-300 hover:text-white' : 'text-slate-700 hover:text-black'
              } ${
                icon.name === 'plus'
                  ? `relative -translate-y-2 ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-slate-800 text-white hover:bg-slate-900'} shadow-lg`
                  : ''
              } ${animation[icon.name]}`}
            >
              <Icon
                name={icon.componentName}
                className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ${icon.name !== 'plus' && 'group-hover:drop-shadow-[0_0_6px_currentColor]'}`}
              />
            </button>
          ))}
        </nav>
      </footer>
    </>
  );
};

export default BottomNav;