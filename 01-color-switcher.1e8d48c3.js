!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;var a=function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};t.addEventListener("click",(function(){o=setInterval(a,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.1e8d48c3.js.map