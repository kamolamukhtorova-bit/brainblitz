(function(){
  var r=document.documentElement,b=document.getElementById('theme'),dm=matchMedia('(prefers-color-scheme: dark)');
  try{var t=localStorage.getItem('bb-theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
  function cur(){return r.getAttribute('data-theme')||(dm.matches?'dark':'light')}
  function paint(){if(!b)return;var d=cur()==='dark';b.setAttribute('aria-pressed',d);b.setAttribute('aria-label',d?'Light mode':'Dark mode');b.textContent=d?'☀️':'🌙'}
  if(b)b.addEventListener('click',function(){var n=cur()==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('bb-theme',n)}catch(e){}paint()});
  paint();
})();
