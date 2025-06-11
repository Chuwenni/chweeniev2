const vidContainer = document.getElementById('vid-container');
const showVidContainerBtn = document.getElementById('show-vid');

let showVid = false

showVidContainerBtn.addEventListener('click', () => {
  if (!showVid){
    vidContainer.classList.add('active');
    showVidContainerBtn.innerHTML = 'Unshow Video';
    showVid = true;
  }
  else{
    vidContainer.classList.remove('active');
    showVidContainerBtn.innerHTML = 'Show Video';
    showVid = false;
  }
})