/* =====================================================
   ✎ ЗДЕСЬ ВСЁ, ЧТО НУЖНО ПОМЕНЯТЬ
   ===================================================== */
const NAME  = 'любимая';        // например: 'Анечка' → «Для тебя / Анечка»
const SINCE = '2024-01-01';     // дата, когда вы вместе (ГГГГ-ММ-ДД)

// Фото положи в папку photos рядом с index.html: 1.jpg … 6.jpg
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

/* Стихи.
   Русские классики — подлинные тексты (общественное достояние).
   Шекспир, Байрон, Бёрнс — вольные переводы оригиналов, сделанные для этого сайта
   (знаменитые переводы Маршака и др. ещё охраняются авторским правом).
   Лермонтов «На севере диком» — классический перевод из Гейне.
   photo: номер фото из PHOTOS, которое «проплывёт» по стене тоннеля после стихотворения. */
const POEMS = [
  {author:'А. С. Пушкин', title:'Я помню чудное мгновенье', stanzas:[
    ['Я помню чудное мгновенье:','Передо мной явилась ты,','Как мимолётное виденье,','Как гений чистой красоты.'],
    ['И сердце бьётся в упоенье,','И для него воскресли вновь','И божество, и вдохновенье,','И жизнь, и слёзы, и любовь.']
  ], photo:0},

  {author:'Дж. Г. Байрон', note:'вольный перевод для этого сайта', title:'Она идёт во всей красе', stanzas:[
    ['Она идёт, прекрасна, как ночь','безоблачных краёв и звёздных небес;','всё лучшее, что есть во тьме и свете,','слилось в её лице, в её глазах —'],
    ['и всё это смягчено тем нежным светом,','в котором небо отказало яркому дню.'],
    ['И на этой щеке, и на этом челе —','таком мягком, спокойном и красноречивом —','улыбки, что покоряют, и оттенки, что светятся,','говорят о днях, прожитых в доброте:'],
    ['о душе в ладу со всем земным,','о сердце, чья любовь безгрешна.']
  ], photo:1},

  {author:'С. А. Есенин', title:'Дорогая, сядем рядом', stanzas:[
    ['Дорогая, сядем рядом,','Поглядим в глаза друг другу.','Я хочу под кротким взглядом','Слушать чувственную вьюгу.']
  ], photo:2},

  {author:'У. Шекспир', note:'сонет 116, вольный перевод для этого сайта', title:'Не стану я мешать союзу верных душ', stanzas:[
    ['Не стану я мешать союзу верных душ.','Любовь — не любовь,','если меняется, едва заметив перемену,','или клонится вслед за тем, кто уходит.'],
    ['О нет! Она — незыблемый маяк,','что смотрит в лицо бурям и не дрожит;','она — звезда для каждого заблудшего корабля,','чью силу не измерить, хоть высоту её и знаешь.'],
    ['Если я неправ и это мне докажут —','значит, я никогда не писал, и никто никогда не любил.']
  ], photo:3},

  {author:'Ф. И. Тютчев', title:'Я встретил вас — и всё былое', stanzas:[
    ['Я встретил вас — и всё былое','В отжившем сердце ожило;','Я вспомнил время золотое —','И сердцу стало так тепло…']
  ]},

  {author:'М. Ю. Лермонтов', note:'из Гейне', title:'На севере диком стоит одиноко', stanzas:[
    ['На севере диком стоит одиноко','На голой вершине сосна','И дремлет, качаясь, и снегом сыпучим','Одета, как ризой, она.'],
    ['И снится ей всё, что в пустыне далёкой —','В том крае, где солнца восход,','Одна и грустна на утёсе горючем','Прекрасная пальма растёт.']
  ], photo:4},

  {author:'Р. Бёрнс', note:'вольный перевод для этого сайта', title:'Моя любовь — как алая роза', stanzas:[
    ['О, моя любовь — как алая роза,','что в июне только расцвела;','о, моя любовь — как мелодия,','что звучит нежно и в лад.'],
    ['Ты так прекрасна, милая моя,','и так глубоко я люблю,','что буду любить тебя, дорогая,','пока не высохнут все моря.'],
    ['Пока не высохнут моря, любимая,','и скалы не растают от солнца,','я буду любить тебя, дорогая,','пока течёт песок моей жизни.']
  ], photo:5},

  // ✎ Свой стих (например «Забыть тебя? А с кем я буду…») — раскомментируй и впиши:
  // {author:'Автор', title:'Название', mine:true, stanzas:[
  //   ['строка 1','строка 2','строка 3','строка 4']
  // ]},
];

const JAPAN = [
  {ja:'月が綺麗ですね', ro:'Tsuki ga kirei desu ne', ru:'«Какая сегодня красивая луна».', note:'Так в Японии, по легенде, признаются в любви, не произнося этих слов.'},
  {ja:'君に出会えて、よかった', ro:'Kimi ni deaete, yokatta', ru:'«Как хорошо, что я встретил тебя».', note:''},
  {ja:'運命の赤い糸', ro:'Unmei no akai ito', ru:'«Красная нить судьбы».', note:'Невидимая нить, которая связывает людей, предназначенных друг другу. Поэтому внизу экрана тянется красная нить.'},
  {ja:'一期一会', ro:'Ichigo ichie', ru:'«Одна жизнь — одна встреча».', note:'Каждая встреча неповторима, и ты — самая драгоценная из них.'},
  {ja:'あなたと見る景色が、いちばん綺麗', ro:'Anata to miru keshiki ga, ichiban kirei', ru:'«Пейзаж, который я вижу рядом с тобой, — самый красивый».', note:''},
  {ja:'ずっと、そばにいてね', ro:'Zutto, soba ni ite ne', ru:'«Будь рядом всегда».', note:''},
];

/* =====================================================
   Дальше всё работает само
   ===================================================== */
const $  = s => document.querySelector(s);
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
const lerp = (a,b,t)=>a+(b-a)*t;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce) document.documentElement.classList.add('flat');

const world = $('#world');
const scenes = [];
let vw = innerWidth, vh = innerHeight;

/* ---------- Сцены ---------- */
function addScene(cls, html, o={}){
  const el = document.createElement('div');
  el.className = 'scene '+cls; el.innerHTML = html; world.appendChild(el);
  const s = Object.assign({el, side:0, yf:0, hold:1000, fit:false, outStart:50, outLen:420, last:false, vis:false, on:false}, o);
  scenes.push(s); return s;
}

// 1. заглавная
addScene('hero',
  `<h1><span class="h1a">Для тебя</span><span class="h1b">${NAME}</span></h1>
   <p class="sub">Здесь собраны слова, которые я бы хотел сказать красивее, чем умею, поэтому часть из них мне помогли найти поэты разных времён и стран.</p>
   <div class="hint"><i></i>листай вниз, и мы полетим</div>`,
  {hold:1300});

// 2. стихи и фото по стенам
const lightbox = $('#lightbox');
function openLightbox(src,cap){
  lightbox.innerHTML = src ? `<img src="${src}" alt="${cap}">` : `<span class="ph">♥</span>`;
  lightbox.classList.add('on');
}
lightbox.addEventListener('click',()=>lightbox.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') lightbox.classList.remove('on'); });

let photoSide = -1;
function addPhoto(i){
  const p = PHOTOS[i]; if(!p) return;
  const s = addScene('photo',
    `<div class="arch"><div class="pic"><span class="ph">♥</span></div></div><figcaption>${p.cap}</figcaption>`,
    {hold:850, side:photoSide, yf:photoSide<0?.05:-.05, outStart:150, outLen:600});
  photoSide *= -1;
  const pic = s.el.querySelector('.pic');
  const img = new Image(); img.alt = p.cap;
  img.onload = ()=>{ pic.innerHTML=''; pic.appendChild(img); };
  img.src = p.src;
  s.el.tabIndex = 0;
  const open = ()=>openLightbox(img.complete && img.naturalWidth ? p.src : null, p.cap);
  s.el.addEventListener('click',open);
  s.el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();open();} });
}

POEMS.forEach(p=>{
  const lines = p.stanzas.reduce((n,st)=>n+st.length,0);
  addScene('poem'+(p.mine?' mine':''),
    `<span class="orn"></span><div class="ttl">${p.title}</div>`+
    p.stanzas.map(st=>`<div class="st">${st.map(l=>`<div class="ln">${l}</div>`).join('')}</div>`).join('')+
    `<div class="by">${p.author}${p.note?`<small>${p.note}</small>`:''}</div>`,
    {hold:900+lines*70, fit:true});
  if(p.photo!==undefined) addPhoto(p.photo);
});

// 3. японские фразы
JAPAN.forEach(j=>addScene('jp',
  `<div class="ja" lang="ja">${j.ja}</div><div class="ro">${j.ro}</div><div class="ru">${j.ru}</div>${j.note?`<div class="note">${j.note}</div>`:''}`,
  {hold:850}));

// 4. счётчик
const cnt = addScene('cnt',
  `<p class="t">Мы вместе уже</p><div class="num" id="days">0</div><p class="t" id="daysWord">дней</p><p class="detail" id="detail"></p>`,
  {hold:1100});

// 5. причины
const rs = addScene('rs',
  `<h2>За что я тебя люблю</h2><p class="sub">Коснись сердечка</p>
   <div class="cards">${REASONS.map(r=>`<button class="rc" aria-label="Открыть причину"><div class="inner"><div class="face front">♥</div><div class="face back">${r}</div></div></button>`).join('')}</div>`,
  {hold:1500});
rs.el.querySelectorAll('.rc').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('flip')));

// 6. небо
const skyS = addScene('skyS',
  `<h2>Наше небо</h2><p class="sub">Коснись неба и зажги звезду. Звёзды соединятся в созвездие, которое никто, кроме нас, не прочтёт.</p>
   <canvas id="skyc" aria-label="Звёздное небо: касайтесь, чтобы зажигать звёзды"></canvas>`,
  {hold:1500});

// 7. письмо — конец тоннеля
const letterS = addScene('letter',
  `<div class="paper" id="paper" aria-live="polite"></div>
   <button class="heart-btn" id="heart" aria-label="Нажми, если тоже">♥</button>
   <p class="heart-hint" id="heartHint">Нажми, если тоже</p>`,
  {last:true, fit:true});

/* Расстояние каждой сцены от начала тоннеля */
scenes.forEach((s,i)=>{ s.dist = i===0 ? 0 : scenes[i-1].dist + scenes[i-1].hold; });
const TOTAL = scenes[scenes.length-1].dist;

/* ---------- Подгонка размера текста под высоту экрана ---------- */
const BASE_FS = {poem:'clamp(21px,4.9vw,34px)', letter:'clamp(18px,4.5vw,26px)'};
function fit(){
  const maxH = vh * (vw<700 ? .72 : .78);
  scenes.filter(s=>s.fit).forEach(s=>{
    const base = s.el.classList.contains('letter') ? BASE_FS.letter : BASE_FS.poem;
    let k = 1; s.el.style.setProperty('--fs', base);
    for(let i=0;i<10 && s.el.offsetHeight>maxH;i++){ k*=.93; s.el.style.setProperty('--fs',`calc(${base} * ${k.toFixed(3)})`); }
  });
}

/* ---------- Размеры и «длина тоннеля» ---------- */
let S = vh/1300;                 // пикселей прокрутки на единицу глубины
const track = $('#track');
const fx = $('#fx'), g = fx.getContext('2d');
const F = 900;                   // фокусное расстояние (должно совпадать с --persp)
let particles = [];
function resize(){
  vw = innerWidth; vh = innerHeight;
  S = vh/1300;
  track.style.height = (TOTAL*S + vh)+'px';
  const d = Math.min(devicePixelRatio||1, 2);
  fx.width = vw*d; fx.height = vh*d; g.setTransform(d,0,0,d,0,0);
  initParticles(); fit(); sizeSky();
}

/* ---------- Частицы: звёзды, лепестки, боке ---------- */
const ZMAX = 3200;
function initParticles(){
  const mobile = vw < 700, vmax = Math.max(vw,vh);
  const mk = (kind,n)=>Array.from({length:n},()=>({
    kind, ang:Math.random()*6.283, rad:vmax*(.14+Math.random()*.8),
    a:Math.random()*ZMAX, rot:Math.random()*6.283, vr:(Math.random()-.5)*.03,
    size: kind==='star' ? .6+Math.random()*1.3 : kind==='petal' ? 8+Math.random()*9 : 50+Math.random()*110,
    ph:Math.random()*6.283, tone:Math.random()
  }));
  particles = [...mk('orb',mobile?7:12), ...mk('star',mobile?85:160), ...mk('petal',mobile?22:38)];
}
function petalPath(s){
  g.beginPath(); g.moveTo(0,-s);
  g.bezierCurveTo(s*.9,-s*.7,s*.8,s*.7,0,s);
  g.bezierCurveTo(-s*.8,s*.7,-s*.9,-s*.7,0,-s);
}

/* ---------- Цвет по ходу пути: ночь → рассвет ---------- */
const STOPS = [
  {p:0,   edge:[8,5,20],  center:[38,20,66],   ring:[190,160,255]},
  {p:.50, edge:[18,8,36], center:[74,30,88],   ring:[232,160,235]},
  {p:.80, edge:[34,12,40],center:[140,60,92],  ring:[255,176,200]},
  {p:1,   edge:[52,16,44],center:[235,140,130],ring:[255,208,176]},
];
function colorsAt(p){
  for(let i=1;i<STOPS.length;i++){
    if(p<=STOPS[i].p){
      const a=STOPS[i-1], b=STOPS[i], k=(p-a.p)/(b.p-a.p);
      const mix=(x,y)=>x.map((v,j)=>Math.round(lerp(v,y[j],k)));
      return {edge:mix(a.edge,b.edge), center:mix(a.center,b.center), ring:mix(a.ring,b.ring)};
    }
  }
  const l=STOPS[STOPS.length-1]; return {edge:l.edge, center:l.center, ring:l.ring};
}

/* ---------- Рисуем тоннель ---------- */
const RN = 16, RS = 240;
const curveX = z => Math.sin(z*.00055)*vw*.20;
const curveY = z => Math.sin(z*.0004+1.3)*vh*.10;
let mx=0, my=0, tmx=0, tmy=0;       // «параллакс» от мыши

function drawFx(now, camPos, vel, p){
  const col = colorsAt(p), vmax = Math.max(vw,vh);
  const root = document.documentElement.style;
  root.setProperty('--c-edge', col.edge.join(' '));
  root.setProperty('--c-center', col.center.join(' '));

  const vpx = vw/2 + mx*vw*.03, vpy = vh/2 + my*vh*.025;
  g.clearRect(0,0,vw,vh);

  // тёплое свечение в конце тоннеля
  const glow = .05 + .55*Math.pow(p,3);
  const rg = g.createRadialGradient(vpx,vpy,0,vpx,vpy,vmax*.55);
  rg.addColorStop(0,`rgba(255,196,170,${glow})`); rg.addColorStop(1,'rgba(255,196,170,0)');
  g.fillStyle = rg; g.fillRect(0,0,vw,vh);

  // кольца тоннеля
  const ringCam = camPos + now*.04, span = RN*RS;
  for(let i=0;i<RN;i++){
    let a = (i*RS - ringCam) % span; if(a<0) a += span;
    const f = F/(F+a), R = vmax*.62*f;
    const al = clamp(a/260,0,1) * Math.pow(1-a/span,1.6) * .55;
    if(al<.01) continue;
    const dx = (curveX(ringCam+a)-curveX(ringCam))*f, dy = (curveY(ringCam+a)-curveY(ringCam))*f;
    const cx = vpx + dx + (vpx-vw/2)*(-f), cy = vpy + dy + (vpy-vh/2)*(-f);
    g.beginPath(); g.arc(cx,cy,R,0,6.283);
    const c = col.ring.join(',');
    g.setLineDash([]);
    g.strokeStyle = `rgba(${c},${al*.28})`; g.lineWidth = 5+9*f; g.stroke();
    if(i%2){ g.setLineDash([f*26,f*46]); g.lineDashOffset = -now*.02*f; }
    g.strokeStyle = `rgba(${c},${al})`; g.lineWidth = .8+2.2*f; g.stroke();
  }
  g.setLineDash([]);

  // частицы
  const drift = .9;
  g.globalCompositeOperation = 'lighter';
  for(const q of particles){ if(q.kind!=='orb') continue; stepP(q,vel,drift); drawOrb(q,vpx,vpy,col); }
  g.globalCompositeOperation = 'source-over';
  for(const q of particles){
    if(q.kind==='orb') continue;
    stepP(q,vel,drift);
    if(q.kind==='star') drawStar(q,vpx,vpy,vel,now); else drawPetal(q,vpx,vpy,now);
  }
}
function stepP(q,vel,drift){
  q.a -= vel + drift;
  if(q.a < -300) q.a += ZMAX+300;
  else if(q.a > ZMAX) q.a -= ZMAX+300;
  q.rot += q.vr;
}
function fade(q){ return clamp((q.a+300)/420,0,1) * clamp((ZMAX-q.a)/900,0,1); }
function drawOrb(q,vpx,vpy,col){
  const f = F/(F+q.a), al = fade(q)*.13; if(al<.005) return;
  const x = vpx+Math.cos(q.ang)*q.rad*f, y = vpy+Math.sin(q.ang)*q.rad*f, r = q.size*f*2.2;
  const c = q.tone<.5 ? '255,150,180' : q.tone<.8 ? '255,200,170' : '180,150,255';
  const gr = g.createRadialGradient(x,y,0,x,y,r);
  gr.addColorStop(0,`rgba(${c},${al})`); gr.addColorStop(1,`rgba(${c},0)`);
  g.fillStyle = gr; g.beginPath(); g.arc(x,y,r,0,6.283); g.fill();
}
function drawStar(q,vpx,vpy,vel,now){
  const f = F/(F+q.a), al = fade(q)*(.55+.35*Math.sin(now/700+q.ph)); if(al<.02) return;
  const x = vpx+Math.cos(q.ang)*q.rad*f, y = vpy+Math.sin(q.ang)*q.rad*f;
  const sl = Math.min(Math.abs(vel)*2.4,260);
  g.fillStyle = g.strokeStyle = `rgba(255,236,232,${al})`;
  if(sl>6){
    const f2 = F/(F+q.a+Math.sign(vel)*sl);
    const x2 = vpx+Math.cos(q.ang)*q.rad*f2, y2 = vpy+Math.sin(q.ang)*q.rad*f2;
    g.lineCap='round'; g.lineWidth=Math.max(.6,q.size*f*1.1);
    g.beginPath(); g.moveTo(x2,y2); g.lineTo(x,y); g.stroke();
  } else { g.beginPath(); g.arc(x,y,Math.max(.4,q.size*f),0,6.283); g.fill(); }
}
function drawPetal(q,vpx,vpy,now){
  const f = F/(F+q.a), al = fade(q)*.75; if(al<.02) return;
  const sw = Math.sin(now/1300+q.ph)*14*f;
  const x = vpx+Math.cos(q.ang)*q.rad*f+sw, y = vpy+Math.sin(q.ang)*q.rad*f;
  const s = q.size*f;
  g.save(); g.translate(x,y); g.rotate(q.rot); g.globalAlpha = al;
  const gr = g.createLinearGradient(0,-s,0,s); gr.addColorStop(0,'#ffd9e2'); gr.addColorStop(1,'#ec8aa6');
  g.fillStyle = gr; petalPath(s); g.fill(); g.restore();
}

/* ---------- Небо-«мини-игра» ---------- */
const sc = $('#skyc'), sx = sc.getContext('2d');
let SW=0, SH=0, sstars=[], sbg=[], shoot=null;
function sizeSky(){
  const r = sc.getBoundingClientRect();
  if(!r.width) { SW=sc.offsetWidth; SH=sc.offsetHeight; } else { SW=sc.offsetWidth; SH=sc.offsetHeight; }
  if(!SW) return;
  const d = Math.min(devicePixelRatio||1,2);
  sc.width = SW*d; sc.height = SH*d; sx.setTransform(d,0,0,d,0,0);
  sbg = Array.from({length:60},()=>({x:Math.random()*SW,y:Math.random()*SH,r:Math.random()*1.1+.2,p:Math.random()*6.28}));
}
sc.addEventListener('pointerdown',e=>{
  const r = sc.getBoundingClientRect(), k = SW/r.width || 1;
  sstars.push({x:(e.clientX-r.left)*k,y:(e.clientY-r.top)*(SH/r.height||1),born:performance.now(),p:Math.random()*6.28});
  if(sstars.length>14) sstars.shift();
  if(reduce) drawSky(performance.now());
});
setInterval(()=>{ if(!reduce && !shoot && SW) shoot={x:Math.random()*SW*.6+SW*.3,y:Math.random()*SH*.3,t:0}; },5200);
function drawSky(now){
  if(!SW) return;
  sx.clearRect(0,0,SW,SH);
  sbg.forEach(s=>{ const a=.35+.35*Math.sin(now/900+s.p); sx.fillStyle=`rgba(253,241,243,${a})`; sx.beginPath(); sx.arc(s.x,s.y,s.r,0,6.28); sx.fill(); });
  sx.strokeStyle='rgba(242,201,138,.6)'; sx.lineWidth=1; sx.beginPath();
  sstars.forEach((s,i)=>{ i?sx.lineTo(s.x,s.y):sx.moveTo(s.x,s.y); }); sx.stroke();
  sstars.forEach(s=>{
    const k=Math.min(1,(now-s.born)/600), tw=.8+.2*Math.sin(now/300+s.p), R=(3+7*k)*tw;
    const gr=sx.createRadialGradient(s.x,s.y,0,s.x,s.y,R*3);
    gr.addColorStop(0,'rgba(255,240,210,1)'); gr.addColorStop(.3,'rgba(242,201,138,.5)'); gr.addColorStop(1,'rgba(242,201,138,0)');
    sx.fillStyle=gr; sx.beginPath(); sx.arc(s.x,s.y,R*3,0,6.28); sx.fill();
  });
  if(shoot){
    shoot.t+=.02; const x=shoot.x-shoot.t*SW*.5, y=shoot.y+shoot.t*SH*.45;
    const gr=sx.createLinearGradient(x,y,x+70,y-60); gr.addColorStop(0,'rgba(255,255,255,.95)'); gr.addColorStop(1,'rgba(255,255,255,0)');
    sx.strokeStyle=gr; sx.lineWidth=2; sx.beginPath(); sx.moveTo(x,y); sx.lineTo(x+70,y-60); sx.stroke();
    if(shoot.t>1) shoot=null;
  }
}

/* ---------- Счётчик и письмо ---------- */
function plural(n,a,b,c){ n=Math.abs(n)%100; const m=n%10; if(n>10&&n<20) return c; if(m>1&&m<5) return b; if(m===1) return a; return c; }
let counted=false;
function startCount(){
  if(counted) return; counted=true;
  const days = Math.max(0,Math.floor((new Date()-new Date(SINCE+'T00:00:00'))/86400000));
  const el = $('#days'), hours = days*24;
  $('#daysWord').textContent = plural(days,'день','дня','дней');
  $('#detail').textContent = `это ${hours.toLocaleString('ru-RU')} ${plural(hours,'час','часа','часов')}, и я ни о чём не жалею`;
  if(reduce){ el.textContent = days; return; }
  const t0=performance.now(), dur=2400;
  (function tick(){ const k=Math.min(1,(performance.now()-t0)/dur); el.textContent=Math.round(days*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(tick); })();
}
let typed=false;
const paper = $('#paper');
function renderLetter(n,caret){
  const done = LETTER.slice(0,n), rest = LETTER.slice(n);
  paper.innerHTML = `<span>${done}</span>${caret?'<span class="caret"></span>':''}<span style="visibility:hidden">${rest}</span>`;
}
function typeLetter(){
  if(typed) return; typed=true;
  if(reduce){ paper.textContent = LETTER; return; }
  let i=0;
  (function step(){
    renderLetter(++i, i<LETTER.length);
    if(i<LETTER.length){ const ch=LETTER[i-1]; setTimeout(step, ch==='\n'?380:(/[.,!]/.test(ch)?220:45)); }
  })();
}
renderLetter(0,false);
if(reduce){ startCount(); typeLetter(); }

$('#heart').addEventListener('click',e=>{
  const r=e.currentTarget.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
  const n = reduce?0:28;
  for(let i=0;i<n;i++){
    const h=document.createElement('div');
    h.textContent=['♥','❀','✿','♡'][i%4];
    const a=Math.random()*6.28, d=90+Math.random()*190;
    Object.assign(h.style,{position:'fixed',left:cx+'px',top:cy+'px',zIndex:70,pointerEvents:'none',
      color:i%3?'#ff9fb6':'#f2c98a',fontSize:(14+Math.random()*22)+'px',
      transition:'transform 1.9s cubic-bezier(.2,.7,.3,1), opacity 1.9s ease',opacity:1});
    document.body.appendChild(h);
    requestAnimationFrame(()=>{ h.style.transform=`translate(${Math.cos(a)*d}px,${Math.sin(a)*d-120}px) rotate(${(Math.random()-.5)*160}deg)`; h.style.opacity=0; });
    setTimeout(()=>h.remove(),2000);
  }
  $('#heartHint').textContent='Я знал ✨';
});

/* ---------- Камера летит по тоннелю ---------- */
let opened=false, openT=0, cam=-1700, lastCam=-1700, lastNow=0;
const progFill = $('#progress i'), progHeart = $('#progress b');

function frame(now){
  const dt = Math.min(50, now-lastNow)/16.67 || 1; lastNow = now;

  // «въезд» в тоннель после нажатия на кнопку
  const intro = opened ? -1700*Math.pow(1-clamp((now-openT)/2800,0,1),3) : -1700;
  const target = (opened ? scrollY/S : 0) + intro;
  cam += (target-cam)*Math.min(1,.085*dt);
  const vel = cam-lastCam; lastCam = cam;
  const p = clamp(cam/TOTAL,0,1);

  // мышь / лёгкое покачивание на телефоне
  if(tmx===0 && tmy===0 && !matchMedia('(pointer:fine)').matches){ mx = Math.sin(now/3400)*.35; my = Math.cos(now/4100)*.2; }
  else { mx += (tmx-mx)*.06; my += (tmy-my)*.06; }
  world.style.transform = `rotateX(${(-my*2.6).toFixed(3)}deg) rotateY(${(mx*4).toFixed(3)}deg)`;

  drawFx(now, cam, vel, p);

  const xOff = vw<700 ? vw*.27 : Math.min(vw*.27,420);
  for(const s of scenes){
    const a = s.dist - cam;
    if(a>2000 || a<-900){ if(s.vis){ s.el.style.visibility='hidden'; s.el.classList.remove('on'); s.vis=false; } continue; }
    const inn  = clamp((1150-a)/650,0,1);
    const out  = s.last || a>=-s.outStart ? 1 : clamp(1-(-a-s.outStart)/s.outLen,0,1);
    let o = inn*out; o = o*o*(3-2*o);
    let blur = 0;
    if(a>450) blur = clamp((a-450)/160,0,5);
    else if(a<-s.outStart && !s.last) blur = clamp((-a-s.outStart)/70,0,9);
    const x = s.side*xOff, y = s.yf*vh, rot = -s.side*22;
    s.el.style.transform = `translate(-50%,-50%) translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${(-a).toFixed(1)}px) rotateY(${rot}deg)`;
    s.el.style.opacity = o.toFixed(3);
    s.el.style.filter = blur>.3 ? `blur(${blur.toFixed(1)}px)` : 'none';
    if(!s.vis){ s.el.style.visibility='visible'; s.vis=true; }
    const on = o>.6; if(on!==s.on){ s.on=on; s.el.classList.toggle('on',on); }
  }

  if(opened){
    if(cnt.dist-cam<900) startCount();
    if(letterS.dist-cam<800) typeLetter();
  }
  progFill.style.width = (p*100)+'%'; progHeart.style.left = (p*100)+'%';
  drawSky(now);
  requestAnimationFrame(frame);
}

/* ---------- Запуск ---------- */
addEventListener('pointermove',e=>{
  if(e.pointerType!=='mouse') return;
  tmx = (e.clientX/vw-.5)*2; tmy = (e.clientY/vh-.5)*2;
});
addEventListener('resize',()=>{ resize(); });

$('#enter').addEventListener('click',()=>{
  $('#intro').classList.add('go');
  document.body.classList.remove('locked'); document.body.classList.add('opened');
  scrollTo(0,0); opened=true; openT=performance.now();
  setTimeout(()=>$('#intro').remove(),2000);
});

resize();
if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>{ fit(); sizeSky(); });
if(reduce){
  // спокойный режим: обычная лента без тоннеля, всё сразу видно
  fit(); drawSky(0);
} else {
  requestAnimationFrame(frame);
}
