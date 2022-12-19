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