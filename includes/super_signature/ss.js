﻿/*
* Copyright 2009-2018, www.SuperSignature.com
* This code is not a freeware. You need to buy it before use!
* ver 1.5.0.3 December 2018
*/
var $ = jQuery.noConflict();
ValidateSignature=function(a){var c=!0;if(null==a||"undefined"==a||""==a)for(a=0;a<signObjects.length;a++){var f=signObjects[a];eval("obj"+f).IsValid()||(c=!1,isMobileIE||(document.getElementById(f).style.borderColor="red"))}else c=eval("obj"+a).IsValid(),isMobileIE||0!=c||(document.getElementById(a).style.borderColor="red");return c};ClearSignature=function(a){if(null==a||"undefined"==a||""==a)for(var c=0;c<signObjects.length;c++)a=signObjects[c],eval("obj"+a).ResetClick();else eval("obj"+a).ResetClick()};
ResizeSignature=function(a,c,f){eval("obj"+a).ResizeSignature(c,f)};SignatureColor=function(a,c){eval("obj"+a).SignatureColor(c)};SignatureBackColor=function(a,c){eval("obj"+a).SignatureBackColor(c)};SignaturePen=function(a,c){eval("obj"+a).SignaturePen(c)};SignatureEnabled=function(a,c){eval("obj"+a).SignatureEnabled(c)};SignatureStatusBar=function(a,c){eval("obj"+a).SignatureStatusBar(c)};SignatureTotalPoints=function(a){return eval("obj"+a).CurrentTotalpoints()};
UndoSignature=function(a){eval("obj"+a).UndoSignature()};LoadSignature=function(a,c){eval("obj"+a).LoadSignature(c)};TextSignature=function(a,c,f,g,d){eval("obj"+a).TextSignature(c,f,g,d)};var msie=window.navigator.userAgent.toUpperCase().indexOf("MSIE "),isIE=!1,isIENine=!1,isIETen=!1,isMobileIE=!1,isOperaMini=!1,isIETablet=!1,winTabletPointerEvt=!1,iever=getInternetExplorerVersion(),isPointer=!1;0<window.navigator.userAgent.toUpperCase().indexOf("OPERA MINI")&&(isOperaMini=!0);
0<window.navigator.userAgent.toUpperCase().indexOf("OPERA MOBI")&&(isOperaMini=!0);function supports_canvas(){try{return document.createElement("canvas").getContext("2d"),!0}catch(a){return!1}}function getInternetExplorerVersion(){var a=-1;"Microsoft Internet Explorer"==window.navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(window.navigator.userAgent)&&(a=parseFloat(RegExp.$1));return a}
0<msie&&(isIE=!0,supports_canvas()&&(isIE=!1,9<=iever&&(isIENine=!0)),0<window.navigator.userAgent.toUpperCase().indexOf("IEMOBILE ")&&(isMobileIE=!0));isIETablet=/Tablet PC/i.test(window.navigator.userAgent);winTabletPointerEvt=!!window.navigator.msPointerEnabled;isIETablet||(0<window.navigator.userAgent.toUpperCase().indexOf("WINDOWS PHONE ")&&(isIETablet=!0),window.navigator.msMaxTouchPoints&&(isIETablet=!0));
function SuperSignature(a){function c(b,a,n){b.myEvents||(b.myEvents={});b.myEvents[a]||(b.myEvents[a]=[]);b=b.myEvents[a];b[b.length]=n}function f(b){return b.replace(/\s*((\S+\s*)*)/,"$1")}function g(b){return b.replace(/((\s*\S+)*)\s*/,"$1")}function d(b){if(null!=R&&"undefined"!=R)try{R.innerHTML=b+"...<br/>"+R.innerHTML}catch(H){alert(H.description)}}function k(b){b=b.replace("undefined ","");b=b.replace("undefined","");var a="",n,e=0;b=b.replace(/\x0d\x0a/g,"\n");var c="";for(n=0;n<b.length;n++){var d=
b.charCodeAt(n);128>d?c+=String.fromCharCode(d):(127<d&&2048>d?c+=String.fromCharCode(d>>6|192):(c+=String.fromCharCode(d>>12|224),c+=String.fromCharCode(d>>6&63|128)),c+=String.fromCharCode(d&63|128))}for(b=c;e<b.length;){var f=b.charCodeAt(e++);c=b.charCodeAt(e++);n=b.charCodeAt(e++);d=f>>2;f=(f&3)<<4|c>>4;var h=(c&15)<<2|n>>6;var g=n&63;isNaN(c)?h=g=64:isNaN(n)&&(g=64);a=a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)}return a}function m(){r[0]=0;for(var b=1;b<r.length;b++)r[0]+=r[b];ma=r[0]>=na?!0:!1;oa=r[0];b="";E[0]="1,"+S+","+pa+","+B+","+C+","+ja+","+r[0]+","+z+";";for(var a=0;a<E.length;a++)b+=E[a];A.value=1<E.length?k(b):"";if(!isIE&&da)if(a="",0<L.length){for(var n=0;n<L.length;n++){var e=L[n];if(e.length)for(b=0;b<e.length;b++)a+=e[b].x+" "+e[b].y+
",";else a=a+e.x+" "+e.y+",";a+=";"}N.value=k(a);b=document.getElementById(z).toDataURL();O.value="data:,"==b?"":b}else N.value="",O.value=""}function p(b){b.splice(0,1);for(var a=[],e=0;e<b.length;e++){var c=b[e].split(",");a.push({x:parseInt(c[0]),y:parseInt(c[1])})}return a}function l(b){e.clearRect(0,0,B,C);if(0<P.length){var a=new Image;$(a).bind("load",function(){});a.src=P}else SignatureBackColor(z,S);for(a=0;a<L.length;a++){var n=L[a],c=W[a].split(","),d=c[0];c=c[1];if(n.length)for(e.beginPath(),
e.lineWidth=d,e.moveTo(n[0].x*b,n[0].y*b),d=1;d<=n.length-3;d+=3)e.bezierCurveTo(n[d].x*b,n[d].y*b,n[d+1].x*b,n[d+1].y*b,n[d+2].x*b,n[d+2].y*b),e.strokeStyle=c,e.stroke(),e.beginPath(),e.moveTo(n[d+2].x*b,n[d+2].y*b);else e.beginPath(),e.moveTo(n.x*b,n.y*b),e.arc(n.x*b,n.y*b,d/2,0,2*Math.PI,!1),e.strokeStyle=c,e.fill(),e.stroke();e.closePath()}}function v(b){var a=curtop=0;if(X)a=$("#"+b.id).offset().left,curtop=$("#"+b.id).offset().top;else if(b.offsetParent){do a+=b.offsetLeft,curtop+=b.offsetTop;
while(b=b.offsetParent)}return[a,curtop]}function T(){ea=!0;ka=!1;if(0<F.length&&(E[y]=" "+F.join(" ")+";",!isIE&&da)){W.push(F[0]);var b=p(F);0<b.length&&(b=new BezierCurves(b,30),L.push(b),l(1))}m();M.innerHTML=r[0]<na?xa:ya;isIE?e.innerHTML=e.innerHTML:(e.closePath(),e.restore());x&&(fa=ha=0)}function I(b){b.preventManipulation&&b.preventManipulation();b.preventDefault?b.preventDefault():b.returnValue&&(b.returnValue=!1);b.stopPropagation&&b.stopPropagation()}this.SignObject="";this.PenSize=3;
this.PenColor="#D24747";this.ClearImage=this.PenCursor="";this.BorderWidth="2px";this.BorderStyle="dashed";this.BorderColor="#DCDCDC";this.BackColor="#ffffff";this.BackImageUrl="";this.SignzIndex="99";this.SignWidth=450;this.SignHeight=250;this.CssClass="";this.ApplyStyle=!0;this.SignToolbarBgColor="transparent";this.RequiredPoints=50;this.ErrorMessage="Please continue your signature.";this.StartMessage="Please sign";this.SuccessMessage="Signature OK.";this.ImageScaleFactor=.5;this.Visible=this.Enabled=
this.TransparentSign=!0;this.Edition="Trial";this.IsCompatible=!1;this.LicenseKey=this.InternalError="";this.IeModalFix=!1;this.ResetFunction=this.ErrorFunction=this.SuccessFunction="";this.SmoothSign=!0;this.forceMouseEvent=this.jQueryEvent=!1;for(var J in a)this[J]=a[J];var y=0,x=!1,e=null,K=null,h=null,M=null,q=null,A=null,N=null,O=null,R=null,D=this.Enabled,ka=!1,ea=!1,E=[],F=[],r=[],L=[],W=[],qa=!1,G=this.PenSize,Q=this.PenColor,S=this.BackColor,za=this.BorderColor,z=this.SignObject,B=this.SignWidth,
C=this.SignHeight,ra=this.StartMessage,xa=this.ErrorMessage,ya=this.SuccessMessage,P=this.BackImageUrl,ma=!1,pa=this.ImageScaleFactor,ja=this.TransparentSign,na=this.RequiredPoints,oa=0,U=0,V=0,ha=0,fa=0,X=this.IeModalFix,ia=null,sa=0,ta=0,da=this.SmoothSign,Aa=this.jQueryEvent,Y=!1,Z=!1,aa=!1,ba=!1,ca=!1,ua=!1;if(isMobileIE){var w=new jsGraphics(z+"_Container");if(null!=w&&"undefined"!=w)try{w.clear(),w.paint()}catch(b){alert("Graphics object error "+b.description)}else alert("Graphics object error")}this.IsValid=
function(){return ma};this.CurrentTotalpoints=function(){return oa};this.ReturnFalse=function(b){b.preventManipulation&&b.preventManipulation();b.preventDefault?b.preventDefault():b.returnValue=!1};this.XBrowserAddHandler=function(b,a,e){if(b.addEventListener)b.addEventListener(a,e,!1);else if(b.attachEvent)b.attachEvent("on"+a,e);else try{c(b,a,e),b["on"+a]=function(){if(b&&b.myEvents&&b.myEvents[a])for(var e=b.myEvents[a],d=0,c=e.length;d<c;d++)e[d]()}}catch(va){alert("Event attaching exception, "+
va.description)}};this.DisableSelection=function(){isIE||("undefined"!=typeof h.style.MozUserSelect?h.style.MozUserSelect="none":h.style.cursor="default")};this.ResizeSignature=function(b,a){h.style.width=b+"px";h.style.height=a+"px";q.style.width=b+"px";if(isIE)e.style.width=b+"px",e.style.height=a+"px";else{var d=document.getElementById(this.SignObject);d.width=parseInt(b,0);d.height=parseInt(a,0);d.style.width=b+"px";d.style.height=a+"px"}this.ResetClick();this.SignWidth=b;this.SignHeight=a;B=
b;C=a};this.SignatureColor=function(b){Q=this.PenColor=b};this.SignatureBackColor=function(b){S=this.BackColor=b;isIE?e.style.backgroundColor=b:(e.fillStyle=b,e.fillRect(0,0,B,C))};this.SignaturePen=function(b){G=this.PenSize=b};this.SignatureEnabled=function(b){D=this.Enabled=b};this.SignatureStatusBar=function(b){b?$("#"+q.id).show("slow"):$("#"+q.id).hide("slow")};this.UndoSignature=function(){if(2>=E.length)this.ResetClick();else{E.pop();L.pop();r.pop();W.pop();m();var b="'"+A.value+"'";var a=
"",e=0;/[^A-Za-z0-9\+\/=]/g.exec(b);b=b.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));d=d<<2|c>>4;c=(c&15)<<4|f>>2;var g=(f&
3)<<6|h;a+=String.fromCharCode(d);64!=f&&(a+=String.fromCharCode(c));64!=h&&(a+=String.fromCharCode(g))}while(e<b.length);b=unescape(a);this.LoadSignature(b,1)}};this.LoadSignature=function(b,a){this.ResetClick();b=b.replace("undefined ","");b=b.replace("undefined","");if(null==a||"undefined"==a)a="1.0";a=parseFloat(a);v(h);var d=g(f(b)).split(";");E[0]="";for(var c=0;c<d.length-1;c++)E[c]=d[c]+";";for(c=0;c<d.length-1;c++){var H=g(f(d[c])).split(" ");3==H.length&&H[2]==H[1]&&H.pop();W[c]=H[0];L[c]=
new BezierCurves(p(H),30)}c=d[0].split(",");S=c[1];B=c[3];C=c[4];ja=c[5];0==P.length&&this.SignatureBackColor(S);r[0]=0;c=1;for(H=d.length;c<H-1;c++){var k=g(f(d[c])).split(" ");r[c]=parseInt(k.length,0)-1;r[0]=parseInt(r[0],0)+parseInt(k.length,0);for(var q=0,x=k.length;q<x;q++){var u=k[q].split(","),t=u[0];u=u[1];if(0==q)this.SignaturePen(t),this.SignatureColor(u),e.strokeStyle=u,e.lineWidth=t;else if(1==q){t=Math.abs(parseInt(t,0)*a);u=Math.abs(parseInt(u,0)*a);if(isIE)if(isMobileIE)U=t,V=u;else{var w=
'"m'+t+","+u+" l"+t+","+u,A='<SuperSignature:shape id="'+z+"_l_"+(c-1)+'" style="position: absolute; left:0px; top:0px; width:'+B+"px; height: "+C+'px;" coordsize="'+B+","+C+'"><SuperSignature:path v='+w+' e" /><SuperSignature:fill on="false" />'+('<SuperSignature:stroke weight="'+G+'" color="'+Q+'" />')+"</SuperSignature:shape>";e.pathCoordString=w;e.insertAdjacentHTML("beforeEnd",A)}else e.beginPath(),e.lineJoin="round",e.lineCap="round",e.moveTo(t,u);2==k.length&&eval("obj"+z).DrawDot(t,u)}else if(t=
Math.abs(parseInt(t,0)*a),u=Math.abs(parseInt(u,0)*a),isIE||da){if(e.pathCoordString+=" "+t+","+u,t=document.getElementById(z+"_l_"+(c-1)))if(t=t.firstChild)try{t.setAttribute("v",e.pathCoordString+" e")}catch(Ba){}}else e.strokeStyle=Q,e.lineWidth=G,e.lineTo(t,u),e.stroke(),e.moveTo(t,u);isIE?e.innerHTML=e.innerHTML:(e.closePath(),e.restore())}y++}!isIE&&da&&l(a);m()};this.TextSignature=function(b,a,c,d){Z&&(e.font=b,e.fillText(a,c,d))};this.CheckCompatibility=function(){if(isIE)this.IsCompatible=
!0,isMobileIE||document.namespaces.SuperSignature||document.namespaces.add("SuperSignature","urn:schemas-microsoft-com:vml","#default#VML");else{try{Z=!!document.createElement("canvas").getContext("2d")}catch(b){Z=!!document.createElement("canvas").getContext}Z?this.IsCompatible=!0:document.write("Your browser does not support our signature control.")}};this.MouseMove=function(b){if(D&&ka){"undefined"!==typeof b.originalEvent&&(b=b.originalEvent);I(b);var a=$("#"+h.id).offset();if(x&&"undefined"!==
typeof b.targetTouches){var c=b.targetTouches[0];var f=c.clientX-ha;c=c.clientY-fa;X&&(c-=parseInt($(document).scrollTop()),f-=parseInt($(document).scrollLeft()))}else b.originalEvent?b.pageX?(f=parseInt(b.pageX-a.left),c=parseInt(b.pageY-a.top)):(f=parseInt(b.originalEvent.pageX-a.left),c=parseInt(b.originalEvent.pageY-a.top)):isIE||isIENine?(f=parseInt(b.x),c=parseInt(b.y),9<=iever&&(f=parseInt(b.pageX-a.left),c=parseInt(b.pageY-a.top))):(f=parseInt(b.pageX-a.left),c=parseInt(b.pageY-a.top));ba&&
ca&&(f=parseInt(b.offsetX||b.layerX),c=parseInt(b.offsetY||b.layerY));(Y||aa)&&-1==b.type.indexOf("touch")&&(f=b.clientX-K.getBoundingClientRect().left,c=b.clientY-K.getBoundingClientRect().top);isMobileIE?F.push(Math.abs(parseInt(f)-parseInt(h.offsetLeft))+","+Math.abs(parseInt(c)-parseInt(h.offsetTop))):F.push(Math.abs(parseInt(f))+","+Math.abs(parseInt(c)));r[y]++;if(isIE)if(isMobileIE){if(b=f-U,a=c-V,64<b*b+a*a){if(null!=w&&"undefined"!=w)try{w.setStroke(G),w.setColor(Q),w.drawLine(U,V,f,c),w.paint()}catch(la){d("Drawing error: "+
la.description)}else d("Graphics object NULL");U=f;V=c}}else{if(e.pathCoordString+=" "+f+","+c,f=document.getElementById(z+"_l_"+y))if(f=f.firstChild){try{f.setAttribute("v",e.pathCoordString+" e")}catch(la){}qa&&0==r[y]%8&&(e.innerHTML=e.innerHTML)}}else e.lineTo(f,c),e.stroke()}};this.DrawDot=function(b,a){r[y]++;isIE?e.insertAdjacentHTML("beforeEnd",'<SuperSignature:oval id="'+z+"_l_"+y+'" style="position: absolute; left:'+b+"px; top:"+a+"px; width:"+G+"px; height: "+G+'px;"">'+('<SuperSignature:stroke weight="'+
G+'" color="'+Q+'" />')+"</SuperSignature:oval>"):(e.arc(b,a,G/2,0,2*Math.PI,!1),e.fill(),e.stroke())};this.MouseOut=function(b){D&&(I(b),d("Mouse out"),ea||T())};this.MouseUp=function(b){if(D){"undefined"!==typeof b.originalEvent&&(b=b.originalEvent);I(b);d("Mouse up");if(null!=ia){var a=parseInt(new Date-ia);if(125>a){d("Time diff "+a);if(x)a=sa,b=ta;else{var c=$("#"+h.id).offset();b.originalEvent?b.pageX?(a=parseInt(b.pageX-c.left),b=parseInt(b.pageY-c.top)):(a=parseInt(b.originalEvent.pageX-c.left),
b=parseInt(b.originalEvent.pageY-c.top)):isIE||isIENine?(a=parseInt(b.x),b=parseInt(b.y)):(a=parseInt(b.pageX-c.left),b=parseInt(b.pageY-c.top))}isIE&&(d("Drawing Dot At ("+a+","+b+")"),eval("obj"+z).DrawDot(a,b))}ia=null}ea||T()}};this.MouseDown=function(a){if(D){"undefined"!==typeof a.originalEvent&&(a=a.originalEvent);I(a);ia=new Date;ka=!0;ea=!1;if(x&&"undefined"!==typeof a.targetTouches){var b=a.targetTouches[0];ha=K.getBoundingClientRect().left;fa=K.getBoundingClientRect().top;var c=b.clientX-
ha;b=b.clientY-fa;X&&(b-=parseInt($(document).scrollTop()),c-=parseInt($(document).scrollLeft()));sa=c;ta=b}else{var f=$("#"+h.id).offset();a.originalEvent?a.pageX?(c=parseInt(a.pageX-f.left),b=parseInt(a.pageY-f.top)):(c=parseInt(a.originalEvent.pageX-f.left),b=parseInt(a.originalEvent.pageY-f.top)):isIE||isIENine?9>iever?(c=parseInt(a.x),b=parseInt(a.y)):isIENine&&(c=parseInt(a.pageX)-parseInt(f.left)+parseInt($("html").css("margin-left")),b=parseInt(a.pageY)-parseInt(f.top)+parseInt($("html").css("margin-top")),
10<=iever&&(c=parseInt(a.pageX-f.left),b=parseInt(a.pageY-f.top))):(c=parseInt(a.pageX-f.left),b=parseInt(a.pageY-f.top))}ba&&ca&&(c=parseInt(a.offsetX||a.layerX),b=parseInt(a.offsetY||a.layerY));(Y||aa)&&-1==a.type.indexOf("touch")&&(c=a.clientX-K.getBoundingClientRect().left,b=a.clientY-K.getBoundingClientRect().top);d("Down ("+c+","+b+")");y++;r[y]=0;F.length=0;F[0]=G+","+Q;isMobileIE?F.push(Math.abs(parseInt(c)-parseInt(h.offsetLeft))+","+Math.abs(parseInt(b)-parseInt(h.offsetTop))):F.push(Math.abs(parseInt(c))+
","+Math.abs(parseInt(b)));isIE?isMobileIE?(U=c,V=b):(a='"m'+c+","+b+" l"+c+","+b,c='<SuperSignature:shape id="'+z+"_l_"+y+'" style="position: absolute; left:0px; top:0px; width:'+B+"px; height: "+C+'px;" coordsize="'+B+","+C+'"><SuperSignature:path v='+a+' e" /><SuperSignature:fill on="false" />'+('<SuperSignature:stroke weight="'+G+'" color="'+Q+'" />')+"</SuperSignature:shape>",e.pathCoordString=a,e.insertAdjacentHTML("beforeEnd",c)):(e.save(),e.beginPath(),e.lineJoin="round",e.lineCap="round",
e.strokeStyle=Q,e.lineWidth=G,e.moveTo(c,b));return!1}};this.ResetClick=function(a){D&&(isMobileIE||(document.getElementById(z).style.borderColor=za),isIE?(e.innerHTML="",isMobileIE&&(V=U=0,null!=w&&"undefined"!=w&&(w.clear(),w.paint())),0<P.length&&(e.style.backgroundImage='url("'+P+'")')):(e.clearRect(0,0,B,C),0<P.length?isIE?e.style.backgroundImage='url("'+P+'")':(a=new Image,$(a).bind("load",function(){e.drawImage(this,0,0)}),a.src=P):SignatureBackColor(z,S)),E=[],F=[],r=[],L=[],W=[],m(),y=0,
M.innerHTML=ra)};this.Init=function(){if(this.Visible){if(this.CheckCompatibility(),this.IsCompatible){if(Z){if("DIV"==document.getElementById(this.SignObject).nodeName.toUpperCase()){var a="<canvas ID='"+this.SignObject+"' width='"+B+"' height='"+C+"' style='left:0px;top:0px;position:absolute;'></canvas>";$("#"+this.SignObject).replaceWith(a);d("DIV changed to CANVAS");isIE=!1}}else"CANVAS"==document.getElementById(this.SignObject).nodeName.toUpperCase()&&(a="<div ID='"+this.SignObject+"' style='width:"+
B+"px;height:"+C+"px;left:0px;top:0px;'></div>",$("#"+this.SignObject).replaceWith(a),d("CANVAS changed to DIV"),isIE=!0);R=document.getElementById(this.SignObject+"_Debug");e=document.getElementById(this.SignObject);h=document.getElementById(this.SignObject+"_Container");if(e.addEventListener)d("addEventListener supported");else if(e.attachEvent)d("attachEvent supported");else{d("Mouse events are not supported");return}this.mouseMoved=!1;if(null!=e&&"undefined"!=e){d("Objects OK");isIE&&!isMobileIE&&
(qa=document.documentMode?8<=document.documentMode:!1);isMobileIE&&d("Mobile IE");isIENine&&d("IE 9 Or Above");isOperaMini&&d("Opera Mini, not supported.");r[0]=0;E[0]="1,"+S+","+pa+","+B+","+C+","+ja+","+r[0]+","+z+";";if(this.ApplyStyle){d("Setting up style");h.style.zIndex=this.SignzIndex;try{isMobileIE?(h.style.borderWidth=this.BorderWidth,h.style.borderStyle=this.BorderStyle,h.style.borderColor=this.BorderColor,h.style.backgroundColor=this.BackColor,0<this.PenCursor.length&&(h.style.cursor="url('"+
this.PenCursor+"'), pointer"),0<this.BackImageUrl.length&&(h.style.backgroundImage='url("'+this.BackImageUrl+'")')):(e.style.borderWidth=this.BorderWidth,e.style.borderStyle=this.BorderStyle,e.style.borderColor=this.BorderColor,e.style.backgroundColor=this.BackColor,0<this.PenCursor.length&&(e.style.cursor="url('"+this.PenCursor+"'), pointer"),0<this.BackImageUrl.length&&(e.style.backgroundImage='url("'+this.BackImageUrl+'")'),""!=this.CssClass&&(e.className=this.CssClass),e.style.width=this.SignWidth+
"px",e.style.height=this.SignHeight+"px","auto"==e.style.cursor&&(e.style.cursor="url('"+this.PenCursor+"'), hand")),d("Style OK")}catch(wa){d("Style Error : "+wa.description)}}a='<div id="'+this.SignObject+'_toolbar" style="margin:5px;position:relative;height:20px;width:'+this.SignWidth+"px;background-color:"+this.SignToolbarBgColor+';"><img  id="'+this.SignObject+'_resetbutton" src="'+this.ClearImage+'" style="cursor:pointer;float:right;height:24px;width:24px;border:0px solid transparent" alt="Clear Signature" />';
a+='<div id="'+this.SignObject+'_status" style="color:blue;height:20px;width:auto;padding:2px;font-family:verdana;font-size:12px;float:left;margin-right:30px;">'+this.StartMessage+"</div>";a+=null==document.getElementById(this.SignObject+"_data")?'<input type="hidden" id="'+this.SignObject+'_data" name="'+this.SignObject+'_data" value="">':"";a+=null==document.getElementById(this.SignObject+"_data_smooth")?'<input type="hidden" id="'+this.SignObject+'_data_smooth" name="'+this.SignObject+'_data_smooth" value="">':
"";a+=null==document.getElementById(this.SignObject+"_data_canvas")?'<input type="hidden" id="'+this.SignObject+'_data_canvas" name="'+this.SignObject+'_data_canvas" value="">':"";a+="</div>";d("Setting up tools");$("#"+h.id).after(a);y=0;a="mousedown";var c="mouseup",f="mousemove",g="mouseout";isIE&&(g="mouseleave");window.PointerEvent&&(d("Pointer events supported"),isPointer=!0,a="pointerdown",c="pointerup",f="pointermove",g="pointerleave");x=/iPhone/i.test(navigator.userAgent)||/iPad/i.test(navigator.userAgent)||
/Android/i.test(navigator.userAgent)||/playbook/i.test(navigator.userAgent)||/symbian/i.test(navigator.userAgent);x||isIE||(x="ontouchstart"in window,d("Touch check "+x));isIETablet&&d("Found Tablet 2.0 or Windows Phone or Touch Screen Device");winTabletPointerEvt?(d("MSPointer supported"),a="MSPointerDown",c="MSPointerUp",f="MSPointerMove",g="MSPointerOut"):d("MSPointer NOT supported");"undefined"!=typeof e.style.msTouchAction&&(e.style.msTouchAction="none",$("#"+e.id).css("-ms-touch-action","none"),
d("MS Touch CSS added"));"undefined"!=typeof h.style.msTouchAction&&(h.style.msTouchAction="none",$("#"+h.id).css("-ms-touch-action","none"));isIE||(K=document.getElementById(this.SignObject),e=document.getElementById(this.SignObject).getContext("2d"),e.width=this.SignWidth,e.height=this.SignHeight);M=document.getElementById(this.SignObject+"_status");M.innerHTML=ra;q=document.getElementById(this.SignObject+"_toolbar");A=document.getElementById(this.SignObject+"_data");N=document.getElementById(this.SignObject+
"_data_smooth");O=document.getElementById(this.SignObject+"_data_canvas");var k=document.getElementById(this.SignObject+"_resetbutton");null!=k&&this.XBrowserAddHandler(k,"click",this.ResetClick);d("Attaching events");ba=/Tablet PC 2.0/i.test(navigator.userAgent);ca=/rv:11.0/i.test(navigator.userAgent);ua=/Edge/i.test(navigator.userAgent);ba&&ca&&d("IE Surface Fix");k=/Windows NT/i.test(navigator.userAgent);var l=/Chrome/i.test(navigator.userAgent);Y=k&&l;ua&&(Y=!1,aa=!0);k&&ba&&ca&&(aa=!0);Y&&(d("Chrome Surface Fix"),
X=this.IeModalFix=!1);aa&&(d("EDGE Surface Fix"),X=this.IeModalFix=!1);this.XBrowserAddHandler(e,"contextmenu",this.ReturnFalse);this.XBrowserAddHandler(h,"contextmenu",this.ReturnFalse);this.XBrowserAddHandler(h,"contextmenu",this.ReturnFalse);this.XBrowserAddHandler(h,"selectstart",this.ReturnFalse);this.XBrowserAddHandler(h,"dragstart",this.ReturnFalse);this.XBrowserAddHandler(e,"contextmenu",this.ReturnFalse);this.XBrowserAddHandler(e,"selectstart",this.ReturnFalse);this.XBrowserAddHandler(e,
"dragstart",this.ReturnFalse);this.IeModalFix&&d("IeModalFix true");!this.IeModalFix||x||isIETablet?(isIE&&!isMobileIE?(this.XBrowserAddHandler(e,a,this.MouseDown),this.XBrowserAddHandler(e,c,this.MouseUp),this.XBrowserAddHandler(e,f,this.MouseMove)):(this.XBrowserAddHandler(h,a,this.MouseDown),this.XBrowserAddHandler(h,c,this.MouseUp),this.XBrowserAddHandler(h,f,this.MouseMove),this.XBrowserAddHandler(h,g,this.MouseOut)),this.XBrowserAddHandler(e,g,this.MouseOut)):(this.XBrowserAddHandler(h,a,this.MouseDown),
this.XBrowserAddHandler(h,c,this.MouseUp),this.XBrowserAddHandler(h,f,this.MouseMove),this.XBrowserAddHandler(h,g,this.MouseOut),d("ModalFix event attached"));x&&(d("Found iPhone, iPad, Android or Touch Screen Device"),this.XBrowserAddHandler(h,"touchstart",this.MouseDown),this.XBrowserAddHandler(h,"touchend",this.MouseUp),this.XBrowserAddHandler(h,"touchmove",this.MouseMove));Aa&&(d("Attaching jQuery Events"),$(h).bind(a,this.MouseDown),$(h).bind(c,this.MouseUp),$(h).bind(f,this.MouseMove),x||$(h).bind(g,
this.MouseOut));d("isIE "+isIE);d("isIE 9+ "+isIENine);(isIE||isIENine||isIETablet)&&d("IE Ver - "+iever);supports_canvas()&&d("Canvas - Yes");D||d("Control is disabled");d("Ready")}else d("Error initializing signature control")}}else d("Control hidden")}}
BezierCurves=function(a,c){if(2>a.length)return a[0];this.points=[];for(var f=0;f<a.length;f++){var g=new Smooth(a[f].x,a[f].y);g.CheckValid(d)||this.points.push(g);var d=g;this.offSet=0;this.error=c;this.result=[];this.result.push({x:a[0].x,y:a[0].y+this.offSet})}return 1==this.points.length?a[0]:this.fit()};
BezierCurves.prototype={fit:function(){this.processFitPoints(0,this.points.length-1,this.points[1].MathFunc2(this.points[0]).nOR(),this.points[this.points.length-2].MathFunc2(this.points[this.points.length-1]).nOR());return this.result},processFitPoints:function(a,c,f,g){var d,k,m;if(1==c-a){a=this.points[a];c=this.points[c];var p=a.MathFunc6(c)/3;this.savePoints([a,a.MathFunc1(f.nOR(p)),c.MathFunc1(g.nOR(p)),c])}else{var l=this.cLP(a,c);var v=Math.max(this.error,this.error*this.error);for(d=0;4>=
d;d++){if(k=this.gB(a,c,l,f,g),m=this.fM(a,c,k,l),m.error<this.error){this.savePoints(k);return}if(p=m.index,m.error>=v)break;this.rP(a,c,l,k);v=m.error}l=this.points[p-1].MathFunc2(this.points[p]);v=this.points[p].MathFunc2(this.points[p+1]);l=l.MathFunc1(v).MathFunc4(2).nOR();this.processFitPoints(a,p,f,l);this.processFitPoints(p,c,l.MathFunc5(),g)}},savePoints:function(a){this.result.push({x:this.r2(a[1].x),y:this.r2(a[1].y+this.offSet)});this.result.push({x:this.r2(a[2].x),y:this.r2(a[2].y+this.offSet)});
this.result.push({x:this.r2(a[3].x),y:this.r2(a[3].y+this.offSet)})},r2:function(a){return Math.round(100*a)/100},gB:function(a,c,f,g,d){var k=1E-11,m=this.points[a],p=this.points[c],l=[[0,0],[0,0]],v=[0,0],T,I,J,y,x,e,K,h,M=0;for(c=c-a+1;M<c;M++){var q=f[M],A=1-q,N=3*q*A,O=A*A*A;A*=N;N*=q;var R=q*q*q;q=g.nOR(A);var D=d.nOR(N);O=this.points[a+M].MathFunc2(m.MathFunc3(O+A)).MathFunc2(p.MathFunc3(N+R));l[0][0]+=q.dot(q);l[0][1]+=q.dot(D);l[1][0]=l[0][1];l[1][1]+=D.dot(D);v[0]+=q.dot(O);v[1]+=D.dot(O)}return T=
l[0][0]*l[1][1]-l[1][0]*l[0][1],Math.abs(T)>k?(y=l[0][0]*v[1]-l[1][0]*v[0],x=v[0]*l[1][1]-v[1]*l[0][1],I=x/T,J=y/T):(e=l[0][0]+l[0][1],K=l[1][0]+l[1][1],I=Math.abs(e)>k?J=v[0]/e:Math.abs(e)>k?J=v[1]/K:J=0),h=p.MathFunc6(m),k*=h,(I<k||J<k)&&(I=J=h/3),[m,m.MathFunc1(g.nOR(I)),p.MathFunc1(d.nOR(J)),p]},rP:function(a,c,f,g){for(var d=a;d<=c;d++)f[d-a]=this.fR(g,this.points[d],f[d-a])},fR:function(a,c,f){for(var g=[],d=[],k=0;2>=k;k++)g[k]=a[k+1].MathFunc2(a[k]).MathFunc3(3);for(k=0;1>=k;k++)d[k]=g[k+
1].MathFunc2(g[k]).MathFunc3(2);a=this.eV(3,a,f);g=this.eV(2,g,f);d=this.eV(1,d,f);c=a.MathFunc2(c);d=g.dot(g)+c.dot(d);return 1E-5>Math.abs(d)?f:f-c.dot(g)/d},eV:function(a,c,f){c=c.slice();for(var g,d=1;d<=a;d++)for(g=0;g<=a-d;g++)c[g]=c[g].MathFunc3(1-f).MathFunc1(c[g+1].MathFunc3(f));return c[0]},cLP:function(a,c){for(var f=[0],g,d=a+1;d<=c;d++)f[d-a]=f[d-a-1]+this.points[d].MathFunc6(this.points[d-1]);d=1;for(g=c-a;d<=g;d++)f[d]/=f[g];return f},fM:function(a,c,f,g){for(var d=Math.floor((c-a+
1)/2),k=0,m=a+1;m<c;m++){var p=this.eV(3,f,g[m-a]).MathFunc2(this.points[m]);p=p.x*p.x+p.y*p.y;p>=k&&(k=p,d=m)}return{error:k,index:d}}};Smooth=function(a,c){this.x=a;this.y=c};
Smooth.prototype={CheckPtArray:function(a){return"number"==typeof a?{x:a,y:a}:a},MathFunc1:function(a){a=this.CheckPtArray(a);return SmoothRet(this.x+a.x,this.y+a.y)},MathFunc2:function(a){a=this.CheckPtArray(a);return SmoothRet(this.x-a.x,this.y-a.y)},MathFunc3:function(a){a=this.CheckPtArray(a);return SmoothRet(this.x*a.x,this.y*a.y)},MathFunc4:function(a){a=this.CheckPtArray(a);return SmoothRet(this.x/a.x,this.y/a.y)},MathFunc5:function(){return SmoothRet(-this.x,-this.y)},MathFunc6:function(a,
c){var f=a.x-this.x,g=a.y-this.y;f=f*f+g*g;return c?f:Math.sqrt(f)},getLength:function(a){var c=this.x*this.x+this.y*this.y;return a?c:Math.sqrt(c)},nOR:function(a){void 0===a&&(a=1);var c=this.getLength();a=0!=c?a/c:0;return SmoothRet(this.x*a,this.y*a)},CheckValid:function(a){return null==a?!1:this.x==a.x&&this.y==a.y},dot:function(a){return this.x*a.x+this.y*a.y}};var SmoothRet=function(a,c){return new Smooth(a,c)};
Compress=function(a,c){var f=0,g=0,d=a.length,k="",m;c=Math.pow(10,c);for(m=0;m<d;m++){var p=Math.round(a[m].y*c);var l=Math.round(a[m].x*c);k+=EncodeStr(p-f);k+=EncodeStr(l-g);f=p;g=l}f=[["?","0"],["@","1"],["[","2"],["\\","3"],["]","4"],["^","5"],["`","6"],["{","7"],["|","8"],["}","9"]];for(m=0;m<f.length;m++)k=k.replaceAll(f[m][0],f[m][1]);return k};EncodeStr=function(a){a<<=1;var c;0>a&&(a=~a);for(c="";32<=a;)c+=String.fromCharCode((32|a&31)+63),a>>=5;return c+String.fromCharCode(a+63)};
String.prototype.replaceAll=function(a,c,f){return this.replace(new RegExp(a.replace(/([\/,!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-&])/g,"\\$&"),f?"gi":"g"),"string"==typeof c?c.replace(/\$/g,"$$$$"):c)};