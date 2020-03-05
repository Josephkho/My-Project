const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('Hur gammal är du? OBS: DU måste vara minst 20 år för att besöka sidan');

// conditional Statement
if(age >= 20) {
    // visa hemsidan
    content.style.display = 'block';
    const name = prompt('vad heter du');
    document.querySelector('.message').innerHTML = "Välkommen" + name + "till hemsidan"
    document.querySelector('#enter').className = 'granted';
} else {
    // inte gammal nog
    content.style.display = 'none';
    document.querySelector('.message').innerHTML = 'Du är inte gammla nog, tyvärr.';
    document.querySelector('#enter').className = 'denid';

}
  