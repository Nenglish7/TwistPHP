/*!
 * TwistPHP - An open source PHP MVC framework built from the ground up.
 * Copyright (C) 2016  Shadow Technologies Ltd.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @author     Shadow Technologies Ltd. <contact@shadow-technologies.co.uk>
 * @license    https://www.gnu.org/licenses/gpl.html GPL License
 * @link       https://twistphp.com
 * 
 * --------------
 * TwistPHP Debug
 * --------------
 */
!function(t,e,r){var o=!1,a=[],n=function(){if(t.console&&t.console.log&&arguments.length)for(var e in arguments)t.console.log(arguments[e])},s=function(){if(t.console&&arguments.length)for(var e in arguments)t.console.info?t.console.info(arguments[e]):n("INFO: ",arguments[e])},i=function(){if(t.console&&arguments.length)for(var e in arguments)t.console.warn?t.console.warn(arguments[e]):n("WARNING: ",arguments[e])},l=function(){if(t.console&&arguments.length)for(var e in arguments)t.console.error?t.console.error(arguments[e]):n("ERROR: ",arguments[e])},d=function(t,r){var o=e.createElement("script"),a=e.getElementsByTagName("head")[0],n=!1;r="function"==typeof r?r:function(){},o.src=t,o.onload=o.onreadystatechange=function(){if(!(n||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){n=!0;try{r()}catch(t){console.error(t)}o.onload=o.onreadystatechange=null,a.removeChild(o)}},a.appendChild(o)},u=function(e){var o=e===!0?t.jQuery.noConflict(!0):t.jQuery,n=o("#twist-debug-blocks"),i=o("#twist-debug-details"),l=function(t){var e=0;for(var r in t)t.hasOwnProperty(r)&&e++;return e},d=function(t,e,a,n,s,i,l){if(a){var d=a||"",u="",c="";if("object"==typeof a&&(d="<pre>"+JSON.stringify(a,r,2)+"</pre>"),"object"==typeof n)for(var f in n){var p=f.charAt(0).toUpperCase()+f.slice(1).replace("_"," "),g="object"==typeof n[f]?"<pre>"+JSON.stringify(n[f],r,2)+"</pre>":n[f];c+="<dt>"+p+"</dt><dd>"+g+"</dd>"}s!==r?""!==s&&(u=i!==r&&""!==i?l!==r&&""!==l?s+", line "+i+", column "+l:s+", line "+i:s):u="JavaScript ["+(new Date).getTime()+"]";var w=o('<div class="twist-debug-box-'+e+'" data-title="'+u+'"/>').html(d);return""!==c&&w.append('<div class="twist-debug-more-details"><dl>'+c+'</dl></div><a href="#twist-debug-more-details" class="twist-debug-more-details">&ctdot;</a>'),o(t).append(w),!0}return!1};this.error=function(t,e,r,a){var n={type:typeof t,length:"object"==typeof t?l(t):t.length};if(d("#twist-debug-messages-list","red","<p>"+t+"</p>",n,e,r,a)){var s=o("#twist-debug-errors");s.attr("data-count",parseInt(s.attr("data-count"))+1)}},this.warn=function(t,e,r,a){var n={type:typeof t,length:"object"==typeof t?l(t):t.length};if(d("#twist-debug-messages-list","yellow","<p>"+t+"</p>",n,e,r,a)){var s=o("#twist-debug-warnings");s.attr("data-count",parseInt(s.attr("data-count"))+1)}},this.log=function(t,e,r,a){var n={type:typeof t,length:"object"==typeof t?l(t):t.length};if(d("#twist-debug-messages-list","blue","<p>"+t+"</p>",n,e,r,a)){var s=o("#twist-debug-dumps");s.attr("data-count",parseInt(s.attr("data-count"))+1)}},this.logAJAX=function(t,e,r){var a={type:r.type,URL:r.url,timeout:r.timeout,cache:r.cache,request_data:r.data};if(d("#twist-debug-ajax-list",t?"green":"red",e,a,r.type+" "+r.url)){var n=o("#twist-debug-ajax-count");n.attr("data-count",parseInt(n.attr("data-count"))+1)}},this.logFileUpload=function(t,e){var a=e.support&&e.support["thumb-128"]?e.support["thumb-128"]:e.uri_preview,n="<pre>"+JSON.stringify(e,r,2)+'</pre><div class="twist-debug-fileupload-preview"><img src="'+a+'"></div>';if(d("#twist-debug-fileupload-list","green",n,t,t.name)){var s=o("#twist-debug-fileupload-count");s.attr("data-count",parseInt(s.attr("data-count"))+1)}};for(var u in a){var c=a[u];logError(c.title,c.message,c.url,c.line,c.column,c.error)}return o('.twist-debug-box, [class^="twist-debug-box-"], [class*=" twist-debug-box-"]').has(".twist-debug-more-details").each(function(){var t=o(this).find(".twist-debug-more-details");t.after('<a href="#twist-debug-more-details" class="twist-debug-more-details">&ctdot;</a>')}),n.on("click","a",function(t){t.preventDefault();var e=o(this);if(e.hasClass("current"))i.removeClass("show"),e.removeClass("current");else{var r=e.attr("href");i.addClass("show").children("div").hide().filter(r).show(),n.find("a.current").removeClass("current"),e.addClass("current")}}),o("#close-twist-debug-details").on("click",function(t){t.preventDefault(),n.find("a.current").removeClass("current"),i.removeClass("show")}),i.on("click",'a[href="#twist-debug-more-details"]',function(t){t.preventDefault(),o(this).prev(".twist-debug-more-details").slideToggle()}),o("#twist-debug-details").find("table").wrap('<div class="table-wrapper"/>'),o("#twist-debug").addClass("ready"),s("TwistPHP Debug is now loaded with jQuery v."+o.fn.jquery),this};t.onerror=function(t,e,r,o,n){var s={message:"<strong>JS Error:</strong> "+t,url:e,line:r,column:o,error:n};return a.push(s),!0},"undefined"==typeof t.jQuery?(o="function"==typeof t.$,d("http"+("https:"===location.protocol?"s":"")+"://code.jquery.com/jquery-1.12.0.min.js",function(){"undefined"==typeof t.jQuery?l("This is embarrassing... jQuery couldn't be loaded"):o?(i("Another JS library controls $"),t.twistdebug=new u((!0))):t.twistdebug=new u((!1))})):t.twistdebug=new u((!1))}(window,document);