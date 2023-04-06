function calculate(){
    var x = eval(document.getElementById("inpt").value);
    document.getElementById("inpt").value = x;
}
function add(item){
    document.getElementById("inpt").value += item;
}
function clr(){
    document.getElementById("inpt").value = "";
}