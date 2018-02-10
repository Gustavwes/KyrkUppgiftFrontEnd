$.get('/1', function (response) {
    document.getElementById("mainContent").innerHTML = response;
});

function getPage(page) {
    $.get('/' + page, function (response) {
        document.getElementById("mainContent").innerHTML = response;
    });
};

function getForm() {
    var array = ["Förnamn", "Efternamn", "Personnr", "Adress", "Postnr", "Ort", "Telefon", "Mail"];
   
    //Store todays date
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();

    var html = "<div class='row justify-content-center'>";
    html += "<div class='col-2 pt-3'>";
    
    /* Form for booking  */
    var frm = "<div class='form-inline'><form action=/form method=post>";
    frm += `<label>Veckor</label><input name=veckor placeholder='Exempel: 29,30' required/><br/>`;
    frm += `<label>Att Betala</label><input name=betalning placeholder='Exempel: 9000:-'  required/><br/>`;

    array.forEach(x => {
        frm += `<label>${x}</label><input name=${x.toLowerCase()} required/><br/>`;
    });
    
    frm += `<label>Boknings Datum</label><input name=bokdatum value='${year}-${month}-${date}' readonly required/><br/>`;
    frm += `<label> </label><button type="submit" class="btn btn-primary mt-1" >Skicka</button>`
    frm += "</form></div>"
    
    /* Add form to html */
    html += frm + "</div>";
    
    var array2 = ["Namn: Sundre Sockenförening", "Org.Nummer: 123456", "c/o: Kurt Andersson","Adress: Sundre, Juves 167", "Postnummer: 623 30", "Ort: Burgsvik", "Telefon: 070-7956777", "Mail: sundreskola@gmail.com", "Plusgiro: 634 66 27-01"]
    
    /* Column with info tetx */
    var div = `<div class='col-2 pt-5'>
                    <p>När du skickat din bokning kommer du att få ett mail som bekräfar din bokning 
                    där du också kommer att få all info du behöver för att betala bokningen, 
                    hur du tillträder(nyckel etc). Bekräftelsemailet kan ta ngn eller några dagar men 
                     ditt bokningsdatum avgör turordningen</p>
                </div>`;

    html += div;

    /* Column with information */
    div = "<div class='col-2 pt-3'><h3>Hyresvärd</h3>";
    array2.forEach(x => {
        div+=`<p>${x}</p>`;
    });

    div +="<a href='http://www.sundresockenforening.se/'>Till föreningssidan</a></div>";
    
    html += div + "</div>";
    
    document.getElementById("mainContent").innerHTML = html;
}

function tryLogin(form){
    var form = document.querySelector("#loginForm");
    $.post("/login", {username: form["username"].value, password: form["password"].value}, function(response){
        document.getElementById("mainContent").innerHTML = response;
    });
    // console.log(form["username"].value + ";" +  form["password"].value);
    return false;
}
