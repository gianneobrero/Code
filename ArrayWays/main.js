console.log("JS called")

// number 1
var container = document.getElementById("container");
var arr = [];
for (var i = 1; i <= 100; i++) {
    if (i%3 == 0) {
        arr.push("Fizz");
    }
    else if (i%5 == 0) {
        arr.push("Buzz")
    }
    else {
        arr.push(i)
    }
}

var p = document.createElement("p");
p.innerHTML = structuring(arr).toString();
container.appendChild(p);


//number 2
function generate() {
    var container2 = document.getElementById("container2");
    container2.innerHTML = "";
    var len = $("#paramLength").val();
    var multi1 = $("#paramMultiple1").val();
    var multi2 = $("#paramMultiple2").val();
    var arr2 = [];

        for (var i = 1; i <= len; i++) {
            if (i % multi1 == 0) {
                arr2.push("Fizz");
            }
            else if (i % multi2 == 0) {
                arr2.push("Buzz")
            }
            else {
                arr2.push(i)
            }
        }
        console.log(arr2.toString());
    var p = document.createElement("p");

    p.innerHTML = structuring(arr2).toString();
    container2.appendChild(p);
}


function structuring(ar) {
    var structure = [];
    var ctr = 0;
    ar.forEach(function (item) {
        ctr++;
        if (ctr % 10 == 0) {
            structure.push(item + "</br>");
        }
        else {
            structure.push(item);
        }
    });
    return structure;
}