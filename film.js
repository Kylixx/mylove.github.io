/* 35mm-слой: HUD, видоискатель, зерно, автофокус, счётчик загрузки */
(function(){try{
  const $=s=>document.querySelector(s), reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const mk=h=>{const d=document.createElement('div');d.innerHTML=h;return d.firstElementChild};
  document.body.append(
    mk('<div id="grain" aria-hidden="true"></div>'),
    mk('<div id="vf" aria-hidden="true"><i></i><i></i><i></i><i></i></div>'),
    mk('<div id="hud" aria-hidden="true"><span id="hFps">00fps</span><span id="hRes">0x0</span><span id="hTc">00:00:00</span><span id="hPct">0%</span></div>'));
  const fps=$('#hFps'), res=$('#hRes'), tc=$('#hTc'), pct=$('#hPct'), p2=n=>String(n).padStart(2,'0');
  const setRes=()=>{ res.textContent=innerWidth+'x'+innerHeight; };
  const setPct=()=>{ const m=document.documentElement.scrollHeight-innerHeight; pct.textContent=Math.round(m>0?Math.min(1,scrollY/m)*100:0)+'%'; };
  setRes(); setPct();
  addEventListener('resize',setRes,{passive:true});
  let tick=false; addEventListener('scroll',()=>{ if(tick) return; tick=true; requestAnimationFrame(()=>{ setPct(); tick=false; }); },{passive:true});

  // fps + таймкод
  let frames=0, last=performance.now();
  (function loop(t){
    frames++;
    if(t-last>=500){
      if(!document.hidden) fps.textContent=p2(Math.min(99,Math.round(frames*1000/(t-last))))+'fps';
      const s=Math.floor(t/1000); tc.textContent=p2(Math.floor(s/3600))+':'+p2(Math.floor(s/60)%60)+':'+p2(s%60);
      frames=0; last=t;
    }
    requestAnimationFrame(loop);
  })(last);

  // рамка автофокуса по касанию
  if(!reduce) addEventListener('pointerdown',e=>{
    const a=document.createElement('i'); a.className='af'; a.style.left=e.clientX+'px'; a.style.top=e.clientY+'px';
    document.body.appendChild(a); setTimeout(()=>a.remove(),950);
  },{passive:true});

  // счётчик загрузки (CSS сам уберёт экран, даже если JS не успеет)
  const n=$('#ldrN');
  if(n&&!reduce){ const t0=performance.now(), D=1200;
    (function f(t){ const k=Math.min(1,Math.max(0,(t-t0)/D)); n.textContent=Math.round(100*(1-Math.pow(1-k,3)))+'%'; if(k<1) requestAnimationFrame(f); })(t0);
  }
}catch(e){ console.warn('film layer:',e); }})();
