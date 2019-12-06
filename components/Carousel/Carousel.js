/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  //create
  carousel = document.createElement('div');
  cLeftBtn = document.createElement('div');
  cMountains = document.createElement('img');
  cMountains.display = 1;
  cComputer = document.createElement('img');
  cTrees = document.createElement('img');
  cTurnTable = document.createElement('img');
  cRightBtn = document.createElement('div');
  //assign
  carousel.classList.add('carousel');
  cLeftBtn.classList.add('left-button');
  cLeftBtn.textContent = " < ";
  cMountains.src = "assets/carousel/mountains.jpeg";
  cComputer.src = "assets/carousel/computer.jpeg";
  cTrees.src = "assets/carousel/trees.jpeg";
  cTurnTable.src = "assets/carousel/turntable.jpeg";
  cRightBtn.classList.add('right-button');
  cRightBtn.textContent = " > ";
  //assemble
  carousel.appendChild(cLeftBtn);
  carousel.appendChild(cMountains);
  carousel.appendChild(cComputer);
  carousel.appendChild(cTrees);
  carousel.appendChild(cTurnTable);
  carousel.appendChild(cRightBtn);
  //return
  return carousel;
}

const carouselContainer = document.getElementsByClassName('carousel-container').item(0);
carouselContainer.appendChild(Carousel());
const refs = document.querySelectorAll('.carousel img');

var carouselImage = 0;
function carouselNext() {
  refs[carouselImage].style.display = "none";
  carouselImage = (carouselImage + 1) % refs.length;
  refs[carouselImage].style.display = "flex";
}
function carouselPrevious() {
  refs[carouselImage].style.display = "none";
  if (carouselImage > 0) {
    carouselImage = (carouselImage - 1) % refs.length;
  } else carouselImage = refs.length - 1;
  refs[carouselImage].style.display = "flex";
}
const leftButton = document.getElementsByClassName('left-button').item(0);
const rightButton = document.getElementsByClassName('right-button').item(0);

leftButton.addEventListener("click", carouselPrevious);
rightButton.addEventListener("click", carouselNext);
carouselNext();