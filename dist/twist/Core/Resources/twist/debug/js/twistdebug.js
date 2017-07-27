!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=function(){function i(){var e=this;t(this,i);try{var n=["%c %c %c TwistPHP Debug %c %c ","font-size: 15px; background: #2a5200;","font-size: 17px; background: #3f7a00;","color: #FFF; font-size: 18px; background: #539F00;","font-size: 17px; background: #3f7a00;","font-size: 15px; background: #2a5200;"];console.log.apply(console,n)}catch(t){console.info?console.info("TwistPHP Debug"):console.log("TwistPHP Debug")}if(window.twist&&window.twist.catches){var o=!0,r=!1,a=void 0;try{for(var s,l=window.twist.catches[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var d=s.value;switch(console.log(d),d.type){case"error":this.error.apply(this,d.details);break;case"warning":this.warn.apply(this,d.details)}}}catch(t){r=!0,a=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}}window.onerror=function(t,n,i,o){e.error(t,n,i,o)},window.onwarn=function(t,n,i,o){e.warn(t,n,i,o)},this.setupUI(),this.outputExistingAJAX()}return n(i,[{key:"outputExistingAJAX",value:function(){if(window.twist&&window.twist.ajax){var t=!0,e=!1,n=void 0;try{for(var i,o=window.twist.ajax.instances[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var r=i.value,a=!0,s=!1,l=void 0;try{for(var d,u=r.requests[Symbol.iterator]();!(a=(d=u.next()).done);a=!0){var c=d.value;this.logAJAX(c)}}catch(t){s=!0,l=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw l}}}}catch(t){e=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw n}}}}},{key:"logToTwist",value:function(t,n,i,o,r,a,s){if(i){var l=i||"",d="",u="";if("object"===(void 0===i?"undefined":e(i))&&(l="<pre>"+JSON.stringify(i,void 0,2)+"</pre>"),"object"===(void 0===o?"undefined":e(o))){for(var c in o)o.hasOwnProperty(c)&&(u+="<dt>"+(c.charAt(0).toUpperCase()+c.slice(1).replace("_"," "))+"</dt><dd>"+("object"===e(o[c])?"<pre>"+JSON.stringify(o[c],void 0,2)+"</pre>":o[c])+"</dd>");u='<dl class="details">'+u+"</dl>"}else u='<p class="details">'+o+"</p>";void 0!==r?""!==r&&(d=void 0!==a&&""!==a?void 0!==s&&""!==s?r+", line "+a+", column "+s:r+", line "+a:r):d="JavaScript ["+(new Date).getTime()+"]";var f=document.createElement("div");f.innerHTML=l,f.classList.add("twist-debug-box-"+n),f.setAttribute("data-title",d);var y=document.createElement("div");if(y.classList.add("twist-debug-more-details"),y.innerHTML=u,f.appendChild(y),""!==u){var b=document.createElement("a");b.classList.add("twist-debug-more-details-button"),b.innerHTML="&ctdot;",b.setAttribute("href","#twist-debug-more-details"),b.addEventListener("click",function(t){t.preventDefault(),y.offsetWidth>0&&y.offsetHeight>0?y.style.display="none":y.style.display="block"}),f.appendChild(b)}return document.querySelector(t).appendChild(f),f}return!1}},{key:"error",value:function(t,n,i,o){var r={type:void 0===t?"undefined":e(t),length:"object"===(void 0===t?"undefined":e(t))?this.objectLength(t):t.length};if(this.logToTwist("#twist-debug-messages-list","red","<p>"+t+"</p>",r,n,i,o)){var a=document.getElementById("twist-debug-errors");a.setAttribute("data-count",(parseInt(a.getAttribute("data-count"))+1).toString())}}},{key:"warn",value:function(t,n,i,o){var r={type:void 0===t?"undefined":e(t),length:"object"===(void 0===t?"undefined":e(t))?this.objectLength(t):t.length};if(this.logToTwist("#twist-debug-messages-list","yellow","<p>"+t+"</p>",r,n,i,o)){var a=document.getElementById("twist-debug-warnings");a.setAttribute("data-count",(parseInt(a.getAttribute("data-count"))+1).toString())}}},{key:"log",value:function(t,n,i,o){var r={type:void 0===t?"undefined":e(t),length:"object"===(void 0===t?"undefined":e(t))?this.objectLength(t):t.length};if(this.logToTwist("#twist-debug-messages-list","blue","<p>"+t+"</p>",r,n,i,o)){var a=document.getElementById("twist-debug-dumps");a.setAttribute("data-count",(parseInt(a.getAttribute("data-count"))+1).toString())}}},{key:"logAJAX",value:function(t){var e={uri:t.url,options:t.options};e.options.body&&(e.options.body=JSON.parse(e.options.body));var n=this.logToTwist("#twist-debug-ajax-list","",e,"Waiting...",t.options.method+" "+t.url);if(n){var i=document.getElementById("twist-debug-ajax-count");i.setAttribute("data-count",(parseInt(i.getAttribute("data-count"))+1).toString()),t.$debug=n}}},{key:"logFileUpload",value:function(t,e){var n=e.support&&e.support["thumb-128"]?e.support["thumb-128"]:e.uri_preview,i="<pre>"+JSON.stringify(e,void 0,2)+'</pre><div class="twist-debug-fileupload-preview"><img src="'+n+'"></div>';if(this.logToTwist("#twist-debug-fileupload-list","green",i,t,t.name)){var o=document.getElementById("twist-debug-fileupload-count");o.setAttribute("data-count",(parseInt(o.getAttribute("data-count"))+1).toString())}}},{key:"setupUI",value:function(){var t=document.getElementById("twist-debug-blocks"),e=document.getElementById("twist-debug-details"),n=!0,i=!1,o=void 0;try{for(var r,a=document.getElementById("twist-debug-details").querySelectorAll('.twist-debug-box, [class^="twist-debug-box-"], [class*=" twist-debug-box-"]')[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value;s.querySelector(".twist-debug-more-details")&&!s.querySelector(".twist-debug-more-details-button")&&function(){var t=s.querySelector(".twist-debug-more-details"),e=document.createElement("a");e.classList.add("twist-debug-more-details-button"),e.innerHTML="&ctdot;",e.setAttribute("href","#twist-debug-more-details"),e.addEventListener("click",function(e){e.preventDefault(),t.offsetWidth>0&&t.offsetHeight>0?t.style.display="none":t.style.display="block"}),s.appendChild(e)}()}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}var l=!0,d=!1,u=void 0;try{for(var c,f=t.querySelectorAll("button")[Symbol.iterator]();!(l=(c=f.next()).done);l=!0)c.value.addEventListener("click",function(n){n.preventDefault();var i=this;if(i.classList.contains("current"))e.classList.remove("show"),i.classList.remove("current");else{var o=i.getAttribute("data-panel");e.classList.add("show");var r=!0,a=!1,s=void 0;try{for(var l,d=e.children[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var u=l.value;"div"===u.tagName.toLowerCase()&&(u.style.display="none")}}catch(t){a=!0,s=t}finally{try{!r&&d.return&&d.return()}finally{if(a)throw s}}document.querySelector(o).style.display="block";var c=!0,f=!1,y=void 0;try{for(var b,v=t.querySelectorAll("button.current")[Symbol.iterator]();!(c=(b=v.next()).done);c=!0)b.value.classList.remove("current")}catch(t){f=!0,y=t}finally{try{!c&&v.return&&v.return()}finally{if(f)throw y}}i.classList.add("current")}})}catch(t){d=!0,u=t}finally{try{!l&&f.return&&f.return()}finally{if(d)throw u}}document.getElementById("close-twist-debug-details").addEventListener("click",function(n){n.preventDefault(),t.querySelector("button.current").classList.remove("current"),e.classList.remove("show")}),document.getElementById("twist-debug").classList.add("ready")}}],[{key:"objectLength",value:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}}]),i}();window.twist?window.twist.debug=new i:window.twist={debug:new i}});
//# sourceMappingURL=twistdebug.js.map
