$.get('/1', function(response){
    document.getElementById("mainContent").innerHTML = response;
});

function getPage(page){
    $.get('/' + page, function(response){
        document.getElementById("mainContent").innerHTML = response;
    });
}
