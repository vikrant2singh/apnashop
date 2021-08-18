document.getElementById("marqtext").onmouseover = function() {mouseOver()};
document.getElementById("marqtext").onmouseout = function() {mouseOut()};
document.getElementById("pro1").onmouseover = function() {clearImage()};
document.getElementById("pro1").onmouseout = function() {blurImage()};

function mouseOver() {
  document.getElementById("marqtext").style.color = "white";
  document.getElementById("marqtext").style.fontSize = "32px";
}

function mouseOut() {
  document.getElementById("marqtext").style.color = "black";
  document.getElementById("marqtext").style.fontSize = "24px";
}

function openNav() {
document.getElementById("myNav").style.display = "block";
}

function closeNav() {
document.getElementById("myNav").style.display = "none";
}