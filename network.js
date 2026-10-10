window.MP = (()=>{
  let localName=(localStorage.getItem('bugbreakUsername')||'BugKeeper').slice(0,16);
  const noop=()=>{};
  function setUsername(v){localName=(v||'BugKeeper').trim().slice(0,16)||'BugKeeper';try{localStorage.setItem('bugbreakUsername',localName)}catch{} updateUI();return localName}
  function getUsername(){return localName}
  function isConnected(){return false}
  function connectedCount(){return 1}
  function bind(){}
  function updateUI(){
    const badge=document.getElementById('netBadge');
    if(badge){badge.textContent='SOLO';badge.classList.remove('connected')}
  }
  function setupUI(){
    const ui=window.UI;
    const input=document.getElementById('usernameInput');
    if(input){
      input.value=localName;
      input.addEventListener('change',()=>setUsername(input.value));
      input.addEventListener('blur',()=>setUsername(input.value));
    }
    document.getElementById('multiBtn')?.addEventListener('click',()=>{window.SFX?.click();ui?.show('multiplayer')});
    document.getElementById('multiClose')?.addEventListener('click',()=>{window.SFX?.click();ui?.show('menu')});
    updateUI();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupUI,{once:true});else setupUI();
  return {bind,hostRoom:noop,joinRoom:noop,disconnect:noop,sendPlayer:noop,sendAction:noop,broadcastSnapshot:noop,broadcastControl:noop,sendControlTo:()=>false,setUsername,getUsername,isConnected,connectedCount,get role(){return 'solo'},get status(){return 'Solo only'},get selfId(){return 'solo'},get roomCode(){return ''},updateUI};
})();
