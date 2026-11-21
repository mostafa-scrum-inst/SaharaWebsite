// The three design directions. Colours, fonts and shapes are defined as CSS
// tokens in app/globals.css under [data-theme="..."]; this list only drives the
// switcher. To ship a single direction later, set DEFAULT_THEME and set
// SHOW_SWITCHER to false (or remove the other two theme blocks from the CSS).

export const THEMES = [
  { id: "desert", letter: "A", name: "Desert Power", swatch: ["#0D2440", "#E9A23B"] },
  { id: "grid", letter: "B", name: "Grid Voltage", swatch: ["#121820", "#1E9BE0"] },
  { id: "nile", letter: "C", name: "Nile Industrial", swatch: ["#0F3B3C", "#C8662A"] },
];

export const DEFAULT_THEME = "desert";
export const SHOW_SWITCHER = true;
export const STORAGE_KEY = "sahara-theme";

// Runs before first paint so there is no flash of the wrong theme.
// Priority: ?theme=a|b|c|desert|grid|nile, then saved choice, then default.
export const themeBootScript = `(function(){try{
var ids=${JSON.stringify(THEMES.map((t) => t.id))},letters=${JSON.stringify(
  THEMES.map((t) => t.letter.toLowerCase())
)};
var q=new URLSearchParams(location.search).get('theme');
if(q){q=q.toLowerCase();var i=letters.indexOf(q);if(i>-1)q=ids[i];}
var t=(q&&ids.indexOf(q)>-1)?q:localStorage.getItem('${STORAGE_KEY}');
if(q&&ids.indexOf(q)>-1)localStorage.setItem('${STORAGE_KEY}',q);
if(ids.indexOf(t)>-1)document.documentElement.setAttribute('data-theme',t);
}catch(e){}})();`;
