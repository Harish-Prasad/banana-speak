

var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output =  document.querySelector("#output");


// console.log(textInput);
// console.log(btnTranslate);
// console.log(output);

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(txtMessage){
    return url+"?"+"text="+txtMessage;
}



function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server, Try again after some time... ")
}


function clickHandler() {
    var inputText = textInput.value; 
    
    
    fetch(getTranslatedUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText; 
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);