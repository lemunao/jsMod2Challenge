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

// Items Controll, Challenge 2
function validateElements() {
    let inputMario = parseInt(document.querySelector('#inputMario').value)
    let inputHomer = parseInt(document.querySelector('#inputHomer').value)
    let inputPuppys = parseInt(document.querySelector('#inputPuppys').value)
    sumElement = inputMario + inputHomer + inputPuppys
    if (sumElement <= 10 && isNaN(sumElement) == false) {
        document.querySelector('#message').innerHTML = "Llevas " + sumElement;
        return;
    } if (isNaN(sumElement)) {
        document.querySelector('#message').innerHTML = "Favor solo ingresar valor númericos ";
        return;
    }
    else {
        document.querySelector('#message').innerHTML = "Llevas demasiados sticket, máximo es 10. Llevas " + sumElement;
        return;
    }
}