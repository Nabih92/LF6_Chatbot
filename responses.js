var linuxAntworte = `
<p id="linuxAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux1"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux2"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux3"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux4"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux5"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux6"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux7"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux8"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux9"><span>Alle Aussagen treffen nicht zu!</span></button>
</p>`;

var windowsAntworte = `
<p id="windowsAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows1"><span>Windows111</span></button>
  <button  onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows2"><span>Windows234234</span></button>
</p>`;

var feedbackOnFAQ = `
<p class="botText"><span style="margin-top:10px">Hat es dir geholfen?</span></p>
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="yes"><span>Yes</span></button>
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="no"><span>No</span></button>
</p>`;

var finalInput = `
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <p class="botText"><span style="margin-top:10px" id="lastAnswerText"></span></p>
</p>`;

var mitarbeiter_Bereich;
var einmal;
function clearCurrentButtons(id, parentId) {
  let bereich = document.getElementById(id).innerHTML;
  let disableButtons = document.getElementById(parentId);
  disableButtons.style.display = "none";

  if(einmal === true){
    einmal = false;
   mitarbeiter_Bereich = parentId;
  }

  let botHtml = "<br id='breakStatement'>" + '<p style="text-align:right;" class="botText">' + bereich + "</p>" + "<br id='breakStatement'>";
  $("#chatbox").append(botHtml);

  if (parentId == "firstBtns") {
    Message = "ok, um was handelt es sich genau?";
    botHtml = '<p class="botText"><span>' + Message + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("userInput").scrollIntoView(true);
  }else if (parentId == "linuxAnswers" || parentId == "windowsAnswers"){
    Message = "ok, ich habe eine Lösung in FAQ gefunden!";
    botHtml = '<p class="botText"><span>' + Message + "</span></p>";
    $("#chatbox").append(botHtml);
    document.getElementById("userInput").scrollIntoView(true);
  }
  
  document.getElementById("userInput").scrollIntoView(true);
}

function showLevel1Answers(id, parentId) {
  clearCurrentButtons(id, parentId);
  einmal = true;
  if (id == "linux") {
    $("#chatbox").append(linuxAntworte);
  }

  if (id == "winodws") {
    $("#chatbox").append(windowsAntworte);
  }
  document.getElementById("userInput").scrollIntoView(true);
}

function showFeedbackOnFAQ(id, parentId) {
  clearCurrentButtons(id, parentId);
  $("#chatbox").append(feedbackOnFAQ);
  
  if(id === "linux1"){
    let FrageZwei = document.getElementById("FrageZwei");
    let AntwortZwei = document.getElementById("AntwortZwei");

    FrageZwei.classList.toggle("active");
    if(FrageZwei.classList.contains("active")) {
      AntwortZwei.style.maxHeight = AntwortZwei.scrollHeight + "px";
      FrageZwei.classList.toggle("activeBackground");
    }else {
      AntwortZwei.style.maxHeight = 0;
    }
    FrageZwei.scrollIntoView(true);
  }
}

var answer;

function lastAnswer(id, parentId){
  clearCurrentButtons(id, parentId);
  var UserInputText = document.getElementById("textInput");
  
  if(id == "yes"){
    answer = "Danke für das Feedback"
    $("#chatbox").append(finalInput);
    var finalInputText = document.getElementById("lastAnswerText");
    finalInputText.innerHTML= "Wir bedanken uns bei Ihnen. <br> Wir werden uns auf ein Feedback freuen.";
    UserInputText.placeholder= "Bitte schreiben Sie hier...";

    $('#textInput').prop("disabled", false);
    document.getElementById("userInput").scrollIntoView(true);
  }else if(id == "no"){
    $("#chatbox").append(finalInput);
    var finalInputText = document.getElementById("lastAnswerText");
    
    if(mitarbeiter_Bereich == "linuxAnswers"){
        finalInputText.innerHTML= "Bleiben Sie bitte dran, unser Mitarbeiter Ali wird Sie in kurze kontaktieren.";
        answer = "bitte warten Sie. Unser Mitarbeiter Ali ist in kurze da.";
    }else if(mitarbeiter_Bereich == "windowsAnswers"){
        finalInputText.innerHTML= "Bleiben Sie bitte dran, unser Mitarbeiter Jack wird Sie in kurze kontaktieren.";
        answer = "bitte warten Sie. Unser Mitarbeiter jack ist in kurze da";
    }
     
    UserInputText.placeholder = "Bitte schreiben Sie hier...";

    $('#textInput').prop("disabled", false);
    document.getElementById("userInput").scrollIntoView(true);
  }

  document.getElementById("userInput").scrollIntoView(true);
}

function getBotResponse(input){
  if(input !== "" && answer == "Danke für das Feedback"){
    $('#textInput').prop("disabled", true);
    var UserInputText = document.getElementById("textInput");
    UserInputText.placeholder = "Auf Wiedersehen!";
    return answer;
  }
  else if (input !== ""){
    return answer;
  }
}

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        $(".botText").remove();
        $("#linuxAnswers").remove();
        $("#feedbackOnFAQAnswers").remove();
        $("#firstBtns").remove();
        $(".userText").remove();
        for (let i = 0; i < 100; i++) {
            let test = document.getElementById("breakStatement");
            $("#breakStatement").remove();
        }
        let MyResetButtons = `
        <br id="breakStatement">
        <p id="botStarterMessage" class="botText"><span>Hallo, ich heiße BumbleBee! wie kann ich dir helfen?</span></p>
        <p id="firstBtns" style="text-align: initial;">
            <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="linux"><span>Linux OS</span></button>
            <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="winodws"><span>Windows OS</span></button>
            <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="mac"><span>Mac OS</span></button>
            <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="infra"><span>Infrastruktur & Netzwerke</span></button>
            <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="general"><span>Allgemein</span></button>
        </p>`;
        $("#chatbox").append(MyResetButtons);
        let TextIput = document.getElementById("textInput");
        TextIput.value = "";
        $('#textInput').prop("disabled", true);
    });
}
