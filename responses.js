function getBotResponse() {
    if(firstMessage == 'Linux OS'){
        return "test";
    }else if (input == ""){
        return "Ich habe Sie nicht verstanden, könnten Sie es bitte wiederholen?";
    }
}


//meins

let bnt1 = document.getElementById("btn1");
    let bnt2 = document.getElementById("btn2");
    let bnt3 = document.getElementById("btn3");
    let bnt4 = document.getElementById("btn4");
    let bnt5 = document.getElementById("btn5");


  
    bnt1.addEventListener('click', ()=>{
      const mitarbeiter1 = 'Ali';
      
        let disableButtons = document.getElementById("btns1");
        disableButtons.style.display = "none";
        let botHtml = '<br>' + '<p style="text-align:right;" class="botText">' + bnt1.innerHTML + '</p>' + '<br>';
        $("#chatbox").append(botHtml);
        
   
            firstMessage = "ok handelt es um was genau?";
            botHtml = '<p class="botText"><span>' + firstMessage + '</span></p>' ;
            $("#chatbox").append(botHtml);


            let btn11 = '<button class="Antwort1" id="btn11"><span>system ist zu langsam</span></button>';
            let btn12 = '<button class="Antwort1" id="btn12"><span>Windows OS</span></button>';
            let btn13 = '<button class="Antwort1" id="btn13"><span>Mac OS</span></button>';
            let btn14 = '<button class="Antwort1" id="btn14"><span>Infrastruktur & Netzwerke</span></button>';
            let btn15 = '<button class="Antwort1" id="btn15"><span>Sacharbeit</span></button>' ;
            let botHtml1 = document.getElementById('botStarterMessage').innerHtml = '<p id="btns2" style="text-align: initial;">' +
             btn11+
             btn12+
             btn13+
             btn14+
             btn15+
        '</p>';

        

           
        
        $("#chatbox").append(botHtml1);
        btn11 = document.getElementById('btn11');
        let btns2 = document.getElementById('btns2');
        
        btn11.addEventListener('click', ()=> {
            btns2.style.display = "none";
            botHtml1 =  '<br>' + '<p style="text-align:right;" class="botText">' + document.getElementById('btn11').innerHTML; + '</p>' ;
        $("#chatbox").append(botHtml1);
            
        });


    });
    
        
    