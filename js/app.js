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
new catalogItem('Luggage Bag', 'img/bag.jpg');
new catalogItem('Luggage Bag', 'img/bag.jpg');
new catalogItem('Banana Cuts', 'img/banana.jpg');
new catalogItem('Bathroom Utility', 'img/bathroom.jpg');
new catalogItem('Open Boots', 'img/boots.jpg');
new catalogItem('Breakfast Maker', 'img/breakfast img/breakfast.jpg');
new catalogItem('Banana Cuts', 'img/bubblegum.jpg');
new catalogItem('Red Chair', 'img/chair.jpg');
new catalogItem('Monster', 'img/cthulu.jpg');
new catalogItem('Duckdog', 'img/dog-duck.jpg');
new catalogItem('Utensil Pens', 'img/dragon.jpg');
new catalogItem('Pet Sweeper', 'img/pen.jpg');
new catalogItem('Pizza Scissors', 'img/breakfast img/pet-sweep.jpg');
new catalogItem('Shark Tank', 'img/scissors.jpg');
new catalogItem('Baby Sweeper', 'img/shark.jpg');
new catalogItem('Taun Bag', 'img/tauntaun.jpg');
new catalogItem('Unicorn Meat', 'img/unicorn.jpg');
new catalogItem('Usb Tenicle', 'img/usb.jpg');
new catalogItem('Water Can', 'img/water-can.jpg');
new catalogItem('Wine-Glass', 'img/wine-glass.jpg');


var randomindex1 = [Math.floor(Math.random() * catalogArray.length);
var randomindex2 = [Math.floor(Math.random() * catalogArray.length);
var randomindex3 = [Math.floor(Math.random() * catalogArray.length);

while randomindex2 === randomindex1) {
  randomindex2 = [Math.floor(Math.random() * catalogArray.length);
}


leftImg.src = catalogArray[randomindex1].filePath;
centerImg.src = catalogArray[randomindex3].filePath;
rightImg.src = catalogArray[randomindex2].filePath;
