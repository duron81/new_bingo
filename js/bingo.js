'use strict';

window.addEventListener('DOMContentLoaded', function() {

const massivImg = ['apple', 'banana', 'bread', 'burger', 'chicken', 'chips', 'chocolate_cake', 'egg', 
'eggs', 'fish', 'fruit', 'juice', 'meat', 'milk', 'potatoes', 'rice', 'strawberry_cake', 
'tomato', 'water', 'rotten', 'rotten', 'rotten', 'rotten', 'rotten'];

const massivWords = ['apple', 'banana', 'bread', 'burger', 'chicken', 'chips', 'chocolate_cake', 'egg', 
'eggs', 'fish', 'fruit', 'juice', 'meat', 'milk', 'potatoes', 'rice', 'strawberry_cake', 
'tomato', 'water'];

let initMassiv;
let wordsMassiv;
let imageName;

const img = document.querySelectorAll('.menu__item img');
const btns = document.querySelectorAll('.btn_bingo');
const btnChoose = document.querySelectorAll('.btn_white');
const btnImageWindow = document.querySelectorAll('.bingo_image');
const btnConfirm = document.querySelectorAll('.btn_confirm');
const menuItem = document.querySelectorAll('.menu__item');

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

    initMassiv = [];
    for (let i = 0; i <= 23; i++){
        initMassiv.push(i);
        shuffle(initMassiv);
    }

    wordsMassiv = [];
    for (let i = 0; i <= 18; i++){
        wordsMassiv.push(i);
        shuffle(wordsMassiv);
    }

    for (let i = 0; i<=23; i++) {
        img[i].src = `img/bingo/${massivImg[initMassiv[i]]}.jpg`;
    }

    
    for (let i = 0; i<=11; i++) {
        btns[i].innerHTML = `${massivImg[wordsMassiv[i]]}`;
    }

    

    btnChoose.forEach ((item, i) => {
        item.addEventListener('click', () => {
            if (btnImageWindow[i-1].classList.contains('hide')){
                btnImageWindow[i-1].classList.remove('hide');
                btnImageWindow[i-1].classList.add('show');
            }
            else {
                btnImageWindow[i-1].classList.remove('show');
                btnImageWindow[i-1].classList.add('hide');
            }
        });
    });

    btnConfirm.forEach ((item, i) => {
        item.addEventListener('click', () => {
            imageName = img[i].getAttribute('src');
            console.log (imageName);
            btns.forEach ((item) => {
                let x = item.innerHTML;
                x = `img/bingo/${x}.jpg`;
                if (x === imageName) {
                    item.style.background = 'rgb(192, 241, 105)';
                    menuItem[i].style.background = 'rgb(192, 241, 105)';
                }
            });

        });
    });

  

});
    

