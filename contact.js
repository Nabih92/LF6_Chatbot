const Inputs = document.querySelector("FORM");

function sendEmailWithData(){
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "286b93547a6672",
        Password: "4bdfb0c7d6ae16",
        To: "geekdudeforhelp@gmail.com",
        From: "geekdudeforhelp@gmail.com",
        Subject: "test",
        Body: `<h1>Neues Problem von Kunde</h1><br><br>
        <p><a style="font-weight: 800">Titel:</a> ${Inputs.titel.value}</p><br>
        <p><a style="font-weight: 800">Anrede:</a> ${Inputs.anrede.value}</p><br>
        <p><a style="font-weight: 800">Vorname:</a> ${Inputs.vorname.value}</p><br>
        <p><a style="font-weight: 800">Nachname:</a> ${Inputs.nachname.value}</p><br>
        <p><a style="font-weight: 800">Firma:</a> ${Inputs.firma.value}</p><br>
        <p><a style="font-weight: 800">Straße:</a> ${Inputs.straße.value}</p><br>
        <p><a style="font-weight: 800">Hausnummer:</a> ${Inputs.hausnr.value}</p><br>
        <p><a style="font-weight: 800">PLZ:</a> ${Inputs.plz.value}</p><br>
        <p><a style="font-weight: 800">Ort:</a> ${Inputs.ort.value}</p><br>
        <p><a style="font-weight: 800">Geschlecht:</a> ${Inputs.gender.value}</p><br>
        <p><a style="font-weight: 800">Geburtsdatum:</a> ${Inputs.birthday.value}</p><br>
        <p><a style="font-weight: 800">Telefon:</a> ${Inputs.telefon.value}</p><br>
        <p><a style="font-weight: 800">Email:</a> ${Inputs.email.value}</p><br>
        <p><a style="font-weight: 800">Nachricht / Problembeschreibung: </a> ${Inputs.problembeschreibung.value}</p><br>`
    })

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Email wurde gesendet',
        showConfirmButton: false,
        timer: 1500
    })
}