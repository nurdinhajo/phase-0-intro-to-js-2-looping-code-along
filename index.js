// Code your solutions in this file

function writeCards(namesArray, event) {
 let messagesArray = [];
 for (let i = 0; i < namesArray.length; i++) {
   let message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
   messagesArray.push(message);
 }
 return messagesArray;
}

function countDown(num) {
 for (let i = num; i >= 0; i--) {
   console.log(i);
 }
}

