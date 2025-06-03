// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
  if (dynamicText.textContent === "This is some sample text.") {
    dynamicText.textContent = "The text has been changed dynamically!";
    dynamicText.style.color = 'blue';  // Modify CSS styles dynamically
  } else {
    dynamicText.textContent = "This is some sample text.";
    dynamicText.style.color = 'black';
  }
});

// Add or remove an element when a button is clicked
const toggleBoxBtn = document.getElementById('toggle-box-btn');
let boxExists = false;

toggleBoxBtn.addEventListener('click', () => {
  const mainSection = document.querySelector('main section');

  if (!boxExists) {
    const box = document.createElement('div');
    box.id = 'color-box';
    box.textContent = 'I am a dynamically added box!';
    box.style.width = '200px';
    box.style.height = '100px';
    box.style.backgroundColor = 'coral';
    box.style.marginTop = '20px';
    box.style.color = 'white';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.fontWeight = 'bold';

    mainSection.appendChild(box);
    boxExists = true;
  } else {
    const box = document.getElementById('color-box');
    if (box) {
      mainSection.removeChild(box);
      boxExists = false;
    }
  }
});

