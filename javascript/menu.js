const menuContainer = document.getElementById('menu-container');
let show = false;

function Show (){
  if (!show) {
    menuContainer.classList.add('showed');
    menuContainer.classList.remove('unshow')
    show = true;
  }else{
    menuContainer.classList.replace('showed', 'unshow');
    show = false;
  }
}  