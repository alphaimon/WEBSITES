//"""
// I mistakenly use getelementbyib instead of get element by class...surely what a let down...

// function sortByWatchOrder() {

//     var table, rows, switching, i, x, y, shouldSwitch;
  
//     table = document.getElementById("AnimeTable");
//     switching = true;
  
//     /* make a loop that'll continue till no swticing is done*/
  
//     while(switching) {
//         // starts by saying no switching is done
//         switching = false;
  
//         rows = table.rows;
//         length = rows.length
//         // loop thorugh all the row expect the 1st one,
//         // it contains header
//         for (i= 1; i< (length -1); i++)
//         {
//             // starts by saying there wont be any switching
//             shouldSwitch = false;
  
//             // Get any two element to compare one form current and another form nest row
// //*******
// //here ('TD)[0] means the first colomn

//             x = rows[i].getElementsByTagName('TD')[0];
//             y = rows[i+ 1].getElementsByTagName("TD")[0];
//             // super careful about element and elements
  
//             //checks is two rows should switch:
  
//             if (x.innerHTML > y.innerHTML ){
//                 // mark as a swich and breaks the loop:
  
//                 shouldSwitch = true;
//                 break;
//             }
//         } // end of for loop for a single iteration
  
//         if (shouldSwitch) {
//             // is a swich has been marked, makes the switch
//             // and marks the switch has been done
  
//             rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
//             switching = true;
          
//         }
//     }
//   }
  
  
  
  function sortByName()
  
  {
    var table, rows, switching, i, x, y, shouldSwitch;
    
    table = document.getElementById("AnimeTable");
    switching = true;
    
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;

      rows = table.rows;
      length = rows.length;

      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (length - 1); i++) 
      
      {
        //start by saying there should be no switching:
        shouldSwitch = false;
        
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        
//*******
//here ('TD)[1] means the second colomn

        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  




//   Random Functions Form StackOverflow

function sortByWatchOrders() {
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

let n = 0;

table = document.getElementById("AnimeTable");
switching = true;
dir = "asc";
while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
                var cmpX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
                var cmpY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);
cmpX=(cmpX=='-')?0:cmpX;
cmpY=(cmpY=='-')?0:cmpY;
        if (dir == "asc") {
            if (cmpX > cmpY) {
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
            if (cmpX < cmpY) {
                shouldSwitch= true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
    } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
}
///////////////////////////////By RATing

// function sortByRating() {
// var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

// let n = 2;

// table = document.getElementById("AnimeTable");
// switching = true;
// dir = "asc";
// while (switching) {
//     switching = false;
//     rows = table.getElementsByTagName("TR");
//     for (i = 1; i < (rows.length - 1); i++) {
//         shouldSwitch = false;
//         x = rows[i].getElementsByTagName("TD")[n];
//         y = rows[i + 1].getElementsByTagName("TD")[n];
//                 var cmpX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
//                 var cmpY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);
// cmpX=(cmpX=='-')?0:cmpX;
// cmpY=(cmpY=='-')?0:cmpY;
//         if (dir == "asc") {
//             if (cmpX < cmpY) {
//                 shouldSwitch= true;
//                 break;
//             }
//         } else if (dir == "desc") {
//             if (cmpX > cmpY) {
//                 shouldSwitch= true;
//                 break;
//             }
//         }
//     }
//     if (shouldSwitch) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//         switchcount ++;      
//     } else {
//         if (switchcount == 0 && dir == "asc") {
//             dir = "desc";
//             switching = true;
//         }
//     }
// }
// }


// Somehow this sort by rating functin is getting affected by the predominant way the table is initally sorted

function sortByRating() {
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

let n = 2;

table = document.getElementById("AnimeTable");
switching = true;
dir = "asc";
while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
                var cmpX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
                var cmpY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);
cmpX=(cmpX=='-')?0:cmpX;
cmpY=(cmpY=='-')?0:cmpY;
        if (dir == "asc") {
            if (cmpX < cmpY) {
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
            if (cmpX < cmpY) {
                shouldSwitch= true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
    } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
}