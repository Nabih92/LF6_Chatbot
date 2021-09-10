//Linux OS
let btn1 = document.getElementById("btn1");

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
<p class="botText"><span style="margin-top:10px">Did you find an answer?</span></p>
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="yes"><span>Yes</span></button>
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="no"><span>No</span></button>
</p>`;

var finalInput = `
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <p class="botText"><span style="margin-top:10px" id="lastAnswerText"></span><p>
</p>`;

var Mitarbeiter_Bereich;

function clearCurrentButtons(id, parentId) {
  let bereich = document.getElementById(id).innerHTML;
  Mitarbeiter_Bereich = parentId;

  let disableButtons = document.getElementById(parentId);
  disableButtons.style.display = "none";

  let botHtml =
    "<br>" +
    '<p style="text-align:right;" class="botText">' +
    bereich +
    "</p>" +
    "<br>";
  $("#chatbox").append(botHtml);

  if (parentId == "firstBtns") {
    Message = "ok, um was handelt es sich genau?";
  } else{
    Message = "ok, ich habe eine Lösung in FAQ gefunden!";
  }
  botHtml = '<p class="botText"><span>' + Message + "</span></p>";
  $("#chatbox").append(botHtml);
  document.getElementById("userInput").scrollIntoView(true);
}

function showLevel1Answers(id, parentId) {
  clearCurrentButtons(id, parentId);

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
  var finalInputText = document.getElementById("lastAnswerText");
  if(id == "yes"){
    answer = "Danke für das Feedback"

    $("#chatbox").append(finalInput);
    finalInputText.innerHTML = "Wir bedanken uns bei Ihnen. <br> Wir werden uns auf ein Feedback freuen.";
    UserInputText.placeholder = "Bitte schreiben Sie hier...";

    $('#textInput').prop("disabled", false);

  }else if(id == "no"){

    $("#chatbox").append(finalInput);
    if(Mitarbeiter_Bereich == "linuxAnswers"){
      finalInputText.innerHTML = "Bleiben Sie bitte dran, unser Mitarbeiter Ali wird Sie in kurze kontaktieren.";
    }
    UserInputText.placeholder = "Bitte schreiben Sie hier...";

    $('#textInput').prop("disabled", false);
  }

  document.getElementById("userInput").scrollIntoView(true);
}

function getBotResponse(input){
  if(input !== ""){
    return answer;
  }
}