// Declare global variables


// Create main container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container-style')
document.body.appendChild(mainContainer);

// Create each card and append
const cardArray = [];
const rowArray = [];
for (let i = 0; i < 60; i +=1){
  
  // Create each card
  cardArray[i] = document.createElement('section');
  cardArray[i].classList.add('card-style')
  mainContainer.appendChild(cardArray[i]);
  cardArray[i].innerHTML = i + 1;

  // Create each modal
  const modal = document.createElement('div');
  modal.classList.add("modal-style");
  document.body.appendChild(modal);

  // Add img to each modal
  const popUpVerse = document.createElement('img');
  popUpVerse.classList.add('verse-img-style');
  popUpVerse.src = `memory-cards/Memory cards-1-${ ('0'+ (i+1)).substr(-2)}.png`;
  modal.appendChild(popUpVerse);

  // Add close button to each modal
  const closeBtn = document.createElement('div');
  closeBtn.classList.add('closeBtn');
  modal.appendChild(closeBtn);
  closeBtn.innerHTML = 'X';

  // Card card click functionality
  cardArray[i].addEventListener('click', () => {
    console.log(i+1);
    console.log(`memory-cards/Memory cards-1-${ ('0'+ (i+1)).substr(-2)}.png`);
    modal.style.display = "block";
  })
  // When click in white space, remove the pop up img
  modal.addEventListener('click', (event) =>{
    if (event.target === modal || event.target === closeBtn) {
    console.log(event.target);
    modal.style.display = "none";
  }
  })

}