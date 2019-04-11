document.addEventListener('DOMContentLoaded',(event)=>{
  let buttonList = document.getElementsByClassName('button');
  for (let button of buttonList) {
    if (button.classList[1] == 'is-primary') {
      button.addEventListener('click',(event)=>{
        document.getElementById('modal1').classList.add('is-active');
        console.log(document.getElementById('modal1').classList);
      })
    }
  }
})
function closeModal(){
  document.getElementById('modal1').classList.remove('is-active');
  console.log(document.getElementById('modal1').classList);
}
function removeCard(){
  let allCards  = document.body.getElementsByClassName('column');
  if (allCards.length > 0) {
    allCards[allCards.length - 1].remove();
  }
}
//eu pego o card no document.body, então se o usuário apagar todos os cards dá
//erro.
function addCard(){
  let newCard = document.body.getElementsByClassName('column')[0].cloneNode(true);
  newCard.getElementsByClassName('button')[0].addEventListener('click',(event)=>{
    document.getElementById('modal1').classList.add('is-active');
    console.log(document.getElementById('modal1').classList);
  })
  document.body.getElementsByClassName('columns')[0].appendChild(newCard);
}

