

var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output =  document.querySelector("#output");


console.log(textInput);
console.log(btnTranslate);
console.log(output)

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(txtMessage){
    return url+"?"+"text="+text;
}



function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server, Try again after some time... ")
}

btnTranslate.addEventListener("click","clickHandler");

function clickHandler() {
    var inputText = txtInput.value; 

    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
           })
        .catch(errorHandler)
};