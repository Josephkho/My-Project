const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('How old are you? You have to be atleast 20 years old to visit this website');

// conditional Statement
if(age >= 20) {
    // visa hemsidan
    content.style.display = 'block';
    const name = prompt('vad heter du');
    document.querySelector('.message').innerHTML = "Welcome" + name + "to website"
    document.querySelector('#enter').className = 'granted';
} else {
    // inte gammal nog
    content.style.display = 'none';
    document.querySelector('.message').innerHTML = 'sorry, you are not old enough.';
    document.querySelector('#enter').className = 'denid';

}
  