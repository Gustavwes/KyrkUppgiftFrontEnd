
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

modal.onclick = function() {
  modal.style.display = "none";
}