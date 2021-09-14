var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        if(this.classList.value === "collapsible active"){
            this.classList.toggle("collapsible2");
            this.classList.remove("collapsible");
            let chatboxDisplay = document.getElementById("showChat");
            chatboxDisplay.style.display = "block";
            chatboxDisplay.classList.toggle("animate__fadeInUp");
            chatboxDisplay.classList.remove("animate__fadeOutDown");
        }else{
            let chatboxDisplay = document.getElementById("showChat");
            chatboxDisplay.classList.remove("animate__fadeInUp");
            chatboxDisplay.classList.toggle("animate__fadeOutDown");
            this.classList.toggle("collapsible");
            this.classList.remove("collapsible2");
            setTimeout(() => {
                chatboxDisplay.style.display = "none";
            }, 400);
        }
    });
}


function getHardResponse(input) {
    let botResponse = getBotResponse(input);
    botHtml = '<p class="botText" style="margin-top:10px"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        
    }else if(userText !== ""){
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }

}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
