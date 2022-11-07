
const body = document.querySelector('body');
function changercolor(){
    if(
        document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
        }else{
            document.documentElement.classList.add('dark');
        }
}
document.documentElement.classList.add('dark');
     

window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scroll > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("btnScroll").style.display = "block";
    }else{
        document.getElementById("btnScroll").style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};



var myVar = setInterval(myTime, 1000);
function myTime(){
    var d = new Date(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1){
        displayDate = d.toLocaleTimeString('pt-BR');
    }else{
        displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/pernambuco'});
    }
    document.getElementById('demo').innerText = displayDate;
};

const calculator = document.querySelector('.calculator')
const teclas = calculator.querySelector('.teclas')
MediaKeySession.addEventListener('click', e =>{
    if(e.target.matches('button')){
    const teclas = e.target
    const action = teclas.dataset.action
    }
    if (!action){
        console.log('number teclas!')
    }
    if(action ==='decimal'){
        console.log('decimal key!')
    } 
    if(action ==='clear'){
        console.log('clear key!')
    } 
    if(action ==='calculate'){
        console.log('equal key!')
    }
    const display = document.querySelector('.display')
    Keys.addEventListener('click', e =>{
        if(e.target.matches('button')){
            const key = e.target
            const action = key.dataset.action
            
        }
    })  
});

