// query selectors
const creations = document.querySelector(".creation-cards-container");

// setup window resize listner
const mediaQuery = '(max-width: 700px)';
const mediaQueryList = window.matchMedia(mediaQuery);
let initalPath = screen.width <= 700 ? "./images/mobile/" : "./images/desktop/";
// query listener
mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    initalPath = "./images/mobile/"
  } else {
    initalPath = "./images/desktop/"
  }
  // update creation cards images sizes
  renderBackground(initalPath);
});

const cards = creations.children;
const images = [
                "image-deep-earth.jpg",
                "image-night-arcade.jpg",
                "image-soccer-team.jpg",
                "image-grid.jpg",
                "image-from-above.jpg",
                "image-pocket-borealis.jpg",
                "image-curiosity.jpg",
                "image-fisheye.jpg"
               ]
function renderBackground(path){
    for(let i = 0; i < cards.length; i++){
        cards[i].style.background = `url(${path+images[i]}) no-repeat`;
    }
}

renderBackground(initalPath);

// drawer open-close

const drawer = document.querySelector(".drawer");
function drawerOpen(){
    drawer.style.right = "0";
    console.log("dfr")
}

function drawerClose(){
  drawer.style.right = "-900px"
}