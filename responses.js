//Linux OS
let btn1 = document.getElementById("btn1");

var linuxAntworte = `
<p id="linuxAnswerers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn11"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn12"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn13"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn14"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn15"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn16"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn17"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn18"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn19"><span>Alle Aussagen treffen nicht zu!</span></button>
</p>`;

var windowsAntworte = `
<p id="windowsAnswerers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn11"><span>Windows111</span></button>
  <button  onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="btn12"><span>Windows234234</span></button>
</p>`;

var feedbackOnFAQ = `
<p id="feedbackOnFAQAnswerers" style="text-align: center;">
  <p class="botText"><span style="margin-top:10px">Did you find an answer?</span><p>
  <button onclick="yes(this.id, this.parentNode.id)" class="Antwort1" id="btn11"><span>Yes</span></button>
  <button onclick="no(this.id, this.parentNode.id)" class="Antwort1" id="btn12"><span>No</span></button>
</p>`;

function clearCurrentButtons(id, parentId) {
  let bereich = document.getElementById(id).innerHTML;
  const M_Bereich = bereich;

  let disableButtons = document.getElementById(parentId);
  disableButtons.style.display = "none";

  let botHtml =
    "<br>" +
    '<p style="text-align:right;" class="botText">' +
    bereich +
    "</p>" +
    "<br>";
  $("#chatbox").append(botHtml);

  if (parentId == "btns1") {
    Message = "ok, um was handelt es sich genau?";
  } else if (parentId == "linuxAnswerers") {
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
  
  if(id === "btn11"){
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
