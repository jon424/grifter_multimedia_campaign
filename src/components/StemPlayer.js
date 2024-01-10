import { defineCustomElements } from '@stemplayer-js/stemplayer-js';

// first register the custom elements
defineCustomElements();

// create the stems-player web-component
const player = document.createElement('soundws-stem-player');

// append the controls web-component
const controls = document.createElement('soundws-stem-player-controls');
controls.label = 'Stems rule!';
player.appendChild(controls);

// append a stem web-component
const drums = document.createElement('soundws-stem');
drums.label = 'Drums';
drums.src = 'https://your-cdn-com/drums.m3u8';
drums.waveform = 'https://your-cdn-com/drums.json';
player.appendChild(drums);

// append a stem web-component
const vocals = document.createElement('soundws-stem');
vocals.label = 'Vocals';
vocals.src = 'https://your-cdn-com/vocals.m3u8';
vocals.waveform = 'https://your-cdn-com/vocals.json';
player.appendChild(vocals);

// listen to some events
player.addEventListener('timeupdate', () => { /* do something */ });
player.addEventListener('end', () => { /* do something */ });