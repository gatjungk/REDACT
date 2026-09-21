const montage = document.getElementById('trial-loop');
const toggle = document.getElementById('loop-toggle');
function syncToggle(){const paused=montage.paused;toggle.textContent=paused?'Play':'Pause';toggle.setAttribute('aria-label',paused?'Play trial montage':'Pause trial montage');}
montage.muted=true;
montage.addEventListener('play',syncToggle);
montage.addEventListener('pause',syncToggle);
toggle.addEventListener('click',()=>{if(montage.paused){montage.play().catch(syncToggle);}else{montage.pause();}});
montage.play().catch(syncToggle);
