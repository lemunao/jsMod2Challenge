//Image mod Challenge one
//Create pointer
var cont = 0;
//Make query selector to find event onclick and create function to make validations

document.querySelector('#marioImg').onclick = function () {
    var image = document.querySelector('#marioImg');
    //Start condition
    if (cont == 0) {
        //Added atributes to image
        image.setAttribute("style", "border: 2px solid red");
        //pointer = 1
        cont = 1;
    } else {
        //remove properties
        image.style.removeProperty("border");
        //pointer = 0
        cont = 0;
    }
}

// Items Control, Challenge 2
function validateElements() {
    //Sum elements
    sumElement = parseInt(document.querySelector('#inputMario').value) + parseInt(document.querySelector('#inputHomer').value) + parseInt(document.querySelector('#inputPuppys').value)
    //Validate less or equals 10, verify number
    if (sumElement <= 10 && isNaN(sumElement) == false) {
        document.querySelector('#message').innerHTML = "Llevas " + sumElement;
        return;
    } if (isNaN(sumElement)) { //Verify nan
        document.querySelector('#message').innerHTML = "Favor solo ingresar valor númericos ";
        return;
    }//More than ten
    else {
        document.querySelector('#message').innerHTML = "Llevas demasiados sticket, máximo es 10. Llevas " + sumElement;
        return;
    }
}

//Password Check
function numValidation() {
    //Concat the information as a text
    let concatNum = document.querySelector('#first-number').value + document.querySelector('#second-number').value + document.querySelector('#third-number').value
    //Soft validation 911
    if (concatNum == 911) {
        document.querySelector('#validation').innerHTML = "Password 1 correcto";
        return;
    } if (concatNum == 714) { //Soft validation 714
        document.querySelector('#validation').innerHTML = "Password 2 correcto";
        return
    } else { //Other
        document.querySelector('#validation').innerHTML = "Password erroneo";
        return
    }
}