$.get('/1', function (response) {
    document.getElementById("mainContent").innerHTML = response;
});

function getPage(page) {
    $.get('/' + page, function (response) {
        document.getElementById("mainContent").innerHTML = response;
    });
}

function getForm() {
    
    var array = ["Förnamn", "Efternamn", "Personnr", "Adress", "Postnr", "Ort", "Telefon", "Mail"];
    var frm = "<div class='form-inline'><form action=/form method=post>";
    frm += `<label>Veckor</label><input name=veckor placeholder='Exempel: 29,30' required/><br/>`;
    frm += `<label>Att Betala</label><input name=betalning placeholder='Exempel: 9000:-'  required/><br/>`;
    array.forEach(x => {
        frm += `<label>${x}</label><input name=${x.toLowerCase()} required/><br/>`;
    });
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var date = date.getDate();
    frm += `<label>Boknings Datum</label><input name=bokdatum value='${year}-${month}-${date}' readonly required/><br/>`;
    frm += `<label> </label><button type="submit" >Send</button>`
    frm += '</form></div>';
    document.getElementById("mainContent").innerHTML = frm;
}



