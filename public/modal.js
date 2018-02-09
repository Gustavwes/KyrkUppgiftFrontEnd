
//modal
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

function showPic(image, caption){
  modal.style.display = "block";
  modalImg.src = `images/${image}.jpg`;
  captionText.innerHTML = caption;
}    

// Get the <span> element that closes the modal
// var closeSpan = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// closeSpan.onclick = function() { 
//   modal.style.display = "none";
// }

modal.onclick = function() {
  modal.style.display = "none";
}