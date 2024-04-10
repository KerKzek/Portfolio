const menu = document.getElementById('menu');
const btn = document.getElementById('menubtn');
const icon = document.getElementById('iconbtn');
let isOn = false;
let count =0;

function Openmenu() {
  menu.style.display = 'block';
  if(count == 0){
    isOn=!isOn;
    icon.className = 'fa-solid fa-x';
    menu.style.transform = "translateY(-100vh)";
    setTimeout(()=>{menu.style.transform = "translateY(0vh)";},0);
    count++;
  }
  else if(!isOn){
    isOn=!isOn;
      menu.style.transform = "translateY(0px)";
      icon.className = 'fa-solid fa-x';
    }
    else{
      isOn=!isOn;
      menu.style.transform = "translateY(-100vh)";
      icon.className = 'fa-solid fa-bars';
  }
}
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1000) {
      menu.style.display = 'none';
      isOn = false;
    } 
  });