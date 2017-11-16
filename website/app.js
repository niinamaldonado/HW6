var list = [ //list from homework
    { name: 'Peter Parker', likes: '700'},
    { name: 'Tony Stark', likes: '135'},
    { name: 'Dash', likes: '0'},
  ];

var printList = function() {
    candidateList.innerHTML = name;
} 

var add1 = function() { //add one like per click
    document.getElementById("output").value = parseInt(document.getElementById("output").value,10) + 1;
  };

var delete1 = function() { //delete if clicked
    var elem = document.getElementById("candidateName");
    elem.parentNode.removeChild(elem);
    
}

function createCandidate() {


    // first count # of rows so you know where to insert it

    var x = document.getElementById("candidateTable").rows.length;

    var table = document.getElementById("candidateTable");
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById('candidateInput').value;
    cell2.innerHTML = '<input type = "text" value = "0" id = "output" />';
    cell3.innerHTML = '<input type = "button" value = "Like" onclick = "add1()" />';
    cell4.innerHTML = '<input type = "button" value ="Delete" onclick = "delete1()" />';
    

    
    
    }
    


