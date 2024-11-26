const texts = [
  "THIS IS AMJAD.",
  "I'M A CICSA STUDENT",
  "I'M A CTF PLAYER.",
  "I'M CS GRADUATE ."
];

const delay = 170; // Adjust typing speed here
const backspaceDelay = 50; // Adjust backspace speed here (increased for slower animation)
let textIndex = 0;
let charIndex = 0;
let deleteIndex = 0;

function type() {
  const currentText = texts[textIndex];
  if (charIndex <= currentText.length) {
    document.getElementById('text').textContent = currentText.substring(0, charIndex);
    updateCursorPosition(charIndex); // Update cursor position
    charIndex++;
  } else {
    // Text typed fully, start backspacing
    deleteIndex = currentText.length;
    setTimeout(backspace, backspaceDelay);
    return; // Exit early to avoid scheduling the next type cycle
  }
  setTimeout(type, delay);
  
  // Reset textIndex to 0 if it reaches the end of the texts array
  if (textIndex === texts.length - 1 && charIndex === currentText.length) {
    textIndex = 0;
    charIndex = 0; // Reset charIndex when textIndex is reset
  }
}

function backspace() {
  const currentText = texts[textIndex];
  if (deleteIndex >= 0) {
    document.getElementById('text').textContent = currentText.substring(0, deleteIndex);
    updateCursorPosition(deleteIndex); // Update cursor position
    deleteIndex--;
  } else {
    // Move to the next text
    textIndex++;
    if (textIndex < texts.length) {
      charIndex = 0;
      setTimeout(type, delay);
      return; // Exit early to avoid scheduling the next backspace cycle
    }
  }
  setTimeout(backspace, backspaceDelay);
}

function updateCursorPosition(index) {
  const cursor = document.getElementById('cursor');
  const textElement = document.getElementById('text');
  const textWidth = textElement.offsetWidth;
  cursor.style.left = `${textWidth + 5}px`; // Position cursor after the typed text
}

type();
