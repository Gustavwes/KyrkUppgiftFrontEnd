$.get('/1', function (response) {
    document.getElementById("mainContent").innerHTML = response;
});

function getPage(page) {
    $.get('/' + page, function (response) {
        document.getElementById("mainContent").innerHTML = response;
    });
}

function getForm() {
    var array = ["Veckor", "Betala","Förnamn", "Efternamn", "Personnr", "Adress", "Postnr", "Ort", "Telefon", "Mail"];
    var frm = "<form action=/form method=post>";
    array.forEach(x => {
        frm += `<label>${x}</label><input name=${x.toLowerCase()} required/><br/>`;
    });
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var date = date.getDate();
    frm += `<label>Boknings Datum</label><input name=bokdatum value='${year}-${month}-${date}' readonly required/><br/>`;
    frm += `<label> </label><button type="submit" >Send</button>`
    frm += '</form>';
    document.getElementById("mainContent").innerHTML = frm;
}



