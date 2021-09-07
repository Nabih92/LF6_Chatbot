function getBotResponse(input) {
    let inputtext = input.toLowerCase().replace('?','').replace('!','').replace(':','').replace(';','').replace(',','').replace('.','').replace('-','').replace('_','').replace('+','').replace('*','').replace('#','').replace('/','').replace('"','').replace("'","").replace('§','').replace('$','').replace('%','').replace('&','').replace('(','').replace(')','');
    if(inputtext == "hey"){
        return "Hallo! Sie sind Willkommen, wie kann ich Ihnen helfen?";
    }else if(inputtext.includes("hilfe"),inputtext.includes("helfen")){
        return "Wie kann ich Ihnen Helfen? Bitte sagen Sie mir Ihr Problem, damit ich für Sie ein Lösung finden kann.";
    }else{
        return "Ich habe Sie nicht verstanden, könnten Sie es bitte wiederholen?";
    }
}