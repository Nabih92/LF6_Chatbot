const SendButton = document.getElementById("btn");
const Inputs = document.querySelector("FORM");



SendButton.addEventListener('click', ()=>{
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "286b93547a6672",
        Password: "4bdfb0c7d6ae16",
        To: "alkalashrouny@gmail.com",
        From: "geekdudeforhelp@gmail.com",
        Subject: "test",
        Body: `${Inputs.name}`
    }).then(()=>{alert("RICHTIG")})
})