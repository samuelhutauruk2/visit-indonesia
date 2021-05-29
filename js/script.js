const slideShowNode = document.getElementById("slideShow")
const nextButtonNode = document.getElementById("next")

const images = ["bali", "bali2", "bamboo", "beach", "beach2",
                "borobudur", "bromo", "bromo2"]

var counter = 0
function nextSlideShow() {
    counter++
    if (counter === images.length) {
        counter = 0
    }
    slideShowNode.setAttribute("src", "assets/"+images[counter]+".jpg")
}

document.addEventListener("load", setInterval(nextSlideShow, 2000))