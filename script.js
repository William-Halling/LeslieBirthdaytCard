class Card {
  constructor() {
    this.card = document.getElementById('card');
  }
  
  // Toggle the 'flipped' class on the card container
  toggleCard() {
    this.card.classList.toggle('flipped');
  }
}

const birthdayCard = new Card();
document.querySelectorAll('.flip-card button').forEach(button => {
  button.addEventListener('click', () => birthdayCard.toggleCard());
});
