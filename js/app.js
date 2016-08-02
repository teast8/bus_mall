'use strict';

//Array of all images... pushed to from catalogItem
var imageArray = [];

//Event Listener Global
var userClick = document.getElementById('imageDisplay');

var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

function catalogItem (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;

  imageArray.push(this);
}

new catalogItem('Luggage Bag', 'img/bag.jpg');
new catalogItem('Banana Cuts', 'img/banana.jpg');
new catalogItem('Bathroom Utility', 'img/bathroom.jpg');
new catalogItem('Open Boots', 'img/boots.jpg');
new catalogItem('Breakfast Maker', 'img/breakfast.jpg');
new catalogItem('Meatball Gum', 'img/bubblegum.jpg');
new catalogItem('Red Chair', 'img/chair.jpg');
new catalogItem('Monster', 'img/cthulhu.jpg');
new catalogItem('Duckdog', 'img/dog-duck.jpg');
new catalogItem('Utensil Pens', 'img/dragon.jpg');
new catalogItem('Pet Sweeper', 'img/pen.jpg');
new catalogItem('Pet Removal', 'img/pet-sweep.jpg');
new catalogItem('Pizza Scissors', 'img/scissors.jpg');
new catalogItem('Shark Tank', 'img/shark.jpg');
new catalogItem('Baby Sweeper', 'img/sweep.jpg');
new catalogItem('Taun Bag', 'img/tauntaun.jpg');
new catalogItem('Unicorn Meat', 'img/unicorn.jpg');
new catalogItem('Usb Tenicle', 'img/usb.jpg');
new catalogItem('Water Can', 'img/water-can.jpg');
new catalogItem('Wine-Glass', 'img/wine-glass.jpg');

function loadImages() {

  var randomindex1 = Math.floor(Math.random() * imageArray.length);
  var randomindex2 = Math.floor(Math.random() * imageArray.length);
  var randomindex3 = Math.floor(Math.random() * imageArray.length);

}
 while (randomindex2 === randomindex1) {
   randomindex2 = Math.floor(Math.random() * imageArray.length)
}
while (randomindex3 === randomindex2 || randomindex3 === randomindex1) {
  randomindex3 = Math.floor(Math.random() * imageArray.length));
}


leftImg.src = imageArray[randomindex1].filePath;
centerImg.src = imageArray[randomindex3].filePath;
rightImg.src = imageArray[randomindex2].filePath;

userClick.addEventListener('click', handleUserClick);
