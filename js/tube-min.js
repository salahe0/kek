(function(){function b(b,c,l,m){return isNaN(b)?c:b<l?l:b>m?m:b}function Aa(b,c){for(var l={},m=1;4>m;m++){var h=b["wave"+m];if(h)for(var g in h)!isNaN(h[g])&&g in Ba&&(l[Ba[g]+m]=h[g])}if(c)for(g in Ya)g in l||(l[g]=0);return l}function Oa(b,c,l,m,y){var g={},B=0,v;for(propName in c)v=Za[propName],"DOT_COLOR"!=propName&&v&&c[propName]!=b[v]&&(g[v]=c[propName],B++);B&&Ca.run(b,g,l,1E3*m,y);"DOT_COLOR"in c&&c.DOT_COLOR!=b.dotColor?$a.run(b,"dotColor",c.DOT_COLOR,h.lin(),1E3*m,y):B||ab.seconds(m)}function y(U,
c){function l(a){n.width=C.clientWidth;n.height=C.clientHeight}function m(a,c,b){b=fa/(ga+b);return{x:b*a,y:b*c,alpha:1>b?b*b:1,scale:b}}function Na(){var a,c,b,d,f,h,k;V=Math.sqrt(D*D+E*E);q=D/V||1E-4;r=-E/V||1E-4;W=Math.sin(K+e.angle);L=Math.cos(K+e.angle);d=[[q*q+r*r*L,q*r*(1-L),r*W],[q*r*(1-L),r*r+q*q*L,-q*W],[-r*W,q*W,(q*q+r*r)*L]];k=s;var l=[],g;for(g=0;3>g;g++)for(l[g]=[],b=0;3>b;b++)l[g][b]=d[g][0]*k[0][b]+d[g][1]*k[1][b]+d[g][2]*k[2][b];s=l;n.width=n.width;aa.fillStyle=ha;aa.translate(n.width/
2,n.height/2);for(l=X;l--;)for(d=4*l/X*ba-Pa,g=k=Math.round(X*(2+ia*Math.cos(.5*d+.5*Math.PI))/ja);g--;)a=g/k*2*ba-ba,f=(ka+e.amp1*Math.sin(e.freq1*d+e.pha1))*(1-ca+ca*Math.sin(.5*d)),c=la+e.amp2*Math.sin(e.freq2*a+e.pha2)+e.amp3*Math.sin(e.freq3*d+e.pha3),b=(f+c*Math.cos(a))*Math.cos(d),f=(f+c*Math.cos(a))*Math.sin(d),h=c*Math.sin(a)+ma*Math.sin(.5*d+Math.PI/2),a=s[0][0]*b+s[0][1]*f+s[0][2]*h,c=s[1][0]*b+s[1][1]*f+s[1][2]*h,b=s[2][0]*b+s[2][1]*f+s[2][2]*h,b=m(a,c,b),f=na*b.scale,aa.globalAlpha=b.alpha,
0<f&&aa.fillRect(b.x,b.y,f,f)}function g(a){var b=n.getBoundingClientRect();return{x:a.clientX-b.left,y:a.clientY-b.top}}function B(a){oa=(new Date).getTime();oa-Da>1E3/Qa&&(p=g(a),M=p.x-pa,N=p.y-qa,O=Math.sqrt(M*M+N*N),da=Math.sqrt((p.x-n.width/2)*(p.x-n.width/2)+(p.y-n.height/2)*(p.y-n.height/2)),O&&da<P&&(ra=da<z?1:(P-da)/(P-z),Math.abs(Math.acos((M*Ea+N*Fa)/(Ga*O)))>Math.PI/2&&(F*=-1,K=F*Y),Math.min(O,Ha)*G*ra>Math.abs(e.angle)&&(Ia.stop(),e.angle=F*Math.min(O,Ha)*G*ra,E=F*M,D=F*N,Ia=Ca.run(e,
{angle:0},h.powOut(3),sa,x)),Ea=M,Fa=N,Ga=O),pa=p.x,qa=p.y,Da=oa)}function v(a){document.removeEventListener("mousemove",v);p=g(a);pa=p.x;qa=p.y;document.addEventListener("mousemove",B)}var ta=document.getElementById(U);if(ta){y.instances[U]&&y.instances[U].destroy();y.instances[U]=this;c||(c={});var d=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,Qa=30,Ha=100,ba=Math.PI,Pa=ba/2,X=Math.round(b(c.DETALIZATION,180,1,d)),ka=b(c.TUBE_SIZE,220,1,d),Z=b(c.TUBE_DISTANCE,1E3,0,d),Y=b(c.ROTATION_SPEED,
5,0,d)/1E3,A=b(c.PERSPECTIVE_DISTORTION,1,.001,d),la=b(c.TUBE_WIDTH,50,Q,d),ja=b(c.MESH_RATIO,14,.5,d),ia=b(c.MESH_DISTRIBUTION,0,-2,2),ca=b(c.TUBE_TORSION,.3,Q,d),ma=b(c.TUBE_STRETCH,200,Q,d),Ja=c.USE_MAIN_MORPHING,Ra="MAIN_MORPHING_AUTOPLAY"in c?c.MAIN_MORPHING_AUTOPLAY:!0,Ka=b(c.MAIN_MORPHING_DURATION,2,0,d),Sa=b(c.MAIN_MORPHING_DELAY,1,0,d),R=c.MAIN_MORPHING_TRANSITION_TYPE||"cubic",S=c.MAIN_MORPHING_STAGES||[],na=b(c.DOT_SIZE,2,0,d),ha=c.DOT_COLOR||"black",z=b(c.MOUSE_DISTANCE_MIN,20,0,d),P=
b(c.MOUSE_DISTANCE_MAX,z+400,z+.001,d),G=b(c.MOUSE_SENSITIVITY,1,0,d)/1E3,sa=1E3*b(c.INERTIAL_TIME,2,0,d),Ta=c.SURFACE_INITIAL_DISTORTION||{wave1:{amplitude:0,frequency:0,phase:0},wave2:{amplitude:0,frequency:0,phase:0},wave3:{amplitude:0,frequency:0,phase:0}},ea=c.USE_SURFACE_MORPHING,ua=c.USE_SURFACE_MOTION,La=c.USE_SURFACE_SWING,Ua="SURFACE_MORPHING_AUTOPLAY"in c?c.SURFACE_MORPHING_AUTOPLAY:!0,Ma=b(c.SURFACE_MORPHING_DURATION,2,0,d),Va=b(c.SURFACE_MORPHING_DELAY,1,0,d),T=c.SURFACE_MORPHING_TRANSITION_TYPE||
"cubic",t=c.SURFACE_MORPHING_STAGES||[];if(ua&&ea&&t.length)for(var u=1;4>u;u++)if(c["WAVE_"+u+"_MOTION_SPEED"])for(var f=t.length;f--;){var $=t[f]["wave"+u];$&&"phase"in $&&delete $.phase}if(La)for(u=1;4>u;u++){var w=c["WAVE_"+u+"_SWING_SETTINGS"];if(w){for(var H in w){var k=w[H];if(k){if(ea)for(f=t.length;f--;)($=t[f]["wave"+u])&&H in $&&delete $[H];"type"in k&&(k.wave=("function"===typeof k.type?k.type:bb[k.type])||va.sin,delete k.type);"amplitude"in k&&isNaN(k.amplitude)&&delete k.amplitude;"frequency"in
k&&isNaN(k.frequency)&&delete k.frequency;"phase"in k&&isNaN(k.phase)&&delete k.phase}}w.phase&&ua&&(c["WAVE_"+u+"_MOTION_SPEED"]=0)}}var wa=c.WAVE_1_MOTION_SPEED,xa=c.WAVE_2_MOTION_SPEED,ya=c.WAVE_3_MOTION_SPEED,ga=Z/A,fa=1E3/A,C=function(){var a=document.createElement("div");Wa.set(a,{position:"relative",width:"100%",height:"100%",top:0,left:0,margin:0,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none",KhtmlUserSelect:"none",userDrag:"none",WebkitUserDrag:"none",
overflow:"hidden",cursor:"default"});a.setAttribute("unselectable","on");ta.appendChild(a);return a}(),n=function(){var a=document.createElement("canvas");Wa.set(a,{position:"absolute",width:"100%",height:"100%",top:0,left:0,margin:0});a.width=C.clientWidth;a.height=C.clientHeight;C.appendChild(a);return a}(),aa=n.getContext("2d"),x=new cb,e=function(){var a={set:function(a){for(var b in a)this[b]=a[b]},angle:0},b=Aa(Ta,!0),c;for(c in b)a[c]=b[c];return a}(),E=5,D=5,F=1,K=Y,Ia={stop:function(){}},
W=Math.sin(K),L=Math.cos(K),V=Math.sqrt(D*D+E*E),q=D/V,r=-E/V,s=[[1,0,0],[0,1,0],[0,0,1]],da,ra,p,Ea=0,Fa=0,Ga=0,M,N,O,pa,qa,oa,Da=(new Date).getTime();this.resize=function(){l()};this.destroy=function(){y.instances[U]=null;x.removeAllListeners();I&&I.clear();J&&J.clear();window.removeEventListener("resize",l);document.removeEventListener("mousemove",v);document.removeEventListener("mousemove",B);C.removeChild(n);ta.removeChild(C);ta=U=c=d=Q=Qa=Ha=ba=Pa=X=ka=Y=A=la=ja=ia=ca=ma=na=ha=z=P=G=sa=Ta=Ja=
ea=ua=La=Ra=Ka=Sa=R=S=Ua=Ma=Va=T=t=wa=xa=ya=Z=ga=fa=C=n=aa=x=e=E=D=F=K=Ia=W=L=V=q=r=s=da=ra=p=Ea=Fa=Ga=M=N=O=pa=qa=oa=Da=I=J=l=m=Na=g=B=v=null;for(H in this)delete this[H];this.resize=this.destroy=this.mainMorphTo=this.surfaceMorphTo=function(){}};this.mainMorphTo=function(a){if(Ja&&S.length){var b;a&&"object"===typeof a?b=a:!isNaN(a)&&0<=a&&a<S.length&&!(a-Math.floor(a))&&(b=S[a]);b&&Oa(this,b,"function"===typeof R?R:za[R],Ka,x)}};this.surfaceMorphTo=function(a){if(ea&&t.length){var b;a&&"object"===
typeof a?b=a:!isNaN(a)&&0<=a&&a<t.length&&!(a-Math.floor(a))&&(b=t[a]);b&&Ca.run(e,Aa(b),"function"===typeof T?T:za[T],1E3*Ma,x)}};Object.defineProperties(this,{detalization:{get:function(){return X},set:function(a){X=Math.round(b(a,60,1,d))},configurable:!0},tubeSize:{get:function(){return ka},set:function(a){ka=b(a,220,1,d)},configurable:!0},tubeDistance:{get:function(){return Z},set:function(a){Z=b(a,1E3,0,d);ga=Z/A;fa=1E3/A},configurable:!0},rotationSpeed:{get:function(){return 1E3*Y},set:function(a){Y=
b(a,5,0,d)/1E3;K=F*Y},configurable:!0},tubeWidth:{get:function(){return la},set:function(a){la=b(a,50,Q,d)},configurable:!0},tubeTorsion:{get:function(){return ca},set:function(a){ca=b(a,.3,Q,d)},configurable:!0},tubeStretch:{get:function(){return ma},set:function(a){ma=b(a,200,Q,d)},configurable:!0},perspectiveDistortion:{get:function(){return A},set:function(a){A=b(a,1,.001,d);ga=Z/A;fa=1E3/A},configurable:!0},dotSize:{get:function(){return na},set:function(a){na=b(a,2,0,d)},configurable:!0},dotColor:{get:function(){return ha},
set:function(a){ha=a||"black"},configurable:!0},meshDistribution:{get:function(){return ia},set:function(a){ia=b(a,.3,-2,2)},configurable:!0},meshRatio:{get:function(){return ja},set:function(a){ja=b(a,4,.5,d)},configurable:!0},mouseDistanceMin:{get:function(){return z},set:function(a){z=b(a,20,0,P-1E-4)},configurable:!0},mouseDistanceMax:{get:function(){return P},set:function(a){P=b(a,z+400,z+.001,d)},configurable:!0},mouseSensitivity:{get:function(){return G},set:function(a){var c=G;(G=b(a,1,0,
d)/1E3)&&!c?document.addEventListener("mousemove",v):c&&!G&&(document.removeEventListener("mousemove",v),document.removeEventListener("mousemove",B))},configurable:!0},inertialTime:{get:function(){return sa},set:function(a){sa=1E3*b(a,2,0,d)},configurable:!0},wave1Amplitude:{get:function(){return e.amp1},set:function(a){e.amp1=a},configurable:!0},wave2Amplitude:{get:function(){return e.amp2},set:function(a){e.amp2=a},configurable:!0},wave3Amplitude:{get:function(){return e.amp3},set:function(a){e.amp3=
a},configurable:!0},wave1Frequency:{get:function(){return e.freq1},set:function(a){e.freq1=a},configurable:!0},wave2Frequency:{get:function(){return e.freq2},set:function(a){e.freq2=a},configurable:!0},wave3Frequency:{get:function(){return e.freq3},set:function(a){e.freq3=a},configurable:!0},wave1Phase:{get:function(){return e.pha1},set:function(a){e.pha1=a},configurable:!0},wave2Phase:{get:function(){return e.pha2},set:function(a){e.pha2=a},configurable:!0},wave3Phase:{get:function(){return e.pha3},
set:function(a){e.pha3=a},configurable:!0}});window.addEventListener("resize",l);if(Ja&&Ra&&S.length){var J=new Xa;J.delay=Sa;f=0;for(w=S.length;f<w;f++)J.addTask(Oa,this,S[f],"function"===typeof R?R:za[R],Ka,x);J.addQueue(J);J.run()}if(ea&&Ua&&t.length){var I=new Xa;I.delay=Va;f=0;for(w=t.length;f<w;f++)I.addTween(e,Aa(t[f]),"function"===typeof T?T:za[T],Ma,x);I.addQueue(I);I.run()}ua&&(f=function(){var a={},b=0;wa&&!isNaN(wa)&&(a.pha1=wa,b++);xa&&!isNaN(xa)&&(a.pha2=xa,b++);ya&&!isNaN(ya)&&(a.pha3=
ya,b++);return b?new db(e,a,x):0}())&&f.play();if(La)for(f=1;4>f;f++)if(w=c["WAVE_"+f+"_SWING_SETTINGS"])for(H in w)(u=Ba[H])&&(new eb(e,u+f,w[H],x)).play();x.addListener(Na);G&&document.addEventListener("mousemove",v)}else alert("TubeAnimation ERROR: There is no element with the specified id")}var cb=jsband.Metronome,h=jsband.Ease,Ca=jsband.Tween,ab=jsband.Pause,$a=jsband.ColorTween,Wa=jsband.CssProp,Xa=jsband.Queue,eb=jsband.Swing,va=jsband.Wave,db=jsband.Motion,za={linear:h.lin(),quad:h.pow(2),
cubic:h.pow(3),quart:h.pow(4),quint:h.pow(5),circ:h.circ(),sine:h.sin(),expo:h.exp(),elastic:h.osc2Out(),bounce:h.bncOut(),back:h.backOut()},bb={sine:va.sin,linear:va.triangle,pulse:va.pulse},Ya={amp1:1,freq1:1,pha1:1,amp2:1,freq2:1,pha2:1,amp3:1,freq3:1,pha3:1},Ba={amplitude:"amp",frequency:"freq",phase:"pha"},Za={TUBE_SIZE:"tubeSize",TUBE_DISTANCE:"tubeDistance",DETALIZATION:"detalization",PERSPECTIVE_DISTORTION:"perspectiveDistortion",TUBE_WIDTH:"tubeWidth",TUBE_TORSION:"tubeTorsion",TUBE_STRETCH:"tubeStretch",
ROTATION_SPEED:"rotationSpeed",DOT_SIZE:"dotSize",DOT_COLOR:"dotColor",MESH_DISTRIBUTION:"meshDistribution",MESH_RATIO:"meshRatio"};y.instances={};window.hasOwnProperty("TubeAnimation")?alert('Unable to load "tube-min.js". Make sure the document does not contain a global variable named "TubeAnimation"'):window.TubeAnimation=y})();
