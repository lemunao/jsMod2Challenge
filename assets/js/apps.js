/*function changeBorder() {
    if (document.querySelector('#marioImg')) {
        document.querySelector('#marioImg').style.border = "20px solid red";
        imgChange = 0        
    } if(imgChange = 0){
        document.querySelector('#marioImg').style.border ;
    }
}
*/
var cont = 0;
document.querySelector('#marioImg').onclick = function () {
    var image = document.querySelector('#marioImg');
    
    if (cont == 0) {
        image.style.border = '20px solid red';
        cont = 1;
    } else {
        image.style.border = '0';
        cont = 0;
    }

}
