/**
 * Mudar tema
 * */
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
/**
 * Botão para o topo
 * */
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
/**
 * Horário atual do usuário
 * var myVar = setInterval(myTime, 1000);
function myTime(){
    var d = new Date(), displayHour;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1){
        displayHour = d.toLocaleTimeString('pt-BR');
    }else{
        displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/pernambuco'});
    }
    document.getElementById('demo').innerText = displayDate;
};*/

/**
 * Calculadora(incompleta)
 * */
const calculator = document.querySelector('.calculator')
const teclas = calculator.querySelector('.teclas')
Keys.addEventListener('click', e =>{
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
/**
 * Localização do usuário
 * */
const geoLocation = navigator.geolocation

geoLocation.getCurrentPosition((position)=>{
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    document.getElementById('local').console.log(lat,long)
    
})
/**
 * Tamanho do objeto
 */
const obj = {
    firstName: "farooq",
    lastName: "dad",
    age:21
}
const Keys = Object.keys(obj)
console.log(Keys)
console.log(Keys.length);
/**
 *Mudar cor
 */
/**
 *calculadora simples
 */
function calc(e){
    var operacao = e.value;

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var calculo = eval(n1+operacao+n2);
    if(!isNaN(calculo)){
        alert(calculo);
    }
}
/**function enviar(x){
    var f = document.getElementById("output")
    var txt = f.txtnome;
    txt.value = "olá "+txtnome
} */

function limpar(){
    var f=document.getElementById("frm");
    var n1 = f.n1;
    var n2 = f.n2;
    n1.value = "";
    n2.value = "";
}
/**
 * Formatar data
var myvardate = setInterval(myTime, 1000);
function myTime(){
    var dt = new Date(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1){
        displayDate = dt.toLocaleTimeString('pt-BR');
    }else{
        displayDate = dt.toLocaleTimeString('pt-BR', {timeZone: 'America/pernambuco'});
    }
    document.getElementById('data').innerText = displayDate;
}; */

var myvardate = setInterval(myTime, 1000);
function myTime(){
    var dt = new Date().toLocaleString(), displayDate;
    if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1){
        displayDate = dt.toLocaleTimeString('pt-BR');
    }else{
        displayDate = dt.toLocaleTimeString('pt-BR', {timeZone: 'America/pernambuco'});
    }
    document.getElementById('data').innerText = displayDate;};