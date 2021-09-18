fetch("FaqFrage&Antwort.json")
.then(response => response.json())
.then(data => {
  for (let i = 0; i < data.Allgemein.length; i++) {
    let AllgemeinFAQ = `
    <div class="accordion-item">
      <div class="accordion-item-header" id="AllgemeinFrage${i}">${data.Allgemein[i].Frage}</div>
      <div class="accordion-item-body" id="AllgemeinAntwort${i}">
        <div class="accordion-item-body-content">${data.Allgemein[i].Antwort}</div>
      </div>
    </div>`;
    $("#AllgemeinFAQ").append(AllgemeinFAQ); 
  }
  for (let i = 0; i < data.LinuxOS.length; i++) {
    let LinuxFAQ = `
    <div class="accordion-item">
      <div class="accordion-item-header" id="LinuxFrage${i}">${data.LinuxOS[i].Frage}</div>
      <div class="accordion-item-body" id="LinuxAntwort${i}">
        <div class="accordion-item-body-content">${data.LinuxOS[i].Antwort}</div>
      </div>
    </div>`;
    $("#LinuxOSFaq").append(LinuxFAQ);
  }
  for (let i = 0; i < data.WindowsOS.length; i++) {
    let WindowsOS = `
    <div class="accordion-item">
      <div class="accordion-item-header" id="WindowsFrage${i}">${data.WindowsOS[i].Frage}</div>
      <div class="accordion-item-body" id="WindowsAntwort${i}">
        <div class="accordion-item-body-content">${data.WindowsOS[i].Antwort}</div>
      </div>
    </div>`;
    $("#WindowsOSFaq").append(WindowsOS);
  }
  for (let i = 0; i < data.MacOS.length; i++) {
    let MacOSFAQ = `
    <div class="accordion-item">
      <div class="accordion-item-header" id="MacFrage${i}">${data.MacOS[i].Frage}</div>
      <div class="accordion-item-body" id="MacAntwort${i}">
        <div class="accordion-item-body-content">${data.MacOS[i].Antwort}</div>
      </div>
    </div>`;
    $("#MacOSFaq").append(MacOSFAQ);
  }
  for (let i = 0; i < data.InfrastrukturNetzwerke.length; i++) {
    let NetzwerkeFAQ = `
    <div class="accordion-item">
      <div class="accordion-item-header" id="InfraFrage${i}">${data.InfrastrukturNetzwerke[i].Frage}</div>
      <div class="accordion-item-body" id="InfraAntwort${i}">
        <div class="accordion-item-body-content">${data.InfrastrukturNetzwerke[i].Antwort}</div>
      </div>
    </div>`;
    $("#NetzwerkeFaq").append(NetzwerkeFAQ);
  }
})
.then(()=>{
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
})
