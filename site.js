const menu=document.querySelector('#mobile-menu');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));document.querySelector('#lab-nav').classList.toggle('open',open)});
document.querySelector('#lab-nav')?.addEventListener('click',e=>{if(e.target.closest('a')){menu?.setAttribute('aria-expanded','false');document.querySelector('#lab-nav').classList.remove('open')}});
document.querySelector('#component-toggle')?.addEventListener('click',e=>{const on=document.body.classList.toggle('show-components');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=on?'Hide Drupal components':'Show Drupal components'});
