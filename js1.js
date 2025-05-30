const list_gambar = document.querySelectorAll(".gambar");
const thum = document.querySelectorAll(".thumbnail");
let indeks_aktif = 0;
function next_gambar(){
    
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = indeks_aktif + 1;

    if (indeks_aktif >= list_gambar.length) {
        indeks_aktif = 0;
    }

    list_gambar[indeks_aktif].classList.add("aktif");
}

function prev_gambar(){
    
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = indeks_aktif - 1;

    if (indeks_aktif < 0){
        indeks_aktif = 4;
    }

    list_gambar[indeks_aktif].classList.add("aktif");
}

function a(){
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = 0;
    list_gambar[indeks_aktif].classList.add("aktif");
}
function b(){
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = 1;
    list_gambar[indeks_aktif].classList.add("aktif");
}
function c(){
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = 2;
    list_gambar[indeks_aktif].classList.add("aktif");
}
function d(){
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = 3;
    list_gambar[indeks_aktif].classList.add("aktif");
}
function e(){
    list_gambar[indeks_aktif].classList.remove("aktif");
    indeks_aktif = 4;
    list_gambar[indeks_aktif].classList.add("aktif");
}

setInterval(function(){
    next_gambar();
}, 4000);

/**keyboard panah kanan/kiri sebagai navigasi slide*/
document.addEventListener("keydown", function(event){
    if (event.key == "ArrowRight"){
        next_gambar();
    }else if (event.key == "ArrowLeft"){
        prev_gambar();
    }
});