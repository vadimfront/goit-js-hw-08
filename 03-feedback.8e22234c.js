var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("kEUo3");const a=document.querySelector(".feedback-form");let l={};const d=(0,r.throttle)((e=>{const{name:t,value:o}=e.target;l={...l,[t]:o},localStorage.setItem("feedback-form-state",JSON.stringify(l))}),500);a.addEventListener("input",d),a.addEventListener("submit",(function(e){e.preventDefault(),console.log(l),localStorage.removeItem("feedback-form-state"),a.reset(),l={}})),document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("feedback-form-state");e&&(l=JSON.parse(e),Object.entries(l).forEach((([e,t])=>{a[e].value=t})))}));
//# sourceMappingURL=03-feedback.8e22234c.js.map