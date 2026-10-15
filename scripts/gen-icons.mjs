// Generates favicon / app-icon SVG variants into /public. Run: node scripts/gen-icons.mjs
import { writeFileSync } from 'node:fs';

const mark = `
  <defs>
    <linearGradient id="g" x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0076FF"/>
      <stop offset="0.45" stop-color="#00D2FF"/>
      <stop offset="1" stop-color="#22E55C"/>
    </linearGradient>
    <linearGradient id="s" x1="12" y1="24" x2="36" y2="36" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#000000" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g transform="translate(10 10) scale(.8333)" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 41 21.6 10.2Q24 5.4 26.4 10.2L41 41" stroke="url(#g)" stroke-width="5.5"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5 35 35 26.5 37.5 24.5 32.5 23 28.5 28.5 26 35 27.5" stroke="url(#g)" stroke-width="4.5"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5" stroke="url(#s)" stroke-width="4.5"/>
  </g>`;

const shape = (kind, fill, isLight = false) => {
  const border = isLight ? ' stroke="rgba(10,17,40,0.12)" stroke-width="1.5"' : '';
  return kind === 'circle'
    ? `<circle cx="30" cy="30" r="29"${border} fill="${fill}"/>`
    : `<path d="M30 0C52 0 60 8 60 30S52 60 30 60 0 52 0 30 8 0 30 0Z"${border} fill="${fill}"/>`;
};

const svg = (kind, fill, isLight = false) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">${shape(kind, fill, isLight)}${mark}</svg>\n`;

const out = {
  'favicon.svg': svg('squircle', '#050814'),
  'icon-squircle-dark.svg': svg('squircle', '#050814'),
  'icon-squircle-light.svg': svg('squircle', '#FFFFFF', true),
  'icon-circle-dark.svg': svg('circle', '#050814'),
  'icon-circle-light.svg': svg('circle', '#FFFFFF', true),
};

for (const [name, content] of Object.entries(out)) {
  writeFileSync(new URL(`../public/${name}`, import.meta.url), content);
}
console.log('Icons written:', Object.keys(out).join(', '));
