var data = setInterval(myTime, 1000);
function myTime(){
    var h = new Date(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox')>-1){
        displayDate = h.toLocaleDateString('pt-BR');
    }else{
        displayDate = h.toLocaleDateString('pt-BR',{timeZone:'America/brasilia'});
    }
    document.getElementById("data").innerHTML = displayDate;
};
/**
    //-------------------------------------------
      const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR',
    {
        day:'2-digit',
        month:'2-digit',
        year:'numeric'.
        console.log(dataFormatada)
    })
    document.getElementById('hour').innerText = displayDate;*/