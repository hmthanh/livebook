import{a as bt,b as kt}from"./chunk-ZXE6G655.js";import{a as mt,b as z,d as H,e as Y,f as _,g as X,h as b,i as F}from"./chunk-4RJ53EDP.js";import"./chunk-DV6EV644.js";import"./chunk-DJBS3ZP5.js";import"./chunk-2VAHKEM3.js";import"./chunk-GT6PWSKZ.js";import{a as xt,b as wt}from"./chunk-N4T7OBQH.js";import{D as gt,h as G,j as it,p as w,x as yt,y as vt}from"./chunk-I4NDSNS6.js";import{A as ft,D as te,Fa as Q,Ga as J,g as jt,ha as I,ja as ot,l as y,la as lt,m as ut,o as ht,ra as q,ta as St,z as R}from"./chunk-CRHZHETQ.js";import"./chunk-HA3AQNT4.js";import{h as pt}from"./chunk-2YVZDWG7.js";var K={normal:ee,vee:re,undirected:ae};function _t(r){K=r}function ee(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");_(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function re(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");_(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function ae(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");_(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function Lt(r,e){var t=r;return t.node().appendChild(e.label),_(t,e.labelStyle),t}function Et(r,e){for(var t=r.append("text"),n=ne(e.label).split(`
`),a=0;a<n.length;a++)t.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(n[a]);return _(t,e.labelStyle),t}function ne(r){for(var e="",t=!1,n,a=0;a<r.length;++a)if(n=r[a],t){switch(n){case"n":e+=`
`;break;default:e+=n}t=!1}else n==="\\"?t=!0:e+=n;return e}function U(r,e,t){var n=e.label,a=r.append("g");e.labelType==="svg"?Lt(a,e):typeof n!="string"||e.labelType==="html"?F(a,e):Et(a,e);var s=a.node().getBBox(),i;switch(t){case"top":i=-e.height/2;break;case"bottom":i=e.height/2-s.height;break;default:i=-s.height/2}return a.attr("transform","translate("+-s.width/2+","+i+")"),a}var Z=function(r,e){var t=e.nodes().filter(function(s){return H(e,s)}),n=r.selectAll("g.cluster").data(t,function(s){return s});b(n.exit(),e).style("opacity",0).remove();var a=n.enter().append("g").attr("class","cluster").attr("id",function(s){var i=e.node(s);return i.id}).style("opacity",0).each(function(s){var i=e.node(s),o=y(this);y(this).append("rect");var c=o.append("g").attr("class","label");U(c,i,i.clusterLabelPos)});return n=n.merge(a),n=b(n,e).style("opacity",1),n.selectAll("rect").each(function(s){var i=e.node(s),o=y(this);_(o,i.style)}),n};function Tt(r){Z=r}var j=function(r,e){var t=r.selectAll("g.edgeLabel").data(e.edges(),function(a){return Y(a)}).classed("update",!0);t.exit().remove(),t.enter().append("g").classed("edgeLabel",!0).style("opacity",0),t=r.selectAll("g.edgeLabel"),t.each(function(a){var s=y(this);s.select(".label").remove();var i=e.edge(a),o=U(s,e.edge(a),0).classed("label",!0),c=o.node().getBBox();i.labelId&&o.attr("id",i.labelId),w(i,"width")||(i.width=c.width),w(i,"height")||(i.height=c.height)});var n;return t.exit?n=t.exit():n=t.selectAll(null),b(n,e).style("opacity",0).remove(),t};function Nt(r){j=r}function ct(r,e){return r.intersect(e)}var tt=function(r,e,t){var n=r.selectAll("g.edgePath").data(e.edges(),function(i){return Y(i)}).classed("update",!0),a=ce(n,e);de(n,e);var s=n.merge!==void 0?n.merge(a):n;return b(s,e).style("opacity",1),s.each(function(i){var o=y(this),c=e.edge(i);c.elem=this,c.id&&o.attr("id",c.id),X(o,c.class,(o.classed("update")?"update ":"")+"edgePath")}),s.selectAll("path.path").each(function(i){var o=e.edge(i);o.arrowheadId=gt("arrowhead");var c=y(this).attr("marker-end",function(){return"url("+ie(location.href,o.arrowheadId)+")"}).style("fill","none");b(c,e).attr("d",function(d){return oe(e,d)}),_(c,o.style)}),s.selectAll("defs *").remove(),s.selectAll("defs").each(function(i){var o=e.edge(i),c=t[o.arrowhead];c(y(this),o.arrowheadId,o,"arrowhead")}),s};function Ct(r){tt=r}function ie(r,e){var t=r.split("#")[0];return t+"#"+e}function oe(r,e){var t=r.edge(e),n=r.node(e.v),a=r.node(e.w),s=t.points.slice(1,t.points.length-1);return s.unshift(ct(n,s[0])),s.push(ct(a,s[s.length-1])),At(t,s)}function At(r,e){var t=(ft||ht.line)().x(function(n){return n.x}).y(function(n){return n.y});return(t.curve||t.interpolate)(r.curve),t(e)}function le(r){var e=r.getBBox(),t=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width/2,e.height/2);return{x:t.e,y:t.f}}function ce(r,e){var t=r.enter().append("g").attr("class","edgePath").style("opacity",0);return t.append("path").attr("class","path").attr("d",function(n){var a=e.edge(n),s=e.node(n.v).elem,i=vt(a.points.length).map(function(){return le(s)});return At(a,i)}),t.append("defs"),t}function de(r,e){var t=r.exit();b(t,e).style("opacity",0).remove()}var et=function(r,e,t){var n=e.nodes().filter(function(i){return!H(e,i)}),a=r.selectAll("g.node").data(n,function(i){return i}).classed("update",!0);a.exit().remove(),a.enter().append("g").attr("class","node").style("opacity",0),a=r.selectAll("g.node"),a.each(function(i){var o=e.node(i),c=y(this);X(c,o.class,(c.classed("update")?"update ":"")+"node"),c.select("g.label").remove();var d=c.append("g").attr("class","label"),l=U(d,o),m=t[o.shape],p=yt(l.node().getBBox(),"width","height");o.elem=this,o.id&&c.attr("id",o.id),o.labelId&&d.attr("id",o.labelId),w(o,"width")&&(p.width=o.width),w(o,"height")&&(p.height=o.height),p.width+=o.paddingLeft+o.paddingRight,p.height+=o.paddingTop+o.paddingBottom,d.attr("transform","translate("+(o.paddingLeft-o.paddingRight)/2+","+(o.paddingTop-o.paddingBottom)/2+")");var u=y(this);u.select(".label-container").remove();var f=m(u,p,o).classed("label-container",!0);_(f,o.style);var x=f.node().getBBox();o.width=x.width,o.height=x.height});var s;return a.exit?s=a.exit():s=a.selectAll(null),b(s,e).style("opacity",0).remove(),a};function It(r){et=r}function Bt(r,e){var t=r.filter(function(){return!y(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),b(r,e).style("opacity",1).attr("transform",n),b(t.selectAll("rect"),e).attr("width",function(a){return e.node(a).width}).attr("height",function(a){return e.node(a).height}).attr("x",function(a){var s=e.node(a);return-s.width/2}).attr("y",function(a){var s=e.node(a);return-s.height/2})}function Mt(r,e){var t=r.filter(function(){return!y(this).classed("update")});function n(a){var s=e.edge(a);return w(s,"x")?"translate("+s.x+","+s.y+")":""}t.attr("transform",n),b(r,e).style("opacity",1).attr("transform",n)}function Pt(r,e){var t=r.filter(function(){return!y(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),b(r,e).style("opacity",1).attr("transform",n)}function rt(r,e,t,n){var a=r.x,s=r.y,i=a-n.x,o=s-n.y,c=Math.sqrt(e*e*o*o+t*t*i*i),d=Math.abs(e*t*i/c);n.x<a&&(d=-d);var l=Math.abs(e*t*o/c);return n.y<s&&(l=-l),{x:a+d,y:s+l}}function Dt(r,e,t){return rt(r,e,e,t)}function Gt(r,e,t,n){var a,s,i,o,c,d,l,m,p,u,f,x,h,v,L;if(a=e.y-r.y,i=r.x-e.x,c=e.x*r.y-r.x*e.y,p=a*t.x+i*t.y+c,u=a*n.x+i*n.y+c,!(p!==0&&u!==0&&Rt(p,u))&&(s=n.y-t.y,o=t.x-n.x,d=n.x*t.y-t.x*n.y,l=s*r.x+o*r.y+d,m=s*e.x+o*e.y+d,!(l!==0&&m!==0&&Rt(l,m))&&(f=a*o-s*i,f!==0)))return x=Math.abs(f/2),h=i*d-o*c,v=h<0?(h-x)/f:(h+x)/f,h=s*c-a*d,L=h<0?(h-x)/f:(h+x)/f,{x:v,y:L}}function Rt(r,e){return r*e>0}function T(r,e,t){var n=r.x,a=r.y,s=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(f){i=Math.min(i,f.x),o=Math.min(o,f.y)});for(var c=n-r.width/2-i,d=a-r.height/2-o,l=0;l<e.length;l++){var m=e[l],p=e[l<e.length-1?l+1:0],u=Gt(r,t,{x:c+m.x,y:d+m.y},{x:c+p.x,y:d+p.y});u&&s.push(u)}return s.length?(s.length>1&&s.sort(function(f,x){var h=f.x-t.x,v=f.y-t.y,L=Math.sqrt(h*h+v*v),P=x.x-t.x,N=x.y-t.y,nt=Math.sqrt(P*P+N*N);return L<nt?-1:L===nt?0:1}),s[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",r),r)}function W(r,e){var t=r.x,n=r.y,a=e.x-t,s=e.y-n,i=r.width/2,o=r.height/2,c,d;return Math.abs(s)*i>Math.abs(a)*o?(s<0&&(o=-o),c=s===0?0:o*a/s,d=o):(a<0&&(i=-i),c=i,d=a===0?0:i*s/a),{x:t+c,y:n+d}}var at={rect:me,ellipse:ye,circle:ve,diamond:ge};function Ut(r){at=r}function me(r,e,t){var n=r.insert("rect",":first-child").attr("rx",t.rx).attr("ry",t.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return t.intersect=function(a){return W(t,a)},n}function ye(r,e,t){var n=e.width/2,a=e.height/2,s=r.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",n).attr("ry",a);return t.intersect=function(i){return rt(t,n,a,i)},s}function ve(r,e,t){var n=Math.max(e.width,e.height)/2,a=r.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",n);return t.intersect=function(s){return Dt(t,n,s)},a}function ge(r,e,t){var n=e.width*Math.SQRT2/2,a=e.height*Math.SQRT2/2,s=[{x:0,y:-a},{x:-n,y:0},{x:0,y:a},{x:n,y:0}],i=r.insert("polygon",":first-child").attr("points",s.map(function(o){return o.x+","+o.y}).join(" "));return t.intersect=function(o){return T(t,s,o)},i}function dt(){var r=function(e,t){be(t);var n=V(e,"output"),a=V(n,"clusters"),s=V(n,"edgePaths"),i=j(V(n,"edgeLabels"),t),o=et(V(n,"nodes"),t,at);wt(t),Pt(o,t),Mt(i,t),tt(s,t,K);var c=Z(a,t);Bt(c,t),ke(t)};return r.createNodes=function(e){return arguments.length?(It(e),r):et},r.createClusters=function(e){return arguments.length?(Tt(e),r):Z},r.createEdgeLabels=function(e){return arguments.length?(Nt(e),r):j},r.createEdgePaths=function(e){return arguments.length?(Ct(e),r):tt},r.shapes=function(e){return arguments.length?(Ut(e),r):at},r.arrows=function(e){return arguments.length?(_t(e),r):K},r}var xe={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},we={arrowhead:"normal",curve:R};function be(r){r.nodes().forEach(function(e){var t=r.node(e);!w(t,"label")&&!r.children(e).length&&(t.label=e),w(t,"paddingX")&&G(t,{paddingLeft:t.paddingX,paddingRight:t.paddingX}),w(t,"paddingY")&&G(t,{paddingTop:t.paddingY,paddingBottom:t.paddingY}),w(t,"padding")&&G(t,{paddingLeft:t.padding,paddingRight:t.padding,paddingTop:t.padding,paddingBottom:t.padding}),G(t,xe),it(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(n){t[n]=Number(t[n])}),w(t,"width")&&(t._prevWidth=t.width),w(t,"height")&&(t._prevHeight=t.height)}),r.edges().forEach(function(e){var t=r.edge(e);w(t,"label")||(t.label=""),G(t,we)})}function ke(r){it(r.nodes(),function(e){var t=r.node(e);w(t,"_prevWidth")?t.width=t._prevWidth:delete t.width,w(t,"_prevHeight")?t.height=t._prevHeight:delete t.height,delete t._prevWidth,delete t._prevHeight})}function V(r,e){var t=r.select("g."+e);return t.empty()&&(t=r.append("g").attr("class",e)),t}var Nr=pt(jt(),1),Cr=pt(te(),1);function Wt(r,e,t){let n=e.width,a=e.height,s=(n+a)*.9,i=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}],o=A(r,s,s,i);return t.intersect=function(c){return T(t,i,c)},o}function Vt(r,e,t){let a=e.height,s=a/4,i=e.width+2*s,o=[{x:s,y:0},{x:i-s,y:0},{x:i,y:-a/2},{x:i-s,y:-a},{x:s,y:-a},{x:0,y:-a/2}],c=A(r,i,a,o);return t.intersect=function(d){return T(t,o,d)},c}function $t(r,e,t){let n=e.width,a=e.height,s=[{x:-a/2,y:0},{x:n,y:0},{x:n,y:-a},{x:-a/2,y:-a},{x:0,y:-a/2}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function zt(r,e,t){let n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function Ht(r,e,t){let n=e.width,a=e.height,s=[{x:2*a/6,y:0},{x:n+a/6,y:0},{x:n-2*a/6,y:-a},{x:-a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function Yt(r,e,t){let n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n+2*a/6,y:0},{x:n-a/6,y:-a},{x:a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function Xt(r,e,t){let n=e.width,a=e.height,s=[{x:a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:-2*a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function Ft(r,e,t){let n=e.width,a=e.height,s=[{x:0,y:0},{x:n+a/2,y:0},{x:n,y:-a/2},{x:n+a/2,y:-a},{x:0,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function qt(r,e,t){let n=e.height,a=e.width+n/4,s=r.insert("rect",":first-child").attr("rx",n/2).attr("ry",n/2).attr("x",-a/2).attr("y",-n/2).attr("width",a).attr("height",n);return t.intersect=function(i){return W(t,i)},s}function Qt(r,e,t){let n=e.width,a=e.height,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-a},{x:0,y:-a},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-a},{x:-8,y:-a},{x:-8,y:0}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function Jt(r,e,t){let n=e.width,a=n/2,s=a/(2.5+n/50),i=e.height+s,o="M 0,"+s+" a "+a+","+s+" 0,0,0 "+n+" 0 a "+a+","+s+" 0,0,0 "+-n+" 0 l 0,"+i+" a "+a+","+s+" 0,0,0 "+n+" 0 l 0,"+-i,c=r.attr("label-offset-y",s).insert("path",":first-child").attr("d",o).attr("transform","translate("+-n/2+","+-(i/2+s)+")");return t.intersect=function(d){let l=W(t,d),m=l.x-t.x;if(a!=0&&(Math.abs(m)<t.width/2||Math.abs(m)==t.width/2&&Math.abs(l.y-t.y)>t.height/2-s)){let p=s*s*(1-m*m/(a*a));p!=0&&(p=Math.sqrt(p)),p=s-p,d.y-t.y>0&&(p=-p),l.y+=p}return l},c}function Le(r){r.shapes().question=Wt,r.shapes().hexagon=Vt,r.shapes().stadium=qt,r.shapes().subroutine=Qt,r.shapes().cylinder=Jt,r.shapes().rect_left_inv_arrow=$t,r.shapes().lean_right=zt,r.shapes().lean_left=Ht,r.shapes().trapezoid=Yt,r.shapes().inv_trapezoid=Xt,r.shapes().rect_right_inv_arrow=Ft}function Ee(r){r({question:Wt}),r({hexagon:Vt}),r({stadium:qt}),r({subroutine:Qt}),r({cylinder:Jt}),r({rect_left_inv_arrow:$t}),r({lean_right:zt}),r({lean_left:Ht}),r({trapezoid:Yt}),r({inv_trapezoid:Xt}),r({rect_right_inv_arrow:Ft})}function A(r,e,t,n){return r.insert("polygon",":first-child").attr("points",n.map(function(a){return a.x+","+a.y}).join(" ")).attr("transform","translate("+-e/2+","+t/2+")")}var Te={addToRender:Le,addToRenderV2:Ee},Kt={},Ne=function(r){let e=Object.keys(r);for(let t of e)Kt[t]=r[t]},Zt=function(r,e,t,n,a,s){let i=n?n.select(`[id="${t}"]`):y(`[id="${t}"]`),o=a||document;Object.keys(r).forEach(function(d){let l=r[d],m="default";l.classes.length>0&&(m=l.classes.join(" "));let p=J(l.styles),u=l.text!==void 0?l.text:l.id,f;if(ot(q().flowchart.htmlLabels)){let v={label:u.replace(/fa[blrs]?:fa-[\w-]+/g,L=>`<i class='${L.replace(":"," ")}'></i>`)};f=F(i,v).node(),f.parentNode.removeChild(f)}else{let v=o.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("style",p.labelStyle.replace("color:","fill:"));let L=u.split(lt.lineBreakRegex);for(let P of L){let N=o.createElementNS("http://www.w3.org/2000/svg","tspan");N.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),N.setAttribute("dy","1em"),N.setAttribute("x","1"),N.textContent=P,v.appendChild(N)}f=v}let x=0,h="";switch(l.type){case"round":x=5,h="rect";break;case"square":h="rect";break;case"diamond":h="question";break;case"hexagon":h="hexagon";break;case"odd":h="rect_left_inv_arrow";break;case"lean_right":h="lean_right";break;case"lean_left":h="lean_left";break;case"trapezoid":h="trapezoid";break;case"inv_trapezoid":h="inv_trapezoid";break;case"odd_right":h="rect_left_inv_arrow";break;case"circle":h="circle";break;case"ellipse":h="ellipse";break;case"stadium":h="stadium";break;case"subroutine":h="subroutine";break;case"cylinder":h="cylinder";break;case"group":h="rect";break;default:h="rect"}I.warn("Adding node",l.id,l.domId),e.setNode(s.db.lookUpDomId(l.id),{labelType:"svg",labelStyle:p.labelStyle,shape:h,label:f,rx:x,ry:x,class:m,style:p.style,id:s.db.lookUpDomId(l.id)})})},Ot=function(r,e,t){let n=0,a,s;if(r.defaultStyle!==void 0){let i=J(r.defaultStyle);a=i.style,s=i.labelStyle}r.forEach(function(i){n++;let o="L-"+i.start+"-"+i.end,c="LS-"+i.start,d="LE-"+i.end,l={};i.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal";let m="",p="";if(i.style!==void 0){let u=J(i.style);m=u.style,p=u.labelStyle}else switch(i.stroke){case"normal":m="fill:none",a!==void 0&&(m=a),s!==void 0&&(p=s);break;case"dotted":m="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":m=" stroke-width: 3.5px;fill:none";break}l.style=m,l.labelStyle=p,i.interpolate!==void 0?l.curve=Q(i.interpolate,R):r.defaultInterpolate!==void 0?l.curve=Q(r.defaultInterpolate,R):l.curve=Q(Kt.curve,R),i.text===void 0?i.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",ot(q().flowchart.htmlLabels)?(l.labelType="html",l.label=`<span id="L-${o}" class="edgeLabel L-${c}' L-${d}" style="${l.labelStyle}">${i.text.replace(/fa[blrs]?:fa-[\w-]+/g,u=>`<i class='${u.replace(":"," ")}'></i>`)}</span>`):(l.labelType="text",l.label=i.text.replace(lt.lineBreakRegex,`
`),i.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),l.id=o,l.class=c+" "+d,l.minlen=i.length||1,e.setEdge(t.db.lookUpDomId(i.start),t.db.lookUpDomId(i.end),l,n)})},Ce=function(r,e){I.info("Extracting classes"),e.db.clear();try{return e.parse(r),e.db.getClasses()}catch(t){return I.error(t),{}}},Ae=function(r,e,t,n){I.info("Drawing flowchart"),n.db.clear();let{securityLevel:a,flowchart:s}=q(),i;a==="sandbox"&&(i=y("#i"+e));let o=a==="sandbox"?y(i.nodes()[0].contentDocument.body):y("body"),c=a==="sandbox"?i.nodes()[0].contentDocument:document;try{n.parser.parse(r)}catch(g){I.debug("Parsing failed")}let d=n.db.getDirection();d===void 0&&(d="TD");let l=s.nodeSpacing||50,m=s.rankSpacing||50,p=new xt({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:l,ranksep:m,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),u,f=n.db.getSubGraphs();for(let g=f.length-1;g>=0;g--)u=f[g],n.db.addVertex(u.id,u.title,"group",void 0,u.classes);let x=n.db.getVertices();I.warn("Get vertices",x);let h=n.db.getEdges(),v=0;for(v=f.length-1;v>=0;v--){u=f[v],ut("cluster").append("text");for(let g=0;g<u.nodes.length;g++)I.warn("Setting subgraph",u.nodes[g],n.db.lookUpDomId(u.nodes[g]),n.db.lookUpDomId(u.id)),p.setParent(n.db.lookUpDomId(u.nodes[g]),n.db.lookUpDomId(u.id))}Zt(x,p,e,o,c,n),Ot(h,p,n);let L=new dt;Te.addToRender(L),L.arrows().none=function(S,E,k,D){let B=S.append("marker").attr("id",E).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 0 0 L 0 0 z");_(B,k[D+"Style"])},L.arrows().normal=function(S,E){S.append("marker").attr("id",E).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};let P=o.select(`[id="${e}"]`),N=o.select("#"+e+" g");for(L(N,p),N.selectAll("g.node").attr("title",function(){return n.db.getTooltip(this.id)}),n.db.indexNodes("subGraph"+v),v=0;v<f.length;v++)if(u=f[v],u.title!=="undefined"){let g=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(u.id)+'"] rect'),S=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(u.id)+'"]'),E=g[0].x.baseVal.value,k=g[0].y.baseVal.value,D=g[0].width.baseVal.value,B=y(S[0]).select(".label");B.attr("transform",`translate(${E+D/2}, ${k+14})`),B.attr("id",e+"Text");for(let st=0;st<u.classes.length;st++)S[0].classList.add(u.classes[st])}if(!s.htmlLabels){let g=c.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(let S of g){let E=S.getBBox(),k=c.createElementNS("http://www.w3.org/2000/svg","rect");k.setAttribute("rx",0),k.setAttribute("ry",0),k.setAttribute("width",E.width),k.setAttribute("height",E.height),S.insertBefore(k,S.firstChild)}}St(p,P,s.diagramPadding,s.useMaxWidth),Object.keys(x).forEach(function(g){let S=x[g];if(S.link){let E=o.select("#"+e+' [id="'+n.db.lookUpDomId(g)+'"]');if(E){let k=c.createElementNS("http://www.w3.org/2000/svg","a");k.setAttributeNS("http://www.w3.org/2000/svg","class",S.classes.join(" ")),k.setAttributeNS("http://www.w3.org/2000/svg","href",S.link),k.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),a==="sandbox"?k.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):S.linkTarget&&k.setAttributeNS("http://www.w3.org/2000/svg","target",S.linkTarget);let D=E.insert(function(){return k},":first-child"),$=E.select(".label-container");$&&D.append(function(){return $.node()});let B=E.select(".label");B&&D.append(function(){return B.node()})}}})},Ie={setConf:Ne,addVertices:Zt,addEdges:Ot,getClasses:Ce,draw:Ae},Br={parser:mt,db:z,renderer:bt,styles:kt,init:r=>{r.flowchart||(r.flowchart={}),r.flowchart.arrowMarkerAbsolute=r.arrowMarkerAbsolute,Ie.setConf(r.flowchart),z.clear(),z.setGen("gen-1")}};export{Br as diagram};