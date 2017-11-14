const  candidates = [ //list from homework
    { name: 'Peter Parker', likes: '700'},
    { name: 'Tony Stark', likes: '135'},
    { name: 'dash', likes: '0'},
  ]


var likes = 0; //inital likes

var add1 = function() { //add one like per click
    document.getElementById("output").value = parseInt(document.getElementById("output").value,10) + 1;
  };

var delete1 = function() { //delete if clicked
    var elem = document.getElementById("output");
    elem.parentNode.removeChild(elem);
}

function candidatesList() {
    var item = document.getElementById('candidateInput').value
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')

    newItem.appendChild(text)

    document.getElementById('candidatesList').appendChild(newItem)
}
