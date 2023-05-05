/*!
 * pagepiling.js 1.5.6
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
*/ !function(e,n,t,o){"use strict";e.fn.pagepiling=function(i){var a,s=e.fn.pagepiling,c=e(this),r=0,l="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,p=0,d=0,v=0,h=0,u=[],f=e.extend(!0,{direction:"vertical",menu:null,verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",loopBottom:!1,loopTop:!1,css3:!0,navigation:{textColor:"#000",bulletsColor:"#000",position:"right",tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,afterLoad:null,onLeave:null,afterRender:null},i);e.extend(e.easing,{easeInQuart:function(e,n,t,o,i){return o*(n/=i)*n*n*n+t}}),s.setScrollingSpeed=function(e){f.scrollingSpeed=e},s.setMouseWheelScrolling=function(e){e?c.length&&(c.get(0).addEventListener?(c.get(0).addEventListener("mousewheel",C,!1),c.get(0).addEventListener("wheel",C,!1)):c.get(0).attachEvent("onmousewheel",C)):c.get(0).addEventListener?(c.get(0).removeEventListener("mousewheel",C,!1),c.get(0).removeEventListener("wheel",C,!1)):c.get(0).detachEvent("onmousewheel",C)},s.setAllowScrolling=function(e){e?(s.setMouseWheelScrolling(!0),function e(){if(l){var n=L();c.off("touchstart "+n.down).on("touchstart "+n.down,X),c.off("touchmove "+n.move).on("touchmove "+n.move,P)}}()):(s.setMouseWheelScrolling(!1),function e(){if(l){var n=L();c.off("touchstart "+n.down),c.off("touchmove "+n.move)}}())},s.setKeyboardScrolling=function(e){f.keyboardScrolling=e},s.moveSectionUp=function(){var n=e(".pp-section.active").prev(".pp-section");!n.length&&f.loopTop&&(n=e(".pp-section").last()),n.length&&g(n)},s.moveSectionDown=function(){var n=e(".pp-section.active").next(".pp-section");!n.length&&f.loopBottom&&(n=e(".pp-section").first()),n.length&&g(n)},s.moveTo=function(t){var o="";(o=isNaN(t)?e(n).find('[data-anchor="'+t+'"]'):e(".pp-section").eq(t-1)).length>0&&g(o)},e(f.sectionSelector).each(function(){e(this).addClass("pp-section")}),f.css3&&(f.css3=function e(){var i,a=n.createElement("p"),s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var c in n.body.insertBefore(a,null),s)o!==a.style[c]&&(a.style[c]="translate3d(1px,1px,1px)",i=t.getComputedStyle(a).getPropertyValue(s[c]));return n.body.removeChild(a),i!==o&&i.length>0&&"none"!==i}()),e(c).css({overflow:"hidden","-ms-touch-action":"none","touch-action":"none"}),s.setAllowScrolling(!0),e.isEmptyObject(f.navigation)||function n(){e("body").append('<div id="pp-nav"><ul></ul></div>');var t=e("#pp-nav");t.css("color",f.navigation.textColor),t.addClass(f.navigation.position);for(var o=0;o<e(".pp-section").length;o++){var i="";if(f.anchors.length&&(i=f.anchors[o]),"undefined"!==f.navigation.tooltips){var a=f.navigation.tooltips[o];void 0===a&&(a="")}t.find("ul").append('<li data-tooltip="'+a+'"><a href="#'+i+'"><span></span></a></li>')}t.find("span").css("border-color",f.navigation.bulletsColor)}();var m=e(".pp-section").length;function g(n,t){var o,i,s,c,l,p,d,v,h,u,m={destination:n,animated:t,activeSection:e(".pp-section.active"),anchorLink:n.data("anchor"),sectionIndex:n.index(".pp-section"),toMove:n,yMovement:(h=n,(u=e(".pp-section.active").index(".pp-section"))>h.index(".pp-section")?"up":"down"),leavingSection:e(".pp-section.active").index(".pp-section")+1};if(!m.activeSection.is(n)){void 0===m.animated&&(m.animated=!0),void 0!==m.anchorLink&&(o=m.anchorLink,i=m.sectionIndex,f.anchors.length?(location.hash=o,x(location.hash)):x(String(i))),m.destination.addClass("active").siblings().removeClass("active"),m.sectionsToMove=(s=m,"down"===s.yMovement?e(".pp-section").map(function(n){if(n<s.destination.index(".pp-section"))return e(this)}):e(".pp-section").map(function(n){if(n>s.destination.index(".pp-section"))return e(this)})),"down"===m.yMovement?(m.translate3d=Y(),m.scrolling="-100%",f.css3||m.sectionsToMove.each(function(n){n!=m.activeSection.index(".pp-section")&&e(this).css(w(m.scrolling))}),m.animateSection=m.activeSection):(m.translate3d="translate3d(0px, 0px, 0px)",m.scrolling="0",m.animateSection=n),e.isFunction(f.onLeave)&&f.onLeave.call(this,m.leavingSection,m.sectionIndex+1,m.yMovement),l=m,f.css3?(y(l.animateSection,l.translate3d,l.animated),l.sectionsToMove.each(function(){y(e(this),l.translate3d,l.animated)}),setTimeout(function(){$(l)},f.scrollingSpeed)):(l.scrollOptions=w(l.scrolling),l.animated?l.animateSection.animate(l.scrollOptions,f.scrollingSpeed,f.easing,function(){S(l),$(l)}):(l.animateSection.css(w(l.scrolling)),setTimeout(function(){S(l),$(l)},400))),p=m.anchorLink,f.menu&&(e(f.menu).find(".active").removeClass("active"),e(f.menu).find('[data-menuanchor="'+p+'"]').addClass("active")),d=m.anchorLink,v=m.sectionIndex,f.navigation&&(e("#pp-nav").find(".active").removeClass("active"),d?e("#pp-nav").find('a[href="#'+d+'"]').addClass("active"):e("#pp-nav").find("li").eq(v).find("a").addClass("active")),a=m.anchorLink,r=new Date().getTime()}}function $(n){e.isFunction(f.afterLoad)&&f.afterLoad.call(this,n.anchorLink,n.sectionIndex+1)}function S(n){"up"===n.yMovement&&n.sectionsToMove.each(function(t){e(this).css(w(n.scrolling))})}function w(e){return"vertical"===f.direction?{top:e}:{left:e}}function b(e,n){f.css3?y(e,Y(),!1):e.css(w(n))}function x(n){n=n.replace("#",""),e("body")[0].className=e("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,""),e("body").addClass("pp-viewing-"+n)}function _(){return new Date().getTime()-r<600+f.scrollingSpeed}function y(e,n,t){var o;e.toggleClass("pp-easing",t),e.css({"-webkit-transform":o=n,"-moz-transform":o,"-ms-transform":o,transform:o})}e(".pp-section").each(function(n){e(this).data("data-index",n),e(this).css("z-index",m),n||0!==e(".pp-section.active").length||e(this).addClass("active"),void 0!==f.anchors[n]&&e(this).attr("data-anchor",f.anchors[n]),void 0!==f.sectionsColor[n]&&e(this).css("background-color",f.sectionsColor[n]),f.verticalCentered&&!e(this).hasClass("pp-scrollable")&&function e(n){n.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />')}(e(this)),m-=1}).promise().done(function(){f.navigation&&(e("#pp-nav").css("margin-top","-"+e("#pp-nav").height()/2+"px"),e("#pp-nav").find("li").eq(e(".pp-section.active").index(".pp-section")).find("a").addClass("active")),e(t).on("load",function(){var o,i;o=t.location.hash.replace("#",""),i=e(n).find('.pp-section[data-anchor="'+o+'"]'),i.length>0&&g(i,f.animateAnchor)}),e.isFunction(f.afterRender)&&f.afterRender.call(this)}),e(t).on("hashchange",function o(){var i,s=t.location.hash.replace("#","").split("/")[0];s.length&&s&&s!==a&&g(i=isNaN(s)?e(n).find('[data-anchor="'+s+'"]'):e(".pp-section").eq(s-1))}),e(n).keydown(function(n){if(f.keyboardScrolling&&!_())switch(n.which){case 38:case 33:case 37:s.moveSectionUp();break;case 40:case 34:case 39:s.moveSectionDown();break;case 36:s.moveTo(1);break;case 35:s.moveTo(e(".pp-section").length);break;default:return}}),f.normalScrollElements&&(e(n).on("mouseenter",f.normalScrollElements,function(){s.setMouseWheelScrolling(!1)}),e(n).on("mouseleave",f.normalScrollElements,function(){s.setMouseWheelScrolling(!0)}));var T=new Date().getTime();function C(n){var o=new Date().getTime(),i=(n=n||t.event).wheelDelta||-n.deltaY||-n.detail,a=Math.max(-1,Math.min(1,i)),s=void 0!==n.wheelDeltaX||void 0!==n.deltaX,c=Math.abs(n.wheelDeltaX)<Math.abs(n.wheelDelta)||Math.abs(n.deltaX)<Math.abs(n.deltaY)||!s;u.length>149&&u.shift(),u.push(Math.abs(i));var r=o-T;if(T=o,r>200&&(u=[]),!_()){var l=e(".pp-section.active"),p=k(l),d=E(u,10),v=E(u,70);return d>=v&&c&&(a<0?M("down",p):a>0&&M("up",p)),!1}}function E(e,n){for(var t=0,o=e.slice(Math.max(e.length-n,1)),i=0;i<o.length;i++)t+=o[i];return Math.ceil(t/n)}function M(e,n){var t,o,i,a;if("down"==e?(t="bottom",o=s.moveSectionDown):(t="top",o=s.moveSectionUp),n.length>0){if(i=t,a=n,"top"===i?!!a.scrollTop():"bottom"!==i||!(a.scrollTop()+1+a.innerHeight()>=a[0].scrollHeight))return!0;o()}else o()}function k(e){return e.filter(".pp-scrollable")}function L(){var e;return t.PointerEvent?{down:"pointerdown",move:"pointermove",up:"pointerup"}:{down:"MSPointerDown",move:"MSPointerMove",up:"MSPointerUp"}}function D(e){var n=[];return n.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,n}function I(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function X(e){var n=e.originalEvent;if(I(n)){var t=D(n);p=t.y,d=t.x}}function P(n){var t=n.originalEvent;if(!function n(t,o){o=o||0;var i=e(t).parent();return!!(o<f.normalScrollElementTouchThreshold&&i.is(f.normalScrollElements))||o!=f.normalScrollElementTouchThreshold&&n(i,++o)}(n.target)&&I(t)){var o=e(".pp-section.active"),i=k(o);if(i.length||n.preventDefault(),!_()){var a=D(t);v=a.y,h=a.x,"horizontal"===f.direction&&Math.abs(d-h)>Math.abs(p-v)?Math.abs(d-h)>c.width()/100*f.touchSensitivity&&(d>h?M("down",i):h>d&&M("up",i)):Math.abs(p-v)>c.height()/100*f.touchSensitivity&&(p>v?M("down",i):v>p&&M("up",i))}}}function Y(){return"vertical"!==f.direction?"translate3d(-100%, 0px, 0px)":"translate3d(0px, -100%, 0px)"}e(n).on("click touchstart","#pp-nav a",function(n){n.preventDefault();var t=e(this).parent().index();g(e(".pp-section").eq(t))}),e(n).on({mouseenter:function(){var n=e(this).data("tooltip");e('<div class="pp-tooltip '+f.navigation.position+'">'+n+"</div>").hide().appendTo(e(this)).fadeIn(200)},mouseleave:function(){e(this).find(".pp-tooltip").fadeOut(200,function(){e(this).remove()})}},"#pp-nav li")}}(jQuery,document,window);