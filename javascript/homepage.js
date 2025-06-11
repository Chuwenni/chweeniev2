// modal
const marked = document.querySelectorAll('.marked');
const modal = document.getElementById('myModal');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelectorAll('.close');


marked.forEach(marked => {
  marked.addEventListener('click', () => {
    modalText.textContent = 'Awww I Miss Youuu too Babby Message Me And I Will Respond';
    modal.style.display = 'block';
  });
});

closeBtn.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === modal){
    modal.style.display = 'none';
  }
}
// modal

// popup message
const modalContainer = document.getElementById('modal-message');
const closeBtns = document.querySelector('.close-btn');

window.onload = () => {
  modalContainer.style.display = 'block';
  closeBtns.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });
  window.addEventListener('click', () => {
    modalContainer.style.display = 'none';
  });
}
// popup message

// menu
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
// menu