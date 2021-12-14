//clearScreen() function to erase the content on the display
function clearScreen(){
    document.getElementById('result').value= " "
}

// display() function to show the answer
function display(value) {
    document.getElementById("result").value += value;
   }



//calculate function
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }




 


