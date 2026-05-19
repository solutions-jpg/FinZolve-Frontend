interface FinZolveLogoProps {
  size?: number
  showWordmark?: boolean
}

export function FinZolveLogo({ size = 44, showWordmark = true }: FinZolveLogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="fzGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a8893f" />
            <stop offset="50%" stopColor="#e8d5a3" />
            <stop offset="100%" stopColor="#c9a962" />
          </linearGradient>
          <linearGradient id="fzNavy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a3560" />
            <stop offset="100%" stopColor="#0b1a33" />
          </linearGradient>
        </defs>

        {/* Background shield */}
        <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#fzNavy)" />
        <rect x="2" y="2" width="44" height="44" rx="10" stroke="url(#fzGold)" strokeWidth="1.2" opacity="0.6" />

        {/* Geometric F — vertical bar + two horizontals */}
        <path
          d="M11 12h14v3.5H14.5v5.5H23v3.5H14.5V36H11V12z"
          fill="url(#fzGold)"
          opacity="0.95"
        />

        {/* Geometric Z — diagonal slash */}
        <path
          d="M25 12h12v3.5H29.5l7.5 9.5v3H25v-3.5h7.5L25 15.5V12z"
          fill="#e8ecf2"
          opacity="0.85"
        />

        {/* Upward growth arrow */}
        <path
          d="M30 28 L36 22 L36 25.5 L40 25.5 L40 30.5 L36 30.5 L36 34 Z"
          fill="url(#fzGold)"
        />
        <path
          d="M28 34 L36 26"
          stroke="url(#fzGold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {showWordmark && (
        <div>
          <span
            style={{
              display: 'block',
              fontSize: size > 40 ? 22 : 18,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #e8ecf2 0%, #c9a962 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            FinZolve
          </span>
        </div>
      )}
    </div>
  )
}
