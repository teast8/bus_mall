'use strict';

//Array of all images... pushed to from catalogItem
var imageArray = [];
var tallyClickedArray = [];
var imageNameArray = [];
var totalclicks = 0;
var randomindex1, randomindex2, randomindex3, myBarChart;

//Event Listener Global
var userClick = document.getElementById('imageDisplay');

var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');
var resultsButton = document.getElementById('results');
var canvas = document.getElementById('chart');
//var canvas = document.getElementById('#');

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

//LOADING IMAGES TO THE PAGE FUNCTION!!!!
function displayImages() {
//GENERATES THREE RANDOM NUMBERS
  randomindex1 = Math.floor(Math.random() * imageArray.length);
  randomindex2 = Math.floor(Math.random() * imageArray.length);
  randomindex3 = Math.floor(Math.random() * imageArray.length);

  while (randomindex2 === randomindex1) {
    randomindex2 = Math.floor(Math.random() * imageArray.length);
  }

  while (randomindex3 === randomindex2 || randomindex3 === randomindex1) {
    randomindex3 = Math.floor(Math.random() * (imageArray.length));
  }
  leftImg.src = imageArray[randomindex1].filePath;
  leftImg.alt = imageArray[randomindex1].imageName;
  imageArray[randomindex1].tallyDisplayed += 1;
  centerImg.src = imageArray[randomindex2].filePath;
  centerImg.alt = imageArray[randomindex1].imageName;
  imageArray[randomindex2].tallyDisplayed += 1;
  rightImg.src = imageArray[randomindex3].filePath;
  rightImg.alt = imageArray[randomindex1].imageName;
  imageArray[randomindex3].tallyDisplayed += 1;
}

//TELLS US WHICH DOM ELEMENT WAS CLICKED
function handleUserClick(event) {
  event.preventDefault();
  totalclicks += 1;
  //alert('Click is Working');

  if (event.target.id === 'left') {
    imageArray[randomindex1].tallyClicked += 1;
    console.log('I clicked' + imageArray[randomindex1].imageName);
  }

  else if (event.target.id === 'center') {
    imageArray[randomindex2].tallyClicked += 1;
    console.log('I clicked' + imageArray[randomindex2].imageName);
  }

  else if (event.target.id === 'right') {
    imageArray[randomindex3].tallyClicked += 1;
    console.log('I clicked' + imageArray[randomindex3].imageName);
  }
  else {
    alert('Pick a product!');
  }

  if (totalclicks > 24) {
    userClick.removeEventListener('click', handleUserClick);
    collectTotalClicks();
    resultsButton.hidden = false;
    console.log('max number of clicks reached');
    imageArray = JSON.parse(localStorage.userResults);
  }

  //Re-calculates randomIndex variables
  displayImages();
}

function collectTotalClicks() {
  for (var i = 0; i < imageArray.length; i++) {
    tallyClickedArray.push(imageArray[i].tallyClicked);
    imageNameArray.push(imageArray[i].imageName);
  }
};

function handleResultsButton() {
  drawChart();
  // alert('this is when you draw the chart');
}

displayImages();

userClick.addEventListener('click', handleUserClick);
resultsButton.addEventListener('click', handleResultsButton);

var data = {
  labels: imageNameArray, // titles array we declared earlier
  datasets: [
    {
      label: 'My Bar Chart',
      data: tallyClickedArray, // votes array we declared earlier
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple'
      ],
    }
  ]
};

function drawChart() {
  var ctx = canvas.getContext('2d');
  myBarChart = new Chart(ctx,{
    type: 'bar',
    data: data,
  });
};
