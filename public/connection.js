$.get('/1', function(response){
    console.log("21314raf");
    document.getElementById("mainContent").innerHTML = response;
});

function Omgivning(){
    $.get('/Omgivning', function(response){
        
        document.getElementById("mainContent").innerHTML = response;
    });

}
