console.log(document.querySelector('.js-button').classList.contains('js-button'));

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  cost = cost < 40 ? cost += 10 : cost;

  document.querySelector('.js-total-cost')
    .innerHTML = `${cost}$`;
}

function subscribe(){

  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerText === 'Add to Cart') {
    buttonElement.innerHTML = 'Added to Cart';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Add to Cart';
    buttonElement.classList.remove('is-subscribed');
}

}

function isToggled (selector) {

  const toggled = document.querySelector(selector);
  console.log(toggled);

  if(toggled.classList.contains('is-toggled')) {
    
    toggled.classList.remove('is-toggled');

  } else {
    
    check();
    toggled.classList.add('is-toggled');
  }
}

function check() {
  const previousButton = document.querySelector('.is-toggled');
  console.log(previousButton);
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
  
}