/* =====================================================
   ✎ ЗДЕСЬ ВСЁ, ЧТО НУЖНО ПОМЕНЯТЬ
   ===================================================== */
const NAME  = 'любимая';        // например: 'Анечка' → «Для тебя / Анечка»
const SINCE = '2024-01-01';     // дата, когда вы вместе (ГГГГ-ММ-ДД)

// Фото лежат в папке photos рядом с index.html
const PHOTOS = [
  {src:'photos/1.jpg', cap:'Тот самый день'},
  {src:'photos/2.jpg', cap:'Ты смеёшься — я счастлив'},
  {src:'photos/3.jpg', cap:'Моё любимое место — рядом с тобой'},
  {src:'photos/4.jpg', cap:'Просто мы'},
  {src:'photos/5.jpg', cap:'Наш вечер'},
  {src:'photos/6.jpg', cap:'Навсегда в кадре'},
];

const REASONS = [
  'За твою улыбку, от которой у меня сбивается всё внутри',
  'За то, как ты смеёшься над моими шутками, даже плохими',
  'За то, что рядом с тобой я становлюсь лучше',
  'За твои глаза, в которых можно потеряться',
  'За каждое «доброе утро» и «спокойной ночи»',
  'За то, что ты — это ты',
];

const LETTER = `Любимая моя,

я не умею говорить так красиво, как поэты, но умею чувствовать.

Рядом с тобой даже обычный день становится особенным. Спасибо тебе за тепло, за смех, за то, что ты есть.

Я люблю тебя. Сегодня, завтра и всегда.

Твой ♥`;

// Звёздочками отмечены слова, которые подсветятся розовым
const STATEMENT = 'Здесь слова, которые я бы хотел сказать *красивее*, чем умею. Поэтому часть из них мне помогли найти *поэты* разных времён и стран.';

/* Стихи. Теперь их четыре, и между ними другие страницы.
   Есенин и Фет — подлинные тексты (общественное достояние).
   Бёрнс — вольный перевод для этого сайта (известные переводы Маршака ещё охраняются авторским правом).
   «Забыть тебя?» — четверостишие, которое в интернете чаще всего подписывают именем Есенина,
   но в его собраниях сочинений я его не нашёл, поэтому честно пишу «приписывают». */
const POEMS = [
  {author:'С. А. Есенин', title:'Дорогая, сядем рядом', stanzas:[
    ['Дорогая, сядем рядом,','Поглядим в глаза друг другу.','Я хочу под кротким взглядом','Слушать чувственную вьюгу.']
  ]},

  {author:'А. А. Фет', title:'Шёпот, робкое дыханье', stanzas:[
    ['Шёпот, робкое дыханье,','Трели соловья,','Серебро и колыханье','Сонного ручья,'],
    ['Свет ночной, ночные тени,','Тени без конца,','Ряд волшебных изменений','Милого лица,'],
    ['В дымных тучках пурпур розы,','Отблеск янтаря,','И лобзания, и слёзы,','И заря, заря!..']
  ]},

  {author:'Р. Бёрнс', note:'вольный перевод для этого сайта', title:'Моя любовь — как алая роза', stanzas:[
    ['О, моя любовь — как алая роза,','что в июне только расцвела;','о, моя любовь — как мелодия,','что звучит нежно и в лад.'],
    ['Ты так прекрасна, милая моя,','и так глубоко я люблю,','что буду любить тебя, дорогая,','пока не высохнут все моря.'],
    ['Пока не высохнут моря, любимая,','и скалы не растают от солнца,','я буду любить тебя, дорогая,','пока течёт песок моей жизни.']
  ]},

  {author:'Приписывается С. А. Есенину', title:'Забыть тебя?', stanzas:[
    ['Забыть тебя? А с кем я буду','Печали, радости делить?','Пусть лучше все меня забудут,','Чем я смогу тебя забыть.']
  ]},
];

/* «Открой, когда…» — конверты. Впиши свои слова: сколько конвертов, столько и страниц. */
const ENVELOPES = [
  {when:'тебе грустно', text:'Представь, что я рядом и крепко тебя обнимаю. Плохие дни проходят, а я остаюсь. Ты справишься, ты всегда справляешься, но если не хочешь справляться одна, просто позови меня.'},
  {when:'ты скучаешь по мне', text:'Я тоже. Прямо сейчас я, скорее всего, думаю о тебе. Закрой глаза, вспомни, как мы смеялись в тот самый день, и знай: каждая минута до встречи стоит того.'},
  {when:'не получается уснуть', text:'Всё, что тревожит, подождёт до утра. А сейчас просто вдохни поглубже и думай о чём-нибудь тёплом. Например, о том, что кто-то на другом конце города тоже думает о тебе. Спокойной ночи, любимая.'},
  {when:'ты в себе сомневаешься', text:'Ты красивая, умная и добрая, и это не комплименты, а факты, которые я наблюдаю каждый день. Если когда-нибудь забудешь, перечитай это письмо.'},
  {when:'нужно просто улыбнуться', text:'Улыбнись. Вот так. Именно ради этой улыбки у меня сбивается всё внутри. Спасибо, что ты есть.'},
];

const JAPAN = [
  {ja:'月が綺麗ですね', ro:'Tsuki ga kirei desu ne', ru:'«Какая сегодня красивая луна».', note:'Так в Японии, по легенде, признаются в любви, не произнося этих слов.'},
  {ja:'君に出会えて、よかった', ro:'Kimi ni deaete, yokatta', ru:'«Как хорошо, что я встретил тебя».', note:''},
  {ja:'運命の赤い糸', ro:'Unmei no akai ito', ru:'«Красная нить судьбы».', note:'Невидимая нить, которая связывает людей, предназначенных друг другу. Такая же нить тянется сбоку по этой странице.'},
  {ja:'一期一会', ro:'Ichigo ichie', ru:'«Одна жизнь — одна встреча».', note:'Каждая встреча неповторима, и ты — самая драгоценная из них.'},
  {ja:'あなたと見る景色が、いちばん綺麗', ro:'Anata to miru keshiki ga, ichiban kirei', ru:'«Пейзаж, который я вижу рядом с тобой, — самый красивый».', note:''},
  {ja:'ずっと、そばにいてね', ro:'Zutto, soba ni ite ne', ru:'«Будь рядом всегда».', note:''},
];

const MARQUEE = ['я люблю тебя','I love you','愛してる','Je t’aime','Ti amo','Te quiero','Ich liebe dich'];

/* =====================================================
   Дальше всё работает само
   ===================================================== */
const $  = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => Array.from(r.querySelectorAll(s));
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
const rnd = (a,b)=>a+Math.random()*(b-a);
const pad = n => String(n).padStart(2,'0');
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const haptic = p => { try{ if(!finePointer && navigator.vibrate) navigator.vibrate(p); }catch(e){} };
let vw = innerWidth, vh = innerHeight;

/* ---------- Сборка страницы ---------- */
const HEART_D = 'M100 170C20 110 0 70 0 45C0 20 20 0 50 0C75 0 92 15 100 30C108 15 125 0 150 0C180 0 200 20 200 45C200 70 180 110 100 170Z';
const heartArt = `<svg class="heart-art" viewBox="0 0 200 180" aria-hidden="true">
  <defs>
    <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f08aa8"/><stop offset="1" stop-color="#e6c79c"/></linearGradient>
    <radialGradient id="hf" cx=".5" cy=".4" r=".62"><stop offset="0" stop-color="#f08aa8" stop-opacity=".4"/><stop offset="1" stop-color="#d9468a" stop-opacity="0"/></radialGradient>
  </defs>
  <g>
    <path class="fillh" d="${HEART_D}"/>
    ${[1,.84,.68,.52,.36].map((s,i)=>`<path pathLength="1" style="--k:${i}" transform="translate(100 85) scale(${s}) translate(-100 -85)" d="${HEART_D}"/>`).join('')}
  </g></svg>`;

const splitWordsHtml = (text,cls='') => text.split(' ').map((w,i)=>`<span class="w"><span class="wi" style="--i:${i}">${w}</span></span>`).join(' ');

const poemSection = (p,i) => {
  const variant = ['center','tint','flip','center'][i] || '';
  let n = 0;
  return `<section class="sec poem ${variant}" data-tag="Стихи"><div class="in-w"><div class="poem-grid">
    <div class="p-l">
      <div class="qm" aria-hidden="true">“</div>
      <div class="lab rv">${p.author}</div>
      <h2 class="ttl split">${splitWordsHtml(p.title)}</h2>
    </div>
    <div class="p-r">${p.stanzas.map(st=>`<div class="st">${st.map(l=>`<div class="ln rv" style="--d:${(n++%4)*80}">${l}</div>`).join('')}</div>`).join('')}
      ${p.note?`<div class="note rv">${p.note}</div>`:''}</div>
  </div></div></section>`;
};

const stmtWords = STATEMENT.split(' ').map(w=>{
  const hl = w.startsWith('*'); const t = w.replace(/\*/g,'');
  return `<span class="sw${hl?' hl':''}">${t}</span>`;
}).join(' ');

const marqSet = MARQUEE.map(t=>`<span>${t}<b>♥</b></span>`).join('');

$('#app').innerHTML = `
<section id="hero" data-tag=""><div class="orb a"></div><div class="orb b"></div><div class="orb c"></div>
  <div class="hero-grid">
    <div class="hero-in">
      <div class="eyebrow rv">Небольшое путешествие · ${new Date().getFullYear()}</div>
      <h1 class="split"><span class="l1">${splitWordsHtml('Для тебя')}</span><span class="l2">${splitWordsHtml(esc(NAME))}</span></h1>
      <p class="hero-p rv" style="--d:500">Я собрал это для одного человека. Листай вниз: каждая страница — маленький привет от меня.</p>
      <a class="btn rv" style="--d:700" href="#manifest" data-mag><span>Начать</span><em style="font-style:normal">↓</em></a>
    </div>
    <div class="hero-art">${heartArt}</div>
  </div>
  <div class="scroll-hint" aria-hidden="true"><span>листай</span><i></i></div>
</section>

<section class="sec statement" id="manifest" data-tag="Для тебя"><div class="in-w"><p id="stmt">${stmtWords}</p></div></section>

<div class="marq" aria-hidden="true"><div class="marq-t">${marqSet}${marqSet}${marqSet}${marqSet}</div></div>

${POEMS[0]?poemSection(POEMS[0],0):''}

<section class="gal" id="gal" data-tag="Мы"><div class="gal-pin">
  <div class="gal-head"><h2 class="split">${splitWordsHtml('Мы с тобой')}</h2><div class="cnt-n" id="galN">01 / ${pad(PHOTOS.length)}</div></div>
  <div class="gal-track" id="galTrack">${PHOTOS.map((p,i)=>`
    <figure class="card" data-i="${i}"><div class="ph" role="button" tabindex="0" aria-label="Открыть фото: ${esc(p.cap)}" style="width:calc(var(--ch)*.75)"><span class="heart">♥</span></div>
    <figcaption><b>${pad(i+1)}</b><span>${p.cap}</span></figcaption></figure>`).join('')}</div>
  <div class="gal-bar"><i></i></div>
</div></section>

${POEMS[1]?poemSection(POEMS[1],1):''}

<section class="jap" id="jap" data-tag="Япония" style="--n:${JAPAN.length}"><div class="jap-pin"><div class="in-w">
  <div class="lab">Слова из Японии</div>
  ${JAPAN.map(j=>`<div class="jp"><div class="ja" lang="ja">${j.ja}</div><div class="r"><div class="ro">${j.ro}</div><div class="ru">${j.ru}</div>${j.note?`<div class="note">${j.note}</div>`:''}</div></div>`).join('')}
  <div class="jap-bar"><span id="japN">01</span><div class="ln"><i></i></div><span>${pad(JAPAN.length)}</span></div>
</div></div></section>

<section class="sec cnt-sec" id="cnt" data-tag="Вместе"><div class="in-w">
  <div class="lab rv">Время рядом с тобой</div>
  <p class="cnt-t rv">Мы вместе уже</p>
  <div class="cnt-num rv" id="days" style="--d:100">0</div>
  <p class="cnt-word rv" id="daysWord" style="--d:200">дней</p>
  <div class="cnt-live rv" style="--d:300"><div><b id="cH">0</b><small>часов</small></div><div><b id="cM">0</b><small>минут</small></div><div><b id="cS">0</b><small>секунд</small></div></div>
  <p class="cnt-detail rv" id="detail" style="--d:400"></p>
</div></section>

${POEMS[2]?poemSection(POEMS[2],2):''}

<section class="sec rs" id="rs" data-tag="Причины"><div class="in-w">
  <div class="lab rv">Причины</div>
  <h2 class="big split">${splitWordsHtml('За что я тебя')} <em>${splitWordsHtml('люблю')}</em></h2>
  <p class="sub rv">Коснись карточки, чтобы её перевернуть.</p>
  <div class="rs-grid">${REASONS.map((r,i)=>`
    <button class="rc rv" style="--d:${(i%3)*100}" aria-pressed="false" aria-label="Причина ${i+1}: открыть">
      <span class="fl"><span class="fa"><b>${pad(i+1)}</b><span>причина <i>♥</i></span></span><span class="fb"><p>${r}</p></span></span>
    </button>`).join('')}</div>
</div></section>

<section class="sec" id="sky" data-tag="Небо"><div class="in-w">
  <div class="lab rv">Наше небо</div>
  <h2 class="big split">${splitWordsHtml('Зажги')} <em>${splitWordsHtml('звезду')}</em></h2>
  <p class="sub rv">Коснись неба, и появится звезда. Звёзды соединятся в созвездие, которое никто, кроме нас, не прочтёт.</p>
  <div class="sky-box rv" id="skyBox"><canvas id="skyc" aria-label="Звёздное небо: касайтесь, чтобы зажигать звёзды"></canvas><div class="sky-hint">коснись неба</div></div>
</div></section>

${POEMS[3]?poemSection(POEMS[3],3):''}

<section class="sec env" id="env" data-tag="Конверты"><div class="in-w">
  <div class="lab rv">Открой, когда…</div>
  <h2 class="big split">${splitWordsHtml('Письма на')} <em>${splitWordsHtml('каждый случай')}</em></h2>
  <p class="sub rv">Я оставил для тебя несколько конвертов. Открывай тот, который подходит под настроение.</p>
  <div class="env-grid">${ENVELOPES.map((e,i)=>`
    <button class="envl rv" style="--d:${(i%3)*100}" data-i="${i}" aria-label="Открыть конверт: ${esc(e.when)}">
      <span class="eb"><span class="ef"></span><span class="es"><svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21S2 14.6 2 7.8C2 4.6 4.4 2.4 7.2 2.4c2 0 3.8 1.1 4.8 2.8 1-1.7 2.8-2.8 4.8-2.8C19.6 2.4 22 4.6 22 7.8 22 14.6 12 21 12 21Z"/></svg></span></span>
      <span class="et"><small>открой, когда</small><b>${esc(e.when)}</b></span>
    </button>`).join('')}</div>
</div></section>

<section class="sec letter-sec" id="letter" data-tag="Письмо" data-light="1"><div class="in-w">
  <div class="lab rv">Письмо</div>
  <div class="paper" id="paper" aria-live="polite"></div>
  <div class="seal-wrap rv">
    <button class="seal" id="heart" aria-label="Нажми, если тоже" data-mag><svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21S2 14.6 2 7.8C2 4.6 4.4 2.4 7.2 2.4c2 0 3.8 1.1 4.8 2.8 1-1.7 2.8-2.8 4.8-2.8C19.6 2.4 22 4.6 22 7.8 22 14.6 12 21 12 21Z"/></svg></button>
    <div class="seal-txt" id="heartTxt">Нажми, если тоже</div>
  </div>
</div></section>
<footer>сделано с любовью, только для тебя <b>♥</b></footer>`;

/* ---------- Появление при прокрутке ---------- */
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('.rv,.split').forEach(el=>io.observe(el));

/* ---------- Лайтбокс ---------- */
const lightbox = $('#lightbox');
const lbOpen = ()=>lightbox.classList.contains('on');
function openLightbox(src,cap){
  lightbox.innerHTML = src ? `<img src="${src}" alt="${esc(cap)}">` : `<span class="heart">♥</span>`;
  lightbox.classList.add('on');
}
lightbox.addEventListener('click',()=>lightbox.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') lightbox.classList.remove('on'); });

/* ---------- Конверты ---------- */
const envm = document.createElement('div');
envm.id = 'envm'; envm.setAttribute('role','dialog'); envm.setAttribute('aria-label','Письмо');
document.body.appendChild(envm);
const envOpen = ()=>envm.classList.contains('on');
function openEnv(i){
  const e = ENVELOPES[i];
  envm.innerHTML = `<div class="ep"><small>открой, когда</small><h3>${esc(e.when)}</h3><p>${esc(e.text)}</p><span class="ec">♥</span><em>нажми, чтобы закрыть</em></div>`;
  envm.classList.add('on'); haptic(8);
}
$$('.envl').forEach(b=>b.addEventListener('click',()=>openEnv(+b.dataset.i)));
envm.addEventListener('click',()=>envm.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') envm.classList.remove('on'); });

/* ---------- Галерея ---------- */
const gal = $('#gal'), galTrack = $('#galTrack'), galBar = $('.gal-bar i'), galN = $('#galN');
let galH = 0;
const cards = $$('.card');
cards.forEach((c,i)=>{
  const p = PHOTOS[i], ph = $('.ph',c);
  const img = new Image(); img.alt = p.cap; img.decoding = 'async';
  img.onload = ()=>{
    ph.innerHTML = ''; ph.appendChild(img); ph.style.width = '';
    c.classList.add(img.naturalWidth/img.naturalHeight < .85 ? 'arch' : 'sq');
    setSizes(); update();
  };
  img.src = p.src;
  const open = ()=>openLightbox(img.complete && img.naturalWidth ? p.src : null, p.cap);
  ph.addEventListener('click',open);
  ph.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
});
function setSizes(){
  if(reduce){ gal.classList.add('static'); $('#jap').classList.add('static'); return; }
  const trackW = galTrack.offsetWidth;
  galH = Math.max(0, trackW - vw) + vh;
  gal.style.height = galH + 'px';
}

/* ---------- Манифест, японские фразы ---------- */
const sw = $$('#stmt .sw'), stmtEl = $('#stmt');
const jps = $$('.jp'), jap = $('#jap'), japBar = $('.jap-bar .ln i'), japN = $('#japN');
let japIdx = -1;

/* ---------- Нить и подпись в шапке ---------- */
const threadEl = $('#thread i'), tagEl = $('#tag');
const tagSecs = $$('[data-tag]');
let lastTag = null, lastY = scrollY, scrollVel = 0;

let ticking = false;
function update(){
  ticking = false;
  const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - vh);
  scrollVel = y - lastY; lastY = y;
  threadEl.parentNode.style.setProperty('--p', clamp(y/max,0,1).toFixed(4));

  // слова манифеста зажигаются по мере прокрутки
  const sr = stmtEl.getBoundingClientRect();
  if(sr.top < vh && sr.bottom > 0){
    const t = reduce ? 1 : clamp((vh*.8 - sr.top)/(sr.height*.9 + vh*.1),0,1);
    const n = Math.round(t*sw.length);
    sw.forEach((w,i)=>w.classList.toggle('lit', i<n));
  }

  if(!reduce){
    // галерея: горизонтальное движение при вертикальной прокрутке
    const gr = gal.getBoundingClientRect();
    if(gr.bottom > -50 && gr.top < vh+50){
      const range = Math.max(1, galH - vh);
      const gp = clamp(-gr.top/range,0,1);
      const travel = Math.max(0, galTrack.offsetWidth - vw);
      galTrack.style.transform = `translate3d(${(-gp*travel).toFixed(1)}px,0,0)`;
      galBar.parentNode.style.setProperty('--gp', gp.toFixed(4));
      galN.textContent = pad(Math.round(gp*(cards.length-1))+1) + ' / ' + pad(cards.length);
      cards.forEach(c=>{
        if(c.classList.contains('sq')) return;
        const r = c.getBoundingClientRect(), off = (r.left + r.width/2 - vw/2)/vw;
        c.style.setProperty('--px', clamp(-off*5,-4.5,4.5).toFixed(2)+'%');
      });
    }

    // японские фразы: по одной на экран
    const jr = jap.getBoundingClientRect();
    if(jr.bottom > 0 && jr.top < vh){
      const range = Math.max(1, jr.height - vh);
      const jp = clamp(-jr.top/range,0,1);
      const idx = clamp(Math.floor(jp*jps.length), 0, jps.length-1);
      jap.style.setProperty('--jprog', jp.toFixed(4));
      if(idx!==japIdx){
        japIdx = idx; japN.textContent = pad(idx+1);
        jps.forEach((j,i)=>{ j.classList.toggle('on', i===idx); j.classList.toggle('past', i<idx); });
      }
    }
  }

  // что сейчас на экране
  let cur = null;
  for(const s of tagSecs){ const r = s.getBoundingClientRect(); if(r.top <= vh*.5 && r.bottom > vh*.5){ cur = s; break; } }
  if(cur !== lastTag){
    lastTag = cur;
    tagEl.textContent = cur ? cur.dataset.tag : '';
    document.body.classList.toggle('light', !!(cur && cur.dataset.light));
  }
}
const onScroll = ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } };
addEventListener('scroll',onScroll,{passive:true});

/* ---------- Лепестки ---------- */
const pc = $('#petals'), pg = pc.getContext('2d');
const PCOL = ['240,138,168','240,138,168','217,70,138','230,199,156','255,226,232'];
let petals = [], mpx = -9999, mpy = -9999;
function newPetal(init){
  const z = rnd(.45,1.3);
  return {x:rnd(0,vw), y:init?rnd(0,vh):rnd(-80,-20), z, s:rnd(6,13)*z, vy:rnd(.25,.7)*z, sw:rnd(0,6.28), ss:rnd(.005,.013),
    rot:rnd(0,6.28), vr:rnd(-.02,.02), fl:rnd(0,6.28), fv:rnd(.01,.03), col:PCOL[Math.floor(rnd(0,PCOL.length))], a:rnd(.14,.36)};
}
function initPetals(){ petals = Array.from({length: vw<700 ? 14 : 28},()=>newPetal(true)); }
function drawPetal(c,s){
  c.beginPath(); c.moveTo(0,-s);
  c.bezierCurveTo(s*.95,-s*.55,s*.85,s*.55,0,s);
  c.bezierCurveTo(-s*.85,s*.55,-s*.95,-s*.55,0,-s);
  c.fill();
}
function petalFrame(){
  pg.clearRect(0,0,vw,vh);
  if(!document.hidden){
    for(const p of petals){
      p.sw += p.ss; p.rot += p.vr; p.fl += p.fv;
      p.y += p.vy*1.2 + scrollVel*.28*p.z;
      p.x += Math.sin(p.sw)*.45*p.z;
      const dx = p.x-mpx, dy = p.y-mpy, d2 = dx*dx+dy*dy;
      if(d2 < 14400){ const d = Math.sqrt(d2)||1, f = (1-d/120)*2.2; p.x += dx/d*f; p.y += dy/d*f; }
      if(p.y > vh+40){ p.y = rnd(-80,-20); p.x = rnd(0,vw); }
      else if(p.y < -90){ p.y = vh+30; p.x = rnd(0,vw); }
      if(p.x < -40) p.x = vw+30; else if(p.x > vw+40) p.x = -30;
      pg.save(); pg.translate(p.x,p.y); pg.rotate(p.rot); pg.scale(Math.abs(Math.cos(p.fl))*.8+.25, 1);
      pg.fillStyle = `rgba(${p.col},${p.a})`; drawPetal(pg,p.s); pg.restore();
    }
  }
  scrollVel *= .9;
  requestAnimationFrame(petalFrame);
}

/* ---------- Размеры ---------- */
const bc = $('#burst'), bx = bc.getContext('2d');
function resize(){
  vw = innerWidth; vh = innerHeight;
  const d = Math.min(devicePixelRatio||1,2);
  [[pc,pg],[bc,bx]].forEach(([c,g])=>{ c.width = vw*d; c.height = vh*d; g.setTransform(d,0,0,d,0,0); });
  const was = petals.length; if(!was || (vw<700) !== (was<20)) initPetals();
  setSizes(); sizeSky(); update();
}
let rzT; addEventListener('resize',()=>{ clearTimeout(rzT); rzT = setTimeout(resize,120); });

/* ---------- Небо: звёзды-искры ---------- */
const skc = $('#skyc'), sx = skc.getContext('2d'), skyBox = $('#skyBox');
let SW=0, SH=0, sstars=[], sbg=[], shoot=null, skyVis=false;
function sizeSky(){
  SW = skc.offsetWidth; SH = skc.offsetHeight; if(!SW) return;
  const d = Math.min(devicePixelRatio||1,2);
  skc.width = SW*d; skc.height = SH*d; sx.setTransform(d,0,0,d,0,0);
  sbg = Array.from({length:90},()=>({x:rnd(0,SW),y:rnd(0,SH),r:rnd(.3,1.3),p:rnd(0,6.28)}));
}
function sparkle(c,x,y,R){
  c.beginPath(); c.moveTo(x,y-R);
  c.quadraticCurveTo(x,y,x+R,y); c.quadraticCurveTo(x,y,x,y+R);
  c.quadraticCurveTo(x,y,x-R,y); c.quadraticCurveTo(x,y,x,y-R); c.closePath();
}
const SCOL = ['255,240,224','230,199,156','240,138,168'];
skc.addEventListener('pointerdown',e=>{
  const r = skc.getBoundingClientRect();
  sstars.push({x:(e.clientX-r.left)*(SW/r.width||1), y:(e.clientY-r.top)*(SH/r.height||1), born:performance.now(), p:rnd(0,6.28), col:sstars.length%3});
  if(sstars.length>14) sstars.shift();
  skyBox.classList.add('used'); haptic(6);
  if(reduce) drawSky(performance.now());
});
setInterval(()=>{ if(!reduce && !shoot && SW && skyVis) shoot = {x:rnd(SW*.4,SW*.95), y:rnd(0,SH*.3), t:0}; },4600);
function drawSky(now){
  if(!SW) return;
  sx.clearRect(0,0,SW,SH);
  sbg.forEach(s=>{ const a = .25+.35*Math.sin(now/900+s.p); sx.fillStyle = `rgba(255,240,224,${Math.max(.06,a)})`; sx.beginPath(); sx.arc(s.x,s.y,s.r,0,6.28); sx.fill(); });
  if(sstars.length>1){
    sx.strokeStyle = 'rgba(230,199,156,.55)'; sx.lineWidth = 1; sx.lineJoin = 'round'; sx.beginPath();
    sstars.forEach((s,i)=>{ i?sx.lineTo(s.x,s.y):sx.moveTo(s.x,s.y); }); sx.stroke();
  }
  sstars.forEach(s=>{
    const k = Math.min(1,(now-s.born)/700), R = 4+15*(1-Math.pow(1-k,3)) + Math.sin(now/500+s.p)*1.2;
    const col = SCOL[s.col];
    const gr = sx.createRadialGradient(s.x,s.y,0,s.x,s.y,R*2.6);
    gr.addColorStop(0,`rgba(${col},.45)`); gr.addColorStop(1,`rgba(${col},0)`);
    sx.fillStyle = gr; sx.beginPath(); sx.arc(s.x,s.y,R*2.6,0,6.28); sx.fill();
    sx.fillStyle = `rgb(${col})`; sparkle(sx,s.x,s.y,R); sx.fill();
  });
  if(shoot){
    shoot.t += .018; const x = shoot.x-shoot.t*SW*.6, y = shoot.y+shoot.t*SH*.5;
    const gr = sx.createLinearGradient(x,y,x+90,y-70); gr.addColorStop(0,'rgba(255,240,224,.95)'); gr.addColorStop(1,'rgba(255,240,224,0)');
    sx.strokeStyle = gr; sx.lineWidth = 1.6; sx.beginPath(); sx.moveTo(x,y); sx.lineTo(x+90,y-70); sx.stroke();
    if(shoot.t>1) shoot = null;
  }
}
new IntersectionObserver(es=>es.forEach(e=>{ skyVis = e.isIntersecting; if(skyVis) sizeSky(); }),{threshold:0}).observe(skyBox);
function skyLoop(now){ if(skyVis) drawSky(now); requestAnimationFrame(skyLoop); }

/* ---------- Причины ---------- */
$$('.rc').forEach(c=>c.addEventListener('click',()=>{
  const o = c.classList.toggle('open'); c.setAttribute('aria-pressed',o); haptic(8);
}));

/* ---------- Счётчик ---------- */
function plural(n,a,b,c){ n=Math.abs(n)%100; const m=n%10; if(n>10&&n<20) return c; if(m>1&&m<5) return b; if(m===1) return a; return c; }
const sinceMs = new Date(SINCE+'T00:00:00').getTime();
let counted = false, liveOn = false;
function tickLive(){
  const ms = Math.max(0, Date.now()-sinceMs);
  $('#cH').textContent = Math.floor(ms/36e5)%24;
  $('#cM').textContent = pad(Math.floor(ms/6e4)%60);
  $('#cS').textContent = pad(Math.floor(ms/1e3)%60);
}
function startCount(){
  if(counted) return; counted = true;
  const ms = Math.max(0, Date.now()-sinceMs), days = Math.floor(ms/864e5), hours = Math.floor(ms/36e5);
  const el = $('#days');
  $('#daysWord').textContent = plural(days,'день','дня','дней');
  $('#detail').textContent = `это ${hours.toLocaleString('ru-RU')} ${plural(hours,'час','часа','часов')}, и я ни о чём не жалею`;
  tickLive(); setInterval(tickLive,1000);
  if(reduce){ el.textContent = days; return; }
  const t0 = performance.now(), dur = 2400;
  (function tick(){ const k = Math.min(1,(performance.now()-t0)/dur); el.textContent = Math.round(days*(1-Math.pow(1-k,4))); if(k<1) requestAnimationFrame(tick); })();
}
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ startCount(); o.disconnect(); } }),{threshold:.3}).observe($('#cnt'));

/* ---------- Письмо ---------- */
const paper = $('#paper');
let typed = false, skipType = false;
function renderLetter(n,caret){
  paper.innerHTML = `<span>${esc(LETTER.slice(0,n))}</span>${caret?'<span class="caret"></span>':''}<span style="visibility:hidden">${esc(LETTER.slice(n))}</span>`;
}
function typeLetter(){
  if(typed) return; typed = true;
  if(reduce){ paper.textContent = LETTER; return; }
  let i = 0;
  (function step(){
    if(skipType){ renderLetter(LETTER.length,false); return; }
    renderLetter(++i, i<LETTER.length);
    if(i<LETTER.length){ const ch = LETTER[i-1]; setTimeout(step, ch==='\n'?280:(/[.,!]/.test(ch)?180:34)); }
  })();
}
paper.addEventListener('click',()=>{ skipType = true; });
renderLetter(0,false);
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ typeLetter(); o.disconnect(); } }),{threshold:.35}).observe(paper);

/* ---------- Конфетти из сердец и лепестков ---------- */
let bparts = [], burstOn = false;
function heartShape(c,x,y,s){
  c.beginPath(); c.moveTo(x,y+s*.9);
  c.bezierCurveTo(x-s*1.5,y-s*.2,x-s*.7,y-s*1.2,x,y-s*.4);
  c.bezierCurveTo(x+s*.7,y-s*1.2,x+s*1.5,y-s*.2,x,y+s*.9); c.fill();
}
const BCOL = ['240,138,168','217,70,138','230,199,156','255,240,224'];
function spawnBurst(cx,cy){
  for(let i=0;i<130;i++){
    const a = rnd(0,6.283), s = rnd(3,13);
    bparts.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s-6,rot:rnd(0,6.28),vr:rnd(-.2,.2),r:rnd(5,12),
      col:BCOL[i%4],life:rnd(90,160),heart:i%3===0});
  }
  if(!burstOn){ burstOn = true; requestAnimationFrame(burstFrame); }
}
function burstFrame(){
  bx.clearRect(0,0,vw,vh);
  bparts = bparts.filter(p=>p.life>0);
  for(const p of bparts){
    p.vy += .18; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
    bx.globalAlpha = clamp(p.life/40,0,1); bx.fillStyle = `rgb(${p.col})`;
    bx.save(); bx.translate(p.x,p.y); bx.rotate(p.rot);
    if(p.heart) heartShape(bx,0,0,p.r*.7); else drawPetal(bx,p.r);
    bx.restore();
  }
  bx.globalAlpha = 1;
  if(bparts.length) requestAnimationFrame(burstFrame); else { burstOn = false; bx.clearRect(0,0,vw,vh); }
}
$('#heart').addEventListener('click',e=>{
  const r = e.currentTarget.getBoundingClientRect();
  if(!reduce) spawnBurst(r.left+r.width/2, r.top+r.height/2);
  haptic([12,50,12]);
  $('#heartTxt').textContent = 'Я знал ♥';
});

/* ---------- Курсор: свечение и «магнитные» кнопки (только на компьютере) ---------- */
const glow = $('#glow'), mags = $$('[data-mag]');
addEventListener('pointermove',e=>{
  mpx = e.clientX; mpy = e.clientY;
  if(e.pointerType!=='mouse' || reduce) return;
  glow.classList.add('on'); glow.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
  for(const el of mags){
    const r = el.getBoundingClientRect();
    if(!r.width || r.bottom<0 || r.top>vh) continue;
    const dx = e.clientX-(r.left+r.width/2), dy = e.clientY-(r.top+r.height/2);
    el.style.translate = Math.hypot(dx,dy) < Math.max(r.width,r.height)*.9+30 ? `${(dx*.25).toFixed(1)}px ${(dy*.25).toFixed(1)}px` : '';
  }
});
addEventListener('pointerleave',()=>{ mpx = mpy = -9999; });
addEventListener('touchend',()=>{ mpx = mpy = -9999; },{passive:true});
document.addEventListener('mouseleave',()=>{ mpx = mpy = -9999; glow.classList.remove('on'); });

/* ---------- Запуск ---------- */
resize();
if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>{ setSizes(); update(); });
addEventListener('load',()=>{ setSizes(); update(); });
if(!reduce){ requestAnimationFrame(petalFrame); requestAnimationFrame(skyLoop); }
else { drawSky(0); }
update();
