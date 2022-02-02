const list = document.getElementById('countries').value;


function sortList(){
   list.sort((a,b) => a - b);
}

list.addEventListener('focus', sortList());


// Select from a range of values

function updateTextInput(val) {
   document.getElementById('textInput').value=val; 
 }