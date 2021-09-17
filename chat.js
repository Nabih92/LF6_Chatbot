var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        if(this.classList.value === "collapsible active"){
            let removeHelpMessage = document.getElementById("HelpMessageRemove");
            removeHelpMessage.style.display = "none";

            this.classList.toggle("collapsible2");
            this.classList.remove("collapsible");
            let chatboxDisplay = document.getElementById("showChat");
            chatboxDisplay.classList.toggle("active");
            // chatboxDisplay.style.transform = "scale3d(1, 1, 1) skew(11deg, 0deg) rotateY(75deg) translateX(369px) translateY(284px) scaleY(0.1) scaleX(0.4)";
            // setTimeout(() => {
            //     chatboxDisplay.style.transform = "scale3d(1, 1, 1) translateX(-7px) translateY(21px)";
            // }, 200);
            chatboxDisplay.style.clipPath = "circle(100%)";
        }else{
            let removeHelpMessage = document.getElementById("HelpMessageRemove");
            setTimeout(() => {
                removeHelpMessage.style.display = "block";
            }, 700);

            this.classList.toggle("collapsible");
            this.classList.remove("collapsible2");
            let chatboxDisplay = document.getElementById("showChat");
            chatboxDisplay.classList.remove("active");
            // chatboxDisplay.style.transform = "scale3d(1, 1, 1) skew(11deg, 0deg) rotateY(75deg) translateX(369px) translateY(284px) scaleY(0.1) scaleX(0.4)";
            // setTimeout(() => {
            //     chatboxDisplay.style.transform = "scale3d(1, 1, 1) skew(0deg, 0deg) rotateY(0deg) translateX(1000px) translateY(1000px) scaleY(0) scaleX(0)";
            // }, 300);
            chatboxDisplay.style.clipPath = "circle(0% AT 175% 225%)";
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
