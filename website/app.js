var list = [ //list from homework
    { name: 'Peter Parker', likes: '700'},
    { name: 'Tony Stark', likes: '135'},
    { name: 'Dash', likes: '0'},
  ];


var listLength = list.length; //know how long list is



var listNames = list.map(a => a.name);



var listLikes = list.map(a => a.likes);


  
var printList = function() {
    candidateList.innerHTML = name;
} 



function add1(r) {
    var b = r.parentNode.parentNode.cells[1].textContent; //cell to edit
    var x =  parseInt(b) + 1; //add like
    r.parentNode.parentNode.cells[1].innerHTML = x;
    
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("candidateTable").deleteRow(i);
}




function createCandidate() {

    if(document.getElementById('candidateInput').value == ''){
        alert('Oops! Please enter a name');
        return;

    }

    // first count # of rows so you know where to insert it
    var x = document.getElementById("candidateTable").rows.length;

    var table = document.getElementById("candidateTable");
    
    var row = table.insertRow(x); //from part one
    var cell1 = row.insertCell(0); //name
    var cell2 = row.insertCell(1); //likes
    var cell3 = row.insertCell(2); //button1
    var cell4 = row.insertCell(3); //button2
    cell1.innerHTML = document.getElementById('candidateInput').value;
    cell2.innerHTML = '<p id ="likeNum"> 0 </p>';
    cell3.innerHTML = '<input type = "button" value ="Like" onclick = "add1(this)" />';
    cell4.innerHTML = '<input type = "button" value ="Delete" onclick = "deleteRow(this)" />';
    
    document.getElementById("candidateInput").reset();
    

    
    
    }
    


