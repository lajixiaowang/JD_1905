"use strict";!function(){var t={set:function(e,t,o){if(o){var i=new Date;i.setDate(i.getDate()+o),document.cookie=e+"="+t+";expires="+i+";path=/"}else document.cookie=e+"="+t+";path=/"},get:function(e){if(document.cookie){var t=document.cookie.split("; "),o=[];t.forEach(function(e){o.push(e.split("="))});for(var i=0;i<o.length;i++)if(o[i][0]==e)return o[i][1]}},remove:function(e){t.set(e,"",-1)}};window.cookie=t}();