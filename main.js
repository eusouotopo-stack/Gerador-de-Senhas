// main.js - navegação simples, cookies e gerador de senhas
(function(){
  // Cookie: armazenar aceitação
  function setCookie(name, value, days){
    let expires = "";
    if(days){ let d = new Date(); d.setTime(d.getTime() + days*24*60*60*1000); expires = "; expires=" + d.toUTCString(); }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  function getCookie(name){
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

  window.acceptCookies = function(){
    setCookie('site_cookies', 'accepted', 365);
    let cb = document.getElementById('cookieBox');
    if(cb) cb.style.display='none';
  };

  // Ao carregar: se não aceita cookies, mostrar banner; se aceitou, mostrar nav
  document.addEventListener('DOMContentLoaded', function(){
    let accepted = getCookie('site_cookies');
    if(!accepted){
      let cb = document.getElementById('cookieBox');
      if(cb) cb.style.display='flex';
      // hide nav elements if exist
      // (our pages show content regardless but we keep banner until accept)
    } else {
      let cb = document.getElementById('cookieBox');
      if(cb) cb.style.display='none';
    }
  });

  // Gerador de senhas
  window.gerarSenha = function(){
    let el = document.getElementById('length');
    let out = document.getElementById('senhaOut');
    let n = 12;
    try{ n = Math.max(4, Math.min(128, parseInt(el.value)||12)); }catch(e){}
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()-_=+[]{}|;:,<.>/?";
    let s = "";
    for(let i=0;i<n;i++) s += chars.charAt(Math.floor(Math.random()*chars.length));
    if(out) out.textContent = s;
    return s;
  };

  // Auto-generate a sample password for first view if present
  document.addEventListener('DOMContentLoaded', function(){ if(document.getElementById('senhaOut')) gerarSenha(); });
})();
