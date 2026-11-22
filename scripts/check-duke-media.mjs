import fs from 'node:fs';
import path from 'node:path';

const assets = [
  "duke-thumbnails/clear-instructions.jpg",
  "duke-thumbnails/interview-process.jpg",
  "duke-thumbnails/right-match.jpg",
  "duke-thumbnails/realistic-expectations.jpg",
  "duke-thumbnails/consistent-instructions.jpg",
  "duke-thumbnails/match-real-needs.jpg",
  "duke-thumbnails/licensed-agency.jpg",
  "duke-videos/clear-instructions.mp4",
  "duke-videos/interview-process.mp4",
  "duke-videos/right-match.mp4",
  "duke-videos/realistic-expectations.mp4",
  "duke-videos/consistent-instructions.mp4",
  "duke-videos/match-real-needs.mp4",
  "duke-videos/licensed-agency.mp4"
];

const failures = [];
for (const asset of assets) {
  const file = path.join('assets', asset);
  try {
    const stats = fs.statSync(file);
    if (!stats.isFile() || stats.size < 1024) throw new Error('missing or empty media');
    const fd = fs.openSync(file, 'r');
    const head = Buffer.alloc(12);
    try { fs.readSync(fd, head, 0, head.length, 0); } finally { fs.closeSync(fd); }
    if (asset.endsWith('.mp4') && head.toString('ascii', 4, 8) !== 'ftyp') throw new Error('invalid MP4 header');
    if (asset.endsWith('.jpg') && (head[0] !== 0xff || head[1] !== 0xd8)) throw new Error('invalid JPEG header');
  } catch (error) { failures.push(asset + ': ' + error.message); }
}
if (failures.length) {
  console.error('Readymaid committed legacy media check FAILED:');
  failures.forEach((failure) => console.error('- ' + failure));
  process.exit(1);
}
console.log('Readymaid committed legacy media PASS - ' + assets.length + ' original videos/thumbnails in version-controlled source.');
