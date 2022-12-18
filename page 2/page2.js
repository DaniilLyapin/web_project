document.getElementById("see_but").onclick = function() {
    let alo = document.getElementById("screen").style.visibility;
    if(alo == 'hidden'){
        document.getElementById("screen").style.visibility = 'visible';
    }
    else{
        document.getElementById("screen").style.visibility = 'hidden';
    }
}