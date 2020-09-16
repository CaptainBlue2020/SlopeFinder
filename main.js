

function test(){
    var x1 = document.getElementById("p1").value;
    var x2 = document.getElementById("p2").value;
    var y1 = document.getElementById("d1").value;
    var y2 = document.getElementById("d2").value;

    var rise = y2 - y1;
    var run = x2 - x1;
    
    var Rate = rise/run;

    document.getElementById("demo").innerHTML = Rate;
}
