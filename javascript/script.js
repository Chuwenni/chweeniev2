const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const error = document.querySelector('.error');

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "queene" && password === "chweenie") {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = "./pages/homepage.html";
  }else if (username !== "queene" && password === "chweenie") {
    usernameInput.style.border = '4px solid red';
    passwordInput.style.border = '4px solid rgba(255, 255, 255, 0.2)';
    error.innerHTML = 'Incorrect Username';
    usernameInput.value = ''
    passwordInput.value = ''
  }else if (username === 'queene' && password !== 'chweenie'){
    passwordInput.style.border = '4px solid red';
    usernameInput.style.border = '4px solid rgba(255, 255, 255, 0.2)';
    error.innerHTML = 'Incorrect Password';
    usernameInput.value = ''
    passwordInput.value = ''
  }else {
    usernameInput.style.border = '4px solid red';
    passwordInput.style.border = '4px solid red';
    error.innerHTML = 'Incorrect Username & Password';
    usernameInput.value = ''
    passwordInput.value = ''
  }
});

usernameInput.addEventListener('keyup', e => {
  usernameInput.style.border = '4px solid rgba(255, 255, 255, 0.2)';
});
passwordInput.addEventListener('keyup', e => {
  passwordInput.style.border = '4px solid rgba(255, 255, 255, 0.2)';
});

const message = document.getElementById('message')
const btn = document.getElementById('loginbtn')

btn.addEventListener('click', () => {
  message.classList.add('active')
  btn.style.display = 'none';
})

