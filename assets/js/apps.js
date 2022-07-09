//Image mod
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
