const spanish = document.getElementById('spanish');
const english = document.getElementById('english');
const german = document.getElementById('german');
const languages = ['german', 'english', 'spanish'];
let currentLangIndex = 0;

function change() {
  const currentLang = languages[currentLangIndex];
  
  for (let i = 0; i < languages.length; i++) {
    const langElement = document.getElementById(languages[i]);
    
    if (i === currentLangIndex) {
      langElement.style.opacity = 1;
    } else {
      langElement.style.opacity = 0;
    }
  }
  
  currentLangIndex++;
  
  if (currentLangIndex >= languages.length) {
    currentLangIndex = 0;
  }
  
  setTimeout(change, 5000); // Change language every 5 seconds
}

// Set up CSS transitions for all language elements
[spanish, english, german].forEach(langElement => {
  langElement.style.transition = 'opacity 2s ease-in-out';
});

window.onload = function() {
  change();
};
