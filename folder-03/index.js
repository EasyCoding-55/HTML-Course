const image = document.getElementById("img");
const button = document.getElementById("btn");

function toggleImage() {
  if (image.getAttribute("src") === "image-1.jpg") {
    image.setAttribute("src", "image-2.jpg");
  } else {
    image.setAttribute("src", "image-1.jpg");
  }
}

button.addEventListener("click", toggleImage);
