$.get('/1', function (response) {
    document.getElementById("mainContent").innerHTML = response;
});

function getPage(page) {
    $.get('/' + page, function (response) {
        document.getElementById("mainContent").innerHTML = response;
    });
}

function getForm() {
    var array = ["Vecka/or", "Att betala","Förnamn", "Efternamn", "Personnr", "Adress", "Postnr", "Ort", "Telefon", "Mail"];
    var frm = "<form action=/form method=post>";
    array.forEach(x => {
        frm += `<label>${x}</label><input name=${x.toLowerCase()} /><br/>`;
    });
    frm += `<label> </label><button type="submit">Send</button>`
    frm += '</form>';
    document.getElementById("mainContent").innerHTML = frm;
}



