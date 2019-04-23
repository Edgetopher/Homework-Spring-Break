function calculate(){
    var cost = document.getElementById("cost").value;
    var discount = document.getElementById("discount").value;
    var outputTo = document.getElementById('output');
    var output = cost * (1 -(discount / 100));
    outputTo.innerHTML = "$ " + output;

}