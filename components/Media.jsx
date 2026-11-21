// Placeholder artwork until real photography of engineers, sites and
// equipment is supplied. Swap for <img src=... alt=...> when photos arrive.
const art = {
  substation: (
    <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
      <path d="M60 300V120l40-60 40 60v180M60 180h80M70 120h60M100 60v-30" />
      <path d="M220 300V150l30-45 30 45v150M220 200h60" />
      <path d="M0 140h400M0 160c80 20 120 20 200 0s120-20 200 0" strokeDasharray="6 8" />
      <rect x="300" y="220" width="70" height="80" />
      <path d="M310 240h50M310 260h50M310 280h50" />
    </g>
  ),
  engineer: (
    <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
      <circle cx="200" cy="110" r="38" />
      <path d="M160 100c0-30 80-30 80 0M150 300c0-70 22-120 50-120s50 50 50 120" />
      <rect x="250" y="210" width="110" height="80" rx="6" />
      <path d="M265 230h40M265 250h80M265 270h60" />
    </g>
  ),
  panel: (
    <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
      <rect x="80" y="40" width="240" height="250" rx="4" />
      <path d="M80 100h240M200 40v250" />
      {[130, 170, 210, 250].map((y) => (
        <g key={y}>
          <circle cx="120" cy={y} r="8" />
          <circle cx="160" cy={y} r="8" />
          <path d={`M230 ${y}h60`} />
        </g>
      ))}
    </g>
  ),
};

export default function Media({ kind = "substation", caption, tall = false }) {
  return (
    <div className={`media${tall ? " media--tall" : ""}`} role="img" aria-label={caption}>
      <svg className="media-art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {art[kind]}
      </svg>
      <span className="media-caption">Photo placeholder · {caption}</span>
    </div>
  );
}
