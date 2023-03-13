function Convert(){
    let giatrivao = document.getElementById('dauvao').value;
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    if (a == b) {
        alert(giatrivao);
    }
    if (a == "VND"&& b =="USD"){
        alert(giatrivao/24000)
    }
}