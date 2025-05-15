// Create this as a separate component first
import { useState } from 'react';
import { AnimatedShinyText } from './magicui/animated-shiny-text';

export function ContactCard() {
  const [copied, setCopied] = useState(false);
  const email = "dakshsingh.shanu@gmail.com";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full rounded-lg p-4 sm:p-12 text-center">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 relative z-10 my-4 sm:my-4">
        <AnimatedShinyText className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 mt-14 md:mt-0">
          Let&apos;s work together
          <br className="block sm:block" />
          on your next project!
        </AnimatedShinyText>
        
        <button 
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 py-2 sm:py-3 mt-2 sm:mt-4 text-sm sm:text-base font-light text-white/75 transition-all duration-300 cursor-pointer hover:text-white/90 hover:bg-white/5 w-full max-w-xs rounded-xl px-4 sm:px-6 shadow-[inset_0_1px_3px_#ffffff3f]"
        >
          {copied ? (
            <span className="text-green-400">Copied!</span>
          ) : (
            email
          )}
        </button>
      </div>
    </div>
  );
}