var allgemeinAntworte = `
<p id="generalAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general0"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general1"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general2"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general3"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general4"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general5"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general6"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general7"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general8"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("general8").scrollIntoView(true);
  </script>
</p>`;


var linuxAntworte = `
<p id="linuxAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux0"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux1"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux2"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux3"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux4"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux5"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux6"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux7"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux8"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("linux8").scrollIntoView(true);
  </script>
</p>`;

var windowsAntworte = `
<p id="windowsAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows0"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows1"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows2"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows3"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows4"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows5"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows6"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows7"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows8"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("windows8").scrollIntoView(true);
  </script>
</p>`;

var macAntworte = `
<p id="macAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac0"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac1"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac2"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac3"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac4"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac5"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac6"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac7"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac8"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("mac8").scrollIntoView(true);
  </script>
</p>`;

var infraAntworte = `
<p id="infraAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra0"><span>Definitionen und Überblick</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra1"><span>Debian GNU/Linux bekommen und installieren</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra2"><span>Eine Debian-Distribution auswählen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra3"><span>IKompatibilitätsfragen</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra4"><span>Für Debian-Systeme verfügbare Software</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra5"><span>Grundlagen des Debian-Paketverwaltungssystems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra6"><span>hier kommt etwas rein</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra7"><span>Anpassen Ihres Debian GNU/Linux-Systems</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra8"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("infra8").scrollIntoView(true);
  </script>
</p>`;

var feedbackOnFAQ = `
<p class="botText"><span style="margin-top:10px">Hat es dir geholfen?</span></p>
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="yes"><span>Yes</span></button>
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="no"><span>No</span></button>
  <script>
    document.getElementById("no").scrollIntoView(true);
  </script>
</p>`;

var finalInput = `
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <p class="botText"><span style="margin-top:10px" id="lastAnswerText"></span></p>
  <script>
    document.getElementById("lastAnswerText").scrollIntoView(true);
  </script>
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

  let botHtml = "<br id='breakStatement'>" + '<p style="text-align:right;" class="userText" id="BotTextSpan">' + bereich + "</p>" + "<br id='breakStatement'>";
  $("#chatbox").append(botHtml);

  if (parentId == "firstBtns") {
    Message = "ok, um was handelt es sich genau?";
    botHtml = '<p class="botText"><span>' + Message + "</span></p>";
    $("#chatbox").append(botHtml);
  }else if (parentId == "generalAnswers" || parentId == "linuxAnswers" || parentId == "windowsAnswers" || parentId == "macAnswers" || parentId == "infraAnswers"){
    Message = "ok, ich habe eine Lösung in FAQ gefunden!";
    botHtml = '<p class="botText"><span>' + Message + "</span></p>";
    $("#chatbox").append(botHtml);
  }
}

function showLevel1Answers(id, parentId) {
  clearCurrentButtons(id, parentId);
  einmal = true;
  if(id == "general"){
    $("#chatbox").append(allgemeinAntworte);
  }
  else if (id == "linux") {
    $("#chatbox").append(linuxAntworte);
  }
  else if(id == "winodws") {
    $("#chatbox").append(windowsAntworte);
  }
  else if(id == "mac") {
    $("#chatbox").append(macAntworte);
  }
  else if(id == "infra") {
    $("#chatbox").append(infraAntworte);
  }
}

function showFeedbackOnFAQ(id, parentId) {
  clearCurrentButtons(id, parentId);
  $("#chatbox").append(feedbackOnFAQ);
  
  // Show Answer in FAQ
  
  for (let i = 0; i < 9; i++) {
    // Allgemein
    if(id === "general" + i){
      let Frage = document.getElementById("AllgemeinFrage" + i);
      let Antwort = document.getElementById("AllgemeinAntwort" + i);
      Frage.classList.toggle("active");
      if(Frage.classList.contains("active")) {
        Antwort.style.maxHeight = Antwort.scrollHeight + "px";
        Frage.classList.toggle("activeBackground");
      }
      let y = Frage.getBoundingClientRect().top + window.pageYOffset + -200;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    // Linux
    else if(id === "linux" + i){
      let Frage = document.getElementById("LinuxFrage" + i);
      let Antwort = document.getElementById("LinuxAntwort" + i);
      Frage.classList.toggle("active");
      if(Frage.classList.contains("active")) {
        Antwort.style.maxHeight = Antwort.scrollHeight + "px";
        Frage.classList.toggle("activeBackground");
      }
      let y = Frage.getBoundingClientRect().top + window.pageYOffset + -200;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    // Windows
    else if(id === "windows" + i){
      let Frage = document.getElementById("WindowsFrage" + i);
      let Antwort = document.getElementById("WindowsAntwort" + i);
      Frage.classList.toggle("active");
      if(Frage.classList.contains("active")) {
        Antwort.style.maxHeight = Antwort.scrollHeight + "px";
        Frage.classList.toggle("activeBackground");
      }
      let y = Frage.getBoundingClientRect().top + window.pageYOffset + -200;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    // Mac
    else if(id === "mac" + i){
      let Frage = document.getElementById("MacFrage" + i);
      let Antwort = document.getElementById("MacAntwort" + i);
      Frage.classList.toggle("active");
      if(Frage.classList.contains("active")) {
        Antwort.style.maxHeight = Antwort.scrollHeight + "px";
        Frage.classList.toggle("activeBackground");
      }
      let y = Frage.getBoundingClientRect().top + window.pageYOffset + -200;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
    // Infrastruktur & Netzwerke
    else if(id === "Infra" + i){
      let Frage = document.getElementById("WindowsFrage" + i);
      let Antwort = document.getElementById("WindowsAntwort" + i);
      Frage.classList.toggle("active");
      if(Frage.classList.contains("active")) {
        Antwort.style.maxHeight = Antwort.scrollHeight + "px";
        Frage.classList.toggle("activeBackground");
      }
      let y = Frage.getBoundingClientRect().top + window.pageYOffset + -200;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
}

var answer;

function lastAnswer(id, parentId){
  clearCurrentButtons(id, parentId);
  var UserInputText = document.getElementById("textInput");
  
  if(id == "yes"){
    answer = "Danke für das Feedback";
    $("#chatbox").append(finalInput);
    var finalInputText = document.getElementById("lastAnswerText");
    finalInputText.innerHTML= "Wir bedanken uns bei Ihnen. <br> Wir werden uns auf ein Feedback freuen.";
    UserInputText.placeholder= "Bitte schreiben Sie hier...";
    
    $('#textInput').prop("disabled", false);
  }else if(id == "no"){

    var mitarbeiter;

    $("#chatbox").append(finalInput);
    var finalInputText = document.getElementById("lastAnswerText");
    
    if(mitarbeiter_Bereich == "generalAnswers"){
      mitarbeiter = "unsere Mitarbeiterin Tina";
    }
    else if(mitarbeiter_Bereich == "linuxAnswers"){
      mitarbeiter = "unser Mitarbeiter Ali";
    }
    else if(mitarbeiter_Bereich == "windowsAnswers"){
      mitarbeiter = "unser Mitarbeiter Jack";
    }
    else if(mitarbeiter_Bereich == "macAnswers"){
      mitarbeiter = "unsere Mitarbeiterin Ella";
    }
    else if(mitarbeiter_Bereich == "infraAnswers"){
      mitarbeiter = "unser Mitarbeiter Robin";
    }
    
    finalInputText.innerHTML= `Bleiben Sie bitte dran, ${mitarbeiter} wird Sie in kurze kontaktieren.`;
    answer = `bitte warten Sie, ${mitarbeiter} ist in kurze da.`;

    finalInputText.scrollIntoView(true);

    UserInputText.placeholder = "Bitte schreiben Sie hier...";

    $('#textInput').prop("disabled", false);
  }
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
        $("#generalAnswers").remove();
        $("#windowsAnswers").remove();
        $("#macAnswers").remove();
        $("#infraAnswers").remove();
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
