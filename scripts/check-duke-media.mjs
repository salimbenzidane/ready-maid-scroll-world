const base = 'https://universal.readymaid.my/media/';
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
  try {
    const response = await fetch(base + asset, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
    if (!response.ok) failures.push(asset + ': HTTP ' + response.status);
  } catch (error) {
    failures.push(asset + ': ' + error.message);
  }
}
if (failures.length) {
  console.error('Meet DUKE remote media check FAILED:');
  failures.forEach((failure) => console.error('- ' + failure));
  process.exit(1);
}
console.log('Meet DUKE media check PASS - ' + assets.length + ' permanent Readymaid media assets returned success.');
