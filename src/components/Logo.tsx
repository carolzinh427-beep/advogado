interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showSubtitle = true 
}) => {
  const isDark = variant === 'dark';
  
  // Size parameters
  const emblemSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-base';
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9.5px]';

  return (
    <div className="flex items-center gap-3.5 group select-none">
      {/* Custom Geometric Monogram SVG representing LM matching the logo image */}
      <div className={`relative flex items-center justify-center ${emblemSize} bg-[#3D5061] border border-[#C5A880]/50 rounded-xl transition-all shadow-sm`}>
        <svg 
          viewBox="0 0 50 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* L Character - Slate Gray / Crisp Light */}
          <path 
            d="M12 10V38H28" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="square"
          />
          {/* Internal shadow accent on L */}
          <path 
            d="M16 14V34H26" 
            stroke="#475B6B" 
            strokeWidth="1.5" 
            strokeLinecap="square"
          />

          {/* M Character - Elegant Gold Accent */}
          <path 
            d="M22 38V10L33 28L44 10V38" 
            stroke="#C5A880" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Text styled exactly like the provided logo font */}
      <div className="flex flex-col">
        <span className={`font-cinzel font-semibold tracking-[0.14em] uppercase ${titleSize} ${isDark ? 'text-[#2D3A45]' : 'text-white'}`}>
          Lucas Manoel Alves Garcia
        </span>
        
        {showSubtitle && (
          <div className="flex flex-col space-y-0.5 mt-0.5">
            {/* Fine line with central gold diamond ornament */}
            <div className="flex items-center gap-1.5 opacity-80 py-0.5">
              <div className={`h-[1px] flex-grow ${isDark ? 'bg-[#3D5061]/30' : 'bg-slate-300/40'}`}></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C5A880]"></div>
              <div className={`h-[1px] flex-grow ${isDark ? 'bg-[#3D5061]/30' : 'bg-slate-300/40'}`}></div>
            </div>

            <span className={`tracking-[0.28em] uppercase font-medium text-[#C5A880] ${subtitleSize}`}>
              Advocacia e Consultoria Jurídica
            </span>
          </div>
        )}
      </div>
    </div>
  );
};


