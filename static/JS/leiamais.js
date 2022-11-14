/* LEIA MAIS 1 */
function leiaMais(){
    var pontos=document.getElementsByClassName("pontos")[0];
    var maisTexto=document.getElementsByClassName("mais")[0];
    var btnLeiaMais=document.getElementsByClassName("btnLeiaMais")[0];

    if(pontos.style.display === "none" ){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Veja Mais - Artilheiros";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Veja Menos - Artilheiros";
    }
}

var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlid1 = 1;

/* LEIA MAIS 2 */
function leiaMais2(){
    var pontos=document.getElementsByClassName("pontos")[1];
    var maisTexto=document.getElementsByClassName("mais")[1];
    var btnLeiaMais=document.getElementsByClassName("btnLeiaMais")[1];

    if(pontos.style.display === "none" ){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Veja Mais - Média Gols";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Veja Menos - Média Gols";
    }
}

var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide2 = 1;    

    

    