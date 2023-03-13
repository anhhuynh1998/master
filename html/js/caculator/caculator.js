function Addition() {
    let g = parseInt(document.getElementById("ad").value);
    let d = parseInt(document.getElementById("bb").value);
    let area =g+d; 
    document.getElementById("m").innerHTML = area;
}
function Subtraction() {
    let g = parseInt(document.getElementById("ad").value);
    let d = parseInt(document.getElementById("bb").value);
    let area =g-d; 
    document.getElementById("m").innerHTML = area;
}
function Multiplication() {
    let g = parseInt(document.getElementById("ad").value);
    let d = parseInt(document.getElementById("bb").value);
    let area =g*d; 
    document.getElementById("m").innerHTML = area;
}
function Division() {
    let g = parseInt(document.getElementById("ad").value);
    let d = parseInt(document.getElementById("bb").value);
    let area =g/d; 
    document.getElementById("m").innerHTML = area;
}
