window.onload;
console.log("Teste")


function test() {
    console.log("Teste")
}


window.onload = function(){
    var seconds = 00;

    var tens = 00;

    var appendTens = document.getElementById("tens");

    var appendSedonds = document.getElementById("seconds");

    var buttonStart = document.getElementById("button-start");

    var buttonStop = document.getElementById("button-stop");

    var buttonReset = document.getElementById("button-reset");

    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);

        Interval = setInterval(startTimer, 10);
        console.log("start")
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
        console.log("parar")
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = '00';

        seconds = '00';

        appendTens.innerHTML = tens;

        appendSedonds.innerHTML = seconds;

    }
    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSedonds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSedonds.innerHTML = seconds;
        }
    }
}
