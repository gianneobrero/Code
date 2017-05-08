console.log("displaybooked called")

var d = new Date();
var year = d.getFullYear();
console.log(year);
var month = d.getMonth();
console.log(month + 1);
var day = d.getDay();
console.log(day);
var hour = d.getHours();
console.log(hour);
var minute = d.getMinutes();
console.log(minute);
var second = d.getSeconds();
console.log(second);

console.log(d.toString());

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function addzero(num, numofdigits) {
    for (var i = 0; i < numofdigits; i++) {
        if (num.toString().length < numofdigits) {
            num = "0" + num;
        }
        else {
            num = num;
        }
    }
    return num;    
}

function generatetable() {
    console.log("called gen table");


    var totalrooms = 10;
    totalrooms += 1;
    var dim = daysInMonth(d.getMonth() + 1, d.getYear());
    var container = document.getElementById("container");
    var tbl = document.createElement('table');
    

    for (var row = 0; row < totalrooms; row++) {
        var tr = document.createElement('tr');        
        for (var col = 0; col < dim+1; col++) {
            if (row == row-1 && col == col-1) {
                break;
            }
            else {
                var td = document.createElement('td');
                if (row == 0) {
                    if (col == 0) {
                        td.className = "rowheading";
                    }
                    else {
                        td.className = "columnheading"
                        td.innerHTML= addzero(col, 2);                                       
                    }
                }
                else if (col == 0) {
                    td.className = "rowheading";
                    td.innerHTML = "Room " + addzero(row,3);
                
                }                  
                else {
                    td.className = "cellcontent"
                    td.innerHTML = "";
                }
                tr.appendChild(td);
            }
        }
        tbl.appendChild(tr);
    }
    container.appendChild(tbl);
}

generatetable();

