// function changeImage() {
//     var image = document.getElementById("bg");
//     if (image.src.match("images/home.png")) {
//       image.src = "images/ocad.png";
//     } else if (image.src.match("images/ocad.png")){
//         image.src = "images/space.png";
//     }else if (image.src.match("images/space.png")){
//         image.src = "images/home copy.png";}
//   }

var imageSources = ["images/home.png", "images/space.png", "images/home copy.png", "images/algonquin.png", "images/MWCSS.png", "images/dogpark.png", "images/nofrills.png", "images/ocad.png", "images/lot.png"];
var infoSources = ["images/info/info1.png", "images/info/info3.png", "images/info/info4.png", "images/info/info5.png", "images/info/info6.png", "images/info/info7.png", "images/info/info8.png", "images/info/info9.png", "images/info/info10.png"];
var currentIndex = 1;
var interval;

function changeImg() {
    var image = document.getElementById("bg");
    var info = document.getElementById("bginfo");
    if (currentIndex < imageSources.length) {
        image.style.transform = "scale(2.5)";
        setTimeout(function(){
            image.src = imageSources[currentIndex];
            info.src = infoSources[currentIndex];
            image.style.transform = "scale(1)";
            currentIndex++;}, 400);
    } else {
        clearInterval(interval);
        interval = null;
    }
}

function start() {
    changeImg();
    interval = setInterval(changeImg, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}



const car = document.querySelector(".car-anim");

window.addEventListener("scroll", appearOnScroll);


function appearOnScroll(){
    let carPosition = car.getBoundingClientRect().top ;
    let windowHeight = window.innerHeight/2;
    if(windowHeight>carPosition){
        car.classList.remove("push-left");
    }else{
        car.classList.add("push-left");
    }
}

  document.addEventListener('mousemove', function(event) {
    const screenHeight = window.innerHeight;
    const mousePositionY = event.clientY;
  
    const showImage = mousePositionY <= (3/5) * screenHeight;
    const bginfo = document.getElementById('bginfo');
    
    if (showImage) {
        bginfo.style.transform = 'translateX(-50%) translateY(0)';
    } else {
        bginfo.style.transform = 'translateX(-50%) translateY(100%)';
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    preloadImages();
});

function preloadImages() {
    console.log('loaded images');
    const imageUrls = [
        "images/home.png", "images/space.png", "images/home copy.png", "images/algonquin.png", "images/MWCSS.png", "images/dogpark.png", "images/nofrills.png", "images/ocad.png", "images/lot.png",
        "images/info/info1.png", "images/info/info3.png", "images/info/info4.png", "images/info/info5.png", "images/info/info6.png", "images/info/info7.png", "images/info/info8.png", "images/info/info9.png", "images/info/info10.png",
        "images/acura.png", "images/acurahober.png", "images/iphonexr-redhover.png", "images/breakpedalhover.png", "images/gaspedalhover.png",
        "images/IMG_0601.JPG"
    ];

    for (const imageUrl of imageUrls) {
        const img = new Image();
        img.src = imageUrl;
    }
}