(function(){
  var CANON='https://siirr.tv';                                          // fallback if pointer down
  var DEST='/';                                                          // where to land (or '/install-sir-tv/')
  var POINTER='https://cdn.jsdelivr.net/gh/kooralive96/js@main/live.json';
  var mode=(document.currentScript&&document.currentScript.dataset.mode)||'';
  function norm(u){return (u||'').replace(/\/+$/,'');}
  function canon(cb){ fetch(POINTER,{cache:'no-store'}).then(function(r){return r.ok?r.json():Promise.reject();})
    .then(function(j){cb(j&&j.domain&&j.domain.indexOf('http')===0?j.domain:CANON);}).catch(function(){cb(CANON);}); }
  window.SIIR_open=function(){ canon(function(d){ if(norm(d)!==norm(location.origin)) location.href=d+DEST; }); };
  if(mode==='auto'){ document.readyState==='loading'?document.addEventListener('DOMContentLoaded',window.SIIR_open):window.SIIR_open(); }
})();
