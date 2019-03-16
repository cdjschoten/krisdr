var number1;
var number2;
var action;
function initialize() {
    number1 = 0;
    number2 = 0;
    action = "";
}
function iniload() {
    initialize();
    document.getElementById("result").value = "";
}
function ButtonClicked(key) {
 resulttext = document.getElementById("result").value;
 if (key >= "0" && key <= "9")
    document.getElementById("result").value = resulttext + key;
 if (key == "B")
    document.getElementById("result").value = resulttext.substr(0, resulttext.length - 1)
 if (key == "C")
 {
     initialize();
     document.getElementById("result").value = "";
 }
    
 if (key == "+" || key == "-" || key == "x" || key == "/")
    {
        if (action == "")
         {
            number1 = parseFloat(document.getElementById("result").value);
            action = key;
            document.getElementById("result").value = "";
         }
    }
  if (key == "=")
    {
        var result = 0;
        number2 = parseFloat(document.getElementById("result").value);
        switch(action) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "x":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2; 
            break; 
        default:
            result = 0;
        }
        initialize(); 
        document.getElementById("result").value = result;        
    }  
}