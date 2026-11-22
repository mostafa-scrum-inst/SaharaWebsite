// The three design directions. Colours, fonts and shapes are defined as CSS
// tokens in app/globals.css under [data-theme="..."]; this list only drives the
// switcher. To ship a single direction later, set DEFAULT_THEME and set
// SHOW_SWITCHER to false (or remove the other two theme blocks from the CSS).

const GF = "https://fonts.googleapis.com/css2?display=swap&family=";

// Each direction loads only its own two font families (three for B, which
// adds a mono face for model numbers), never all of them.
export const THEMES = [
  {
    id: "desert", letter: "A", name: "Desert Power", swatch: ["#0D2440", "#E9A23B"],
    fonts: GF + "Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600",
  },
  {
    id: "grid", letter: "B", name: "Grid Voltage", swatch: ["#121820", "#1E9BE0"],
    fonts: GF + "Archivo:wght@600;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500",
  },
  {
    id: "nile", letter: "C", name: "Nile Industrial", swatch: ["#0F3B3C", "#C8662A"],
    fonts: GF + "Sora:wght@600;700&family=Source+Sans+3:wght@400;600",
  },
];

export function loadThemeFonts(id) {
  const t = THEMES.find((x) => x.id === id);
  if (!t || document.getElementById("font-" + id)) return;
  const l = document.createElement("link");
  l.id = "font-" + id;
  l.rel = "stylesheet";
  l.href = t.fonts;
  document.head.appendChild(l);
}

export const DEFAULT_THEME = "desert";
export const SHOW_SWITCHER = true;
export const STORAGE_KEY = "sahara-theme";

// Runs before first paint so there is no flash of the wrong theme.
// Priority: ?theme=a|b|c|desert|grid|nile, then saved choice, then default.
export const themeBootScript = `(function(){var t;try{
var ids=${JSON.stringify(THEMES.map((t) => t.id))},letters=${JSON.stringify(
  THEMES.map((t) => t.letter.toLowerCase())
)};
var q=new URLSearchParams(location.search).get('theme');
if(q){q=q.toLowerCase();var i=letters.indexOf(q);if(i>-1)q=ids[i];}
t=(q&&ids.indexOf(q)>-1)?q:localStorage.getItem('${STORAGE_KEY}');
if(q&&ids.indexOf(q)>-1)localStorage.setItem('${STORAGE_KEY}',q);
if(ids.indexOf(t)>-1)document.documentElement.setAttribute('data-theme',t);
}catch(e){}
var fonts=${JSON.stringify(Object.fromEntries(THEMES.map((t) => [t.id, t.fonts])))};
var id=document.documentElement.getAttribute('data-theme')||'${DEFAULT_THEME}';
document.write('<link id="font-'+id+'" rel="stylesheet" href="'+fonts[id]+'">');
})();`;
