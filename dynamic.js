const text = document.querySelector(".text");
let phrases = ["Software Engineer","ML Engineer","Data Analyst"];
let phraseIndex = 0;
let charIndex = 0;

const displayLetters = (phrase, index) => {
    text.textContent = phrase.substring(0, index + 1);
};

const typePhrase = (phrase) => {
    for (let i = 0; i < phrase.length; i++) {
        setTimeout(() => {
            displayLetters(phrase, i);
        }, i * 100);
    }
};

const load = () => {
    setTimeout(() => {
        typePhrase(phrases[phraseIndex]);
        phraseIndex = (phraseIndex + 1) % phrases.length; 
    }, 0);
};
load(); 
setInterval(() => {
    load();
}, 3000); 
