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