const montage = document.getElementById('trial-loop');
const toggle = document.getElementById('loop-toggle');
function syncToggle(){const paused=montage.paused;toggle.textContent=paused?'Play':'Pause';toggle.setAttribute('aria-label',paused?'Play trial montage':'Pause trial montage');}
montage.muted=true;
montage.addEventListener('play',syncToggle);
montage.addEventListener('pause',syncToggle);
toggle.addEventListener('click',()=>{if(montage.paused){montage.play().catch(syncToggle);}else{montage.pause();}});
montage.play().catch(syncToggle);

const comparisonTabs=[...document.querySelectorAll('[data-comparison]')];
function selectComparison(tab){document.querySelectorAll('.comparison-panel video').forEach(v=>v.pause());comparisonTabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
comparisonTabs.forEach((t,i)=>{t.addEventListener('click',()=>selectComparison(t));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%comparisonTabs.length;if(e.key==='ArrowLeft')n=(i+comparisonTabs.length-1)%comparisonTabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=comparisonTabs.length-1;if(n!==undefined){e.preventDefault();selectComparison(comparisonTabs[n]);comparisonTabs[n].focus();}});});
