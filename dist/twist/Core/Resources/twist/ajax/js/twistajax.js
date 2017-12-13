!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.twistajax=t()}(this,function(){"use strict";function e(e){var t=[],n=/^([^\[\]]*)/,r=new RegExp(a),i=n.exec(e);for(i[1]&&t.push(i[1]);null!==(i=r.exec(e));)t.push(i[1]);return t}function t(e,n,r){if(0===n.length)return e=r;var i=n.shift(),s=i.match(/^\[(.+?)\]$/);if("[]"===i)return e=e||[],Array.isArray(e)?e.push(t(null,n,r)):(e._values=e._values||[],e._values.push(t(null,n,r))),e;if(s){var o=s[1],u=+o;isNaN(u)?(e=e||{})[o]=t(e[o],n,r):(e=e||[])[u]=t(e[u],n,r)}else e[i]=t(e[i],n,r);return e}function n(n,r,i){if(r.match(a))t(n,e(r),i);else{var s=n[r];s?(Array.isArray(s)||(n[r]=[s]),n[r].push(i)):n[r]=i}return n}function r(e,t,n){return n=n.replace(/(\r)?\n/g,"\r\n"),n=encodeURIComponent(n),n=n.replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=/^(?:submit|button|image|reset|file)$/i,u=/^(?:input|select|textarea|keygen)/i,a=/(\[[^\[\]]*\])/g,c=function(e,t){"object"!=(void 0===t?"undefined":s(t))?t={hash:!!t}:void 0===t.hash&&(t.hash=!0);for(var i=t.hash?{}:"",a=t.serializer||(t.hash?n:r),c=e&&e.elements?e.elements:[],d=Object.create(null),l=0;l<c.length;++l){var h=c[l];if((t.disabled||!h.disabled)&&h.name&&u.test(h.nodeName)&&!o.test(h.type)){var f=h.name,g=h.value;if("checkbox"!==h.type&&"radio"!==h.type||h.checked||(g=void 0),t.empty){if("checkbox"!==h.type||h.checked||(g=""),"radio"===h.type&&(d[h.name]||h.checked?h.checked&&(d[h.name]=!0):d[h.name]=!1),void 0==g&&"radio"==h.type)continue}else if(!g)continue;if("select-multiple"!==h.type)i=a(i,f,g);else{g=[];for(var p=h.options,b=!1,v=0;v<p.length;++v){var y=p[v],w=t.empty&&!y.value,m=y.value||w;y.selected&&m&&(b=!0,i=t.hash&&"[]"!==f.slice(f.length-2)?a(i,f+"[]",y.value):a(i,f,y.value))}!b&&t.empty&&(i=a(i,f,""))}}}if(t.empty)for(var f in d)d[f]||(i=a(i,f,""));return i},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();return function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,e),this.uri=n.replace(/\/$/,""),this.cache=!1,this.requests=[],this.debug=!1,this.events={},window.twist?window.twist.ajax||(window.twist.ajax={instances:[]}):window.twist={ajax:{instances:[]}},this.on("request",function(e){window.twist.debug?window.twist.debug.logAJAX(e):t.debug&&console.info("New AJAX Request",e)}).on("response",function(e){window.twist.debug&&e.$debug?e.$debug.querySelector(".details").outerHTML="<pre>"+JSON.stringify({response:e.response},void 0,2)+"</pre>":t.debug}).on("success",function(e){window.twist.debug&&e.$debug?"twist-debug-box-"===e.$debug.getAttribute("class")&&(e.$debug.classList.remove("twist-debug-box-"),e.$debug.classList.add("twist-debug-box-green")):t.debug}).on("fail",function(e){window.twist.debug&&e.$debug?"twist-debug-box-"===e.$debug.getAttribute("class")&&(e.$debug.classList.remove("twist-debug-box-"),e.$debug.classList.add("twist-debug-box-yellow")):t.debug}).on("error",function(e){if(window.twist.debug&&e.$debug){if("twist-debug-box-"===e.$debug.getAttribute("class")){e.$debug.classList.remove("twist-debug-box-"),e.$debug.classList.add("twist-debug-box-red");var n=document.createElement("p");n.innerHTML="Error: "+e.error;var r=e.$debug.querySelector(".details");r.parentNode.replaceChild(n,r)}}else t.debug}),window.twist.ajax.instances.push(this)}return d(e,[{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.send(e,t,"DELETE")}},{key:"get",value:function(e){return this.send(e,{},"GET")}},{key:"head",value:function(e){return this.send(e,{},"HEAD")}},{key:"patch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.send(e,t,"PATCH")}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.send(e,t,"POST")}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.send(e,t,"PUT")}},{key:"postForm",value:function(e,t){var n=c(document.querySelector(t),{empty:!0});return this.post(e,n)}},{key:"on",value:function(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}},{key:"trigger",value:function(e,t){if(this.events[e]){var n=!0,r=!1,i=void 0;try{for(var s,o=this.events[e][Symbol.iterator]();!(n=(s=o.next()).done);n=!0)s.value.call(this,t)}catch(e){r=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}}return this}},{key:"send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",i={method:r,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"},cache:this.cache?"default":"no-store"};"GET"!==r&&(i.body=JSON.stringify(n));var s={url:this.uri+"/"+e,options:i};return s.instance=new Promise(function(n,r){fetch(t.uri+"/"+e,i).then(function(e){if(e.ok)return e.text().then(function(e){try{return JSON.parse(e)}catch(r){var t='("status" ?: ?(true|false)?|"message" ?: ?".*"|"data" ?: ?(\\{.*\\}|\\[.*\\]))',n=new RegExp("{("+t+" ?, ?){2}"+t+"}","g").exec(e);if(null!==n)return console.warn("Broken AJAX response parsed"),JSON.parse(n[0]);throw e}}).catch(function(e){throw e});throw console.log(e),e.status+" "+e.statusText}).then(function(e){if(s.response=e,t.trigger("response",s),!0!==e.status)throw t.trigger("fail",s),e.message||"AJAX status returned FALSE";return t.trigger("success",s),n(e.data),e}).catch(function(e){s.error=e,t.trigger("error",s),r(e)})}),this.requests.push(s),this.trigger("request",s),s.instance}}]),e}()});
//# sourceMappingURL=twistajax.js.map