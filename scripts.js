  //  const cards = document.querySelectorAll('.memory-card');
  //  let hasFlippedCard = false;
  //  let lockBoard = false;
  //  let firstCard, secondCard;

  //  function flipCard() {
  //    if (lockBoard) return;
  //    if (this === firstCard) return;

  //    this.classList.add('flip');

  //    if (!hasFlippedCard) {
  //      hasFlippedCard = true;
  //      firstCard = this;
  //      return;
  //    }

  //    secondCard = this;
  //    lockBoard = true;

  //    checkForMatch();
  //  }

  //  function checkForMatch() {
  //    let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  //    isMatch ? disableCards() : unflipCards();
  //  }

  //  function disableCards() {
  //    firstCard.removeEventListener('click', flipCard);
  //    secondCard.removeEventListener('click', flipCard);

  //    resetBoard();
  //  }

  //  function unflipCards() {
  //    setTimeout(() => {
  //      firstCard.classList.remove('flip');
  //      secondCard.classList.remove('flip');

  //      resetBoard();
  //    }, 1000);
  //  }

//    function resetBoard() {
//      [hasFlippedCard, lockBoard] = [false, false];
//      [firstCard, secondCard] = [null, null];
//    }

  //  function shuffle() {
  //    cards.forEach(card => {
  //      let ramdomPos = Math.floor(Math.random() * 10);
  //      card.style.order = ramdomPos;
  //    });
  //  };
  // function addEvent(){
  // cards.forEach(card => card.addEventListener('click', flipCard));
  // }
  // shuffle();

  // addEvent();
  //--------------------TIMER------------------------------------------//
  
  // const timerContainer = document.querySelector(".timer");
  // let liveTimer,
  //     totalSeconds = 0;
  
  // timerContainer.innerHTML = totalSeconds + ' s';
  
  //  function startTimer() {
  //     liveTimer = setInterval(function() {
  //         totalSeconds++;
  //         timerContainer.innerHTML = totalSeconds + 's';
  //     }, 1000);
  // }
  
  // startTimer()
  
  // function stopTimer() {
  //     clearInterval(liveTimer);
  // }


  class MemoryGame {
    constructor() {
      this.cards = document.querySelectorAll('.memory-card');
      this.hasFlippedCard = false;
      this.lockBoard = false;
      this.firstCard; 
      this.secondCard;
    }
    
    
    shuffle() {
      this.cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 10);
        card.style.order = ramdomPos;
      });
      this.addEvent();
    };


    addEvent(){
      this.cards.forEach(card => card.addEventListener('click',(e)=>{

          if (this.lockBoard) return;
                  if (card === this.firstCard) return;

                  card.classList.add('flip');

                  if (!this.hasFlippedCard) {
                    this.hasFlippedCard = true;
                    this.firstCard = card;
                    return;
                  }
                
                  this.secondCard = card;
                  this.lockBoard = true;
                
                  this.checkForMatch();
                
      }));
    }

    resetBoard() {
      this.hasFlippedCard = false;
      this.lockBoard = false;
      this.firstCard = null;
      this.secondCard = null; 
    }

    unflipCards() {
      setTimeout(() => {
        this.firstCard.classList.remove('flip');
        this.secondCard.classList.remove('flip');
  
        this.resetBoard();
      }, 1000);
    }

    disableCards() {
      this.firstCard.removeEventListener('click', () => {this.addEvent()});
      this.secondCard.removeEventListener('click', () => {this.addEvent()});
 
      this.resetBoard();
    }

    checkForMatch() {
      let isMatch = this.firstCard.dataset.card === this.secondCard.dataset.card;    
    }

    

    


  }
  

  let newGame = new MemoryGame();
  newGame.shuffle();

 

 
  
  
  
