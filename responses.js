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
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="general11"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("general11").scrollIntoView(true);
  </script>
</p>`;


var linuxAntworte = `
<p id="linuxAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux0"><span>Was ist Linux?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux1"><span>Kann ich mein Betriebssystem von Linux in Windows ändern?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux2"><span>Wie kann ich Windows in Linux öffnen?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux3"><span>Kann ich bei Linux Software verwenden, die unter Windows funktioniert?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux4"><span>Was ist Ubuntu eigentlich genau?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux5"><span>Woher kommt der Name Ubuntu?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux6"><span>Welche Grundsätze hat Ubuntu?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux7"><span>Wie oft erscheint eine neue Version von Ubuntu?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux8"><span>Rechte und Lizenzen - Wie darf Ubuntu benutzt werden?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux9"><span>Wie installiere ich Ubuntu neu?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux10"><span>Wo befinden sich die Anleitungen/Dokumentationen zu Ubuntu?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="linux11"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("linux11").scrollIntoView(true);
  </script>
</p>`;

var windowsAntworte = `
<p id="windowsAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows0"><span>Was ist der Unterschied zwischen den 32-Bit- und 64-Bit-Versionen von Windows?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows1"><span>Ich habe meine Kopie von Windows über eine Universität erworben. Kann ich diese hier herunterladen?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows2"><span>Mein Windows 7-Product Key wird nicht bestätigt. Woran liegt das?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows3"><span>Ich kann die gewünschte Windows 8.1- oder Windows 10-Edition nicht finden. Wo kann ich noch suchen?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows4"><span>Ist das Medium startbar?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows5"><span>Windows war auf meinem Gerät vorinstalliert. Kann ich die Medien von dieser Website herunterladen und installieren?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows6"><span>Ich kenne das Risiko. Werden die Medien von dieser Website ordnungsgemäß auf Geräten mit vorinstalliertem Betriebssystem installiert?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows7"><span>Ich habe ein Gerät ohne Windows (z. B. von Apple), auf dem ich Windows ausführen möchte. Wo erhalte ich die Medien?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows8"><span>Ich habe Windows 7 über eine Website erworben. Der Händler hat mir mitgeteilt, dass ich über einen „System-Builder“-Product Key verfüge. Wieso ist dieser nicht zulässig?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows9"><span>Kann ich ein Upgrade auf Windows 11 rückgängig machen?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows10"><span>Wie stelle ich fest, ob auf meinem Computer eine 64-Bit-Version von Windows ausgeführt werden kann?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="windows11"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("windows11").scrollIntoView(true);
  </script>
</p>`;

var macAntworte = `
<p id="macAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac0"><span>Mein Gerät startet nicht mehr auf. Sind meine Daten verloren?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac1"><span>Soll ich dieses Update des Betriebssystems ausführen?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac2"><span>Plötzlich ist eine Fehlermeldung auf dem Bildschirm erschienen mit dem Hinweis, mein Apple sei “nicht sicher” oder “von Viren infiziert”, und dass ich “hier klicken” soll um den Fehler zu beheben.</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac3"><span>Mein Apple Mac Computer spinnt und ist definitiv komplett mit Viren verseucht!</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac4"><span>Ich werde aufgefordert, mich mit meiner Apple ID (bzw. iCloud, iTunes oder App Store) anzumelden, kann mich aber nicht an das Passwort erinnern.</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac5"><span>Bisher wurden meine Kontakte und Kalender-Einträge automatisch auf allen meinen Apple Geräten synchronisiert. Seit heute funktioniert dies nicht mehr.</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac6"><span>Mein Computer meldet “Das Startvolume ist fast voll.”. Muss ich etwas unternehmen?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac7"><span>Im Internet sehe ich oftmals Inserate für MacKeeper. Eine kostenlose Software, die meinen Apple Mac Computer schneller machen soll.</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac8"><span>Mein Apple Mac Computer meldet, dass seit x Tagen keine Time Maschine Datensicherung mehr erstellt werden konnte.</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac9"><span>Ich habe versehentlich ein paar sehr wichtige Dateien gelöscht. Sind diese wiederherstellbar?</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="mac11"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("mac11").scrollIntoView(true);
  </script>
</p>`;

var infraAntworte = `
<p id="infraAnswers" style="text-align: center;">
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra0"><span>FCS oder File Check Sequence Errors</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra1"><span>Ausrichtungsfehler (Alignment Errors)</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra2"><span>CRC-Fehler</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra3"><span>Kollisionen und verspätete Kollisionen </span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra4"><span>Ausschuss (Discards)</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra5"><span>Unbekanntes Protokoll </span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra6"><span>Bildschirm bleibt schwarz</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra7"><span>PC verwendet kein wlan</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra8"><span>WLAN Box Kontrolllampe blinkt</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra9"><span>Wie finde ich meine IP Addresse</span></button>
  <button onclick="showFeedbackOnFAQ(this.id, this.parentNode.id)" class="Antwort1" id="infra11"><span>Alle Aussagen treffen nicht zu!</span></button>
  <script>
    document.getElementById("infra11").scrollIntoView(true);
  </script>
</p>`;

var feedbackOnFAQ = `
<p class="botText"><span style="margin-top:10px">Hat es Ihnen geholfen?</span></p>
<p id="feedbackOnFAQAnswers" style="text-align: center;">
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="yes"><span>Ja</span></button>
  <button onclick="lastAnswer(this.id, this.parentNode.id)" class="Antwort1" id="no"><span>Nein</span></button>
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
var direct = false;

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
  }
  else if (parentId == "generalAnswers" && id != "general11"
          || parentId == "linuxAnswers" &&  id != "linux11"
          || parentId == "windowsAnswers" && id != "windows11"
          || parentId == "macAnswers" && id != "mac11"
          || parentId == "infraAnswers" && id != "infra11")
  {
    Message = "ok, ich habe eine Lösung in FAQ gefunden!";
    botHtml = '<p class="botText"><span>' + Message + "</span></p>";
    $("#chatbox").append(botHtml);
  }else if(id == "general11" || id == "linux11" || id == "windows11" || id == "mac11" || id == "infra11"){
    MitarbeiterName();
    direct = true;
    
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
  if(direct === false){
    $("#chatbox").append(feedbackOnFAQ);
  }
  // Show Answer in FAQ
  
  for (let i = 0; i <= 11; i++) {
    // Allgemein
    let test = ["general", "linux", "windows", "mac", "Infra"];
    for(let I = 0; I < test.length; I++){
      if(id === test[I] + i){
        let Frage = document.getElementById(`${test[I]}Q` + i);
        let Antwort = document.getElementById(`${test[I]}A` + i);
        if(i != 11){
          Frage.classList.toggle("active");
          if(Frage.classList.contains("active")) {
            Antwort.style.maxHeight = Antwort.scrollHeight + "px";
            Frage.classList.toggle("activeBackground");
          }else if(Frage.classList.contains("activeBackground")){
            Frage.className = "accordion-item-header active secondactiveBackground";
          }else if(Frage.classList.contains("secondactiveBackground")){
            Frage.className = "accordion-item-header active activeBackground";
          }
          let y = Frage.getBoundingClientRect().top + window.pageYOffset + -200;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
      else if(id === test[I] + 11 && i == 11){
        clearCurrentButtons(id, parentId);
      }
    }
  }
}

function MitarbeiterName(){
  var mitarbeiter;
  var Bereich;

  $("#chatbox").append(finalInput);
  var finalInputText = document.getElementById("lastAnswerText");
  
  if(mitarbeiter_Bereich == "generalAnswers"){
    mitarbeiter = "Unsere Spezialistin Tina";
    Bereich = "\"Allgemein\"";
  }
  else if(mitarbeiter_Bereich == "linuxAnswers"){
    mitarbeiter = "Unser Spezialist Ali";
    Bereich = "\"Linux\"";
  }
  else if(mitarbeiter_Bereich == "windowsAnswers"){
    mitarbeiter = "Unser Spezialist Jack";
    Bereich = "\"Windows\"";
  }
  else if(mitarbeiter_Bereich == "macAnswers"){
    mitarbeiter = "Unsere Mitarbeiterin Ella";
    Bereich = "\"Mac\"";
  }
  else if(mitarbeiter_Bereich == "infraAnswers"){
    mitarbeiter = "Unser Mitarbeiter Robin";
    Bereich = "\"Infrastruktur & Netzwerke\"";
  }
  
  finalInputText.innerHTML= `Beschreiben Sie bitte ihr Anlegen in dem Eingabefeld!`;

  Hinweis1 = "Bitte schließen Sie das Chatbot nicht.";
  Hinweis2 = "Warten Sie bitte.";
  answer = `<br> ${mitarbeiter} für den Bereich ${Bereich} wird in kurze für Sie da sein.`;

  finalInputText.scrollIntoView(true);
  var UserInputText = document.getElementById("textInput");
  UserInputText.placeholder = "Schreiben Sie bitte hier...";

  $('#textInput').prop("disabled", false);
}

var answer;
var interact;
var Hinweis1;
var Hinweis2;

function lastAnswer(id, parentId){
  clearCurrentButtons(id, parentId);
  var UserInputText = document.getElementById("textInput");
  
  if(id == "yes"){
    answer = "Danke für das Feedback";
    $("#chatbox").append(finalInput);
    var finalInputText = document.getElementById("lastAnswerText");
    finalInputText.innerHTML= "Wir bedanken uns bei Ihnen. <br> Wir werden uns auf ein Feedback freuen.";
    UserInputText.placeholder= "Bitte schreiben Sie hier...";
    finalInputText.scrollIntoView(true);
    $('#textInput').prop("disabled", false);
  }else if(id == "no"){
    MitarbeiterName();
  }
}

function getBotResponse(input){
  if(input !== "" && answer == "Danke für das Feedback"){
    $('#textInput').prop("disabled", true);
    var UserInputText = document.getElementById("textInput");
    UserInputText.placeholder = "Auf Wiedersehen!";
    return answer;
  }
  else if (input !== "" && interact == undefined){
    interact = true;
    return Hinweis1 + answer;
  }else if(input !== "" && interact == true){
    return Hinweis2 + answer;
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
    <p id="botStarterMessage" class="botText"><span>Hallo, ich heiße BumbleBee! wie kann ich Ihnen helfen?</span></p>
    <p id="firstBtns" style="text-align: initial;">
      <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="linux"><span>Linux OS</span></button>
      <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="winodws"><span>Windows OS</span></button>
      <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="mac"><span>Mac OS</span></button>
      <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="infra"><span>Infrastruktur & Netzwerke</span></button>
      <button onclick="showLevel1Answers(this.id, this.parentNode.id)" class="Antwort1" id="general"><span>Allgemein</span></button>
    </p>`;

    setTimeout(() => {
      $("#chatbox").append(MyResetButtons);
    }, 400);
    let TextIput = document.getElementById("textInput");
    TextIput.value = "";
    $('#textInput').prop("disabled", true);
  });
}
