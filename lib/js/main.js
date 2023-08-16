let img1 = document.getElementById("first");
//img1.style.visibility = "hidden";

//img1.style.display = "none";

img1.remove();

let newImg = document.createElement("img");
let mainContainer = document.querySelector(".main-container");

mainContainer.appendChild(newImg);
newImg.src = "assets/cry.png";