var t=Array.from(document.querySelectorAll("span.population")).map(function(t){var e=parseInt(t.textContent.trim().replace(/,/g,""),10);return isNaN(e)?0:e}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length,o=e.toLocaleString("en-US"),r=n.toLocaleString("en-US",{maximumFractionDigits:0}),a=document.querySelector(".total-population"),u=document.querySelector(".average-population");a.textContent=o,u.textContent=r;
//# sourceMappingURL=index.01ef51ce.js.map
