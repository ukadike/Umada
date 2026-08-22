const PANELS=[
{title:'Before',copy:'A Florida beach under a pale afternoon sky. Children play near the water. Older adults sit beneath a shade structure. Nothing is yet identified as danger.',front:0.04,dark:0.05},
{title:'Horizon',copy:'A dense particulate band appears offshore. The horizon loses contrast. Adults turn toward the water; play slows as the light flattens.',front:0.28,dark:0.22},
{title:'Arrival',copy:'The Angel Dust front reaches the beach. Daylight dims, particulate fills the air, and the shoreline becomes difficult to read. People begin moving inland together.',front:0.62,dark:0.48},
{title:'Shelter',copy:'The beach is nearly emptied. Children and older adults move with caregivers toward shelter while the sky remains obscured. The scene emphasizes care, visibility, and survival rather than spectacle.',front:0.9,dark:0.68}
];
let panel=0,reduceMotion=false,t=0,particles=[];

function setup(){
 const mount=document.getElementById('p5-mount');
 const c=createCanvas(Math.max(320,mount.clientWidth),560);c.parent(mount);pixelDensity(1);
 for(let i=0;i<180;i++)particles.push({x:random(width),y:random(height),s:random(.4,2.2),v:random(.2,1.2),p:random(TWO_PI)});
 reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const toggle=document.getElementById('motion-toggle');toggle.checked=reduceMotion;toggle.addEventListener('change',e=>reduceMotion=e.target.checked);
 document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>setPanel(+b.dataset.panel)));
 document.getElementById('story-controls').addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();setPanel((panel+1)%PANELS.length)}if(e.key==='ArrowLeft'){e.preventDefault();setPanel((panel+PANELS.length-1)%PANELS.length)}});
 setPanel(0);
}
function windowResized(){const m=document.getElementById('p5-mount');resizeCanvas(Math.max(320,m.clientWidth),innerWidth<700?430:560)}
function setPanel(i){panel=i;document.querySelectorAll('[data-panel]').forEach((b,n)=>b.setAttribute('aria-pressed',n===i?'true':'false'));document.getElementById('panel-title').textContent=PANELS[i].title;document.getElementById('panel-copy').textContent=PANELS[i].copy;document.getElementById('story-status').textContent=`Panel ${i+1}: ${PANELS[i].copy}`}
function draw(){const p=PANELS[panel];drawSky(p);drawOcean(p);drawBeach();drawPeople(p);drawFront(p);drawDust(p);drawFrameLabel();if(!reduceMotion)t+=.006}
function drawSky(p){for(let y=0;y<height*.58;y+=4){const k=map(y,0,height*.58,206,154)-p.dark*110;stroke(k);line(0,y,width,y)}noStroke();fill(235-p.dark*120,220-p.dark*110,185-p.dark*90,120);ellipse(width*.72,height*.17,68,68)}
function drawOcean(p){noStroke();fill(83-p.dark*55);rect(0,height*.55,width,height*.2);stroke(205-p.dark*120,90);for(let i=0;i<9;i++){let yy=height*.58+i*11;beginShape();for(let x=0;x<=width;x+=18){let off=reduceMotion?0:sin(x*.03+t*10+i)*3;vertex(x,yy+off)}endShape()}}
function drawBeach(){noStroke();fill(170);rect(0,height*.74,width,height*.26);stroke(110,80);for(let x=0;x<width;x+=22)line(x,height*.86,x+9,height*.86+random(-2,2))}
function person(x,y,s,kind,moving=false){push();translate(x,y);stroke(28);strokeWeight(2);fill(205);ellipse(0,-s*1.7,s*.55,s*.55);line(0,-s*1.4,0,0);if(kind==='child'){line(0,-s*.8,-s*.6,-s*.2);line(0,-s*.8,s*.6,-s*.2);line(0,0,-s*.5,s*.75);line(0,0,s*.5,s*.75)}else{line(0,-s*.9,-s*.75,-s*.2);line(0,-s*.9,s*.75,-s*.2);line(0,0,-s*.45,s*.75);line(0,0,s*.45,s*.75)}if(moving)line(s*.65,-s*.3,s*1.05,s*.2);pop()}
function drawPeople(p){const y=height*.82;const shift=panel===3?width*.18:0;person(width*.2+shift,y,24,'child',panel>=2);person(width*.27+shift,y+5,19,'child',panel>=2);person(width*.38+shift,y,30,'adult',panel>=2);person(width*.7+shift*.5,y,32,'elder',panel>=2);person(width*.78+shift*.5,y,28,'elder',panel>=2);stroke(45);line(width*.66+shift*.5,y-62,width*.82+shift*.5,y-62);line(width*.69+shift*.5,y-62,width*.69+shift*.5,y+10);line(width*.8+shift*.5,y-62,width*.8+shift*.5,y+10);if(panel===0){noFill();stroke(55);ellipse(width*.23,y+12,38,10)}}
function drawFront(p){const edge=lerp(width*1.08,width*.05,p.front);noStroke();for(let x=edge;x<width;x+=5){const a=map(x,edge,width,20,145);fill(38,38,42,a);rect(x,0,6,height*.75)}for(let i=0;i<18;i++){fill(20,18,22,40+p.front*100);ellipse(edge+random(-50,110),random(height*.05,height*.58),random(35,150),random(20,75))}}
function drawDust(p){if(panel===0)return;stroke(225,160);for(const d of particles){let x=d.x-(reduceMotion?0:t*d.v*180)%width;let y=d.y+sin(d.p+t*9)*3;if(x<0)x+=width;point(x,y)}noStroke();fill(220,220,210,20+p.front*48);rect(0,0,width,height*.76)}
function drawFrameLabel(){noStroke();fill(10,180);rect(15,15,190,48);fill(238);textFont('monospace');textSize(12);text(`ANGEL DUST / PANEL ${panel+1}`,28,35);text(PANELS[panel].title.toUpperCase(),28,53)}