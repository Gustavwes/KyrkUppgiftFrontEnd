$.get('/1', function(response){
    document.getElementById("mainContent").innerHTML = response;
});

function getPage(page){
    $.get('/' + page, function(response){
        document.getElementById("mainContent").innerHTML = response;
    });
}

function visaBild(image){
    // $.get('/Bild', image, function(response){
    // });
    var html = "<div class='row'><div class=col-4>";
    html += `<img src="/images/${image}.jpg" class="imageBorder img-fluid" alt="kök">`;
    html += "</div></div>";
    document.getElementById("mainContent").innerHTML = html;
}





