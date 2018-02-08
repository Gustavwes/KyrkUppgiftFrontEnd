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
    var frm = "<div class='row'>"
    frm+="<div class='col-2 pt-3'>När du skickat din bokning kommer du att få ett mail som bekräfar din bokning där du också kommer att få all info du behöver för att betala bokningen, hur du tillträder(nyckel etc). Bekräftelsemailet kan ta ngn eller några dagar men ditt bokningsdatum avgör turordningen</div>";
    frm+="<div class='col-2 pt-3'>";
    frm += "<div class='form-inline'><form action=/form method=post>";
    frm += `<label>Veckor</label><input name=veckor placeholder='Exempel: 29,30' required/><br/>`;
    frm += `<label>Att Betala</label><input name=betalning placeholder='Exempel: 9000:-'  required/><br/>`;
    array.forEach(x => {
        frm += `<label>${x}</label><input name=${x.toLowerCase()} required/><br/>`;
    });
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    frm += `<label>Boknings Datum</label><input name=bokdatum value='${year}-${month}-${date}' readonly required/><br/>`;
    frm += `<label> </label><button type="submit" >Send</button>`
    frm += "</form></div></div>";
    var array2 = ["Namn: Sundre Sockenförening", "Org.Nummer: 123456", "c/o: Kurt Andersson","Adress: Sundre, Juves 167", "Postnummer: 623 30", "Ort: Burgsvik", "Telefon: 070-7956777", "Mail: sundreskola@gmail.com", "Plusgiro: 634 66 27-01"]
    frm+= "<div class='col-4 pt-3'><h3>Hyresvärd</h3>";
    array2.forEach(x=>{
        frm+=`<p>${x}</p>`;
    });
    frm+="<a href='http://www.sundresockenforening.se/'>Till föreningssidan</a>";
    frm+="</div></div>";
    document.getElementById("mainContent").innerHTML = frm;
}



