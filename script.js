var buttons = document.getElementsByTagName("input");
var display = document.getElementById("screen");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");

reset();
var total;

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", onClickAction);
}

addEventListener("keydown", keysPressed, false);
addEventListener("keyup", keysReleased, false);

equal.addEventListener("click", calculate);
clear.addEventListener("click", reset);



function calculate() {

	calc.pop();

	for (var i = 0; i < calc.length; i++) {
		
		switch(calc[i]) {

			case "+":
			
			getNum(i);
			total = firstSum + secondSum;
			display.innerHTML = total;

			break;

			case "-":

			getNum(i);
			total = firstSum - secondSum;
			display.innerHTML = total;	

			break;

			case "/":

			getNum(i);
			total = firstSum / secondSum;
			display.innerHTML = total;

			break;

			case "x":
			
			getNum(i);
			total = firstSum * secondSum;
			display.innerHTML = total;

			break;

			default:
			break;

		}

	}

	calc = [];
	calc.push(total);
}


function onClickAction(){
	display.innerHTML += this.value;
	calc.push(this.value);
}



function getNum(i) {

			first = calc.slice(0,i);
			second = calc.slice(i+1, i.length);

			firstSum = parseFloat(first.join(""));
			secondSum = parseFloat(second.join(""));

}
			

function reset() {

	keys = [];
	calc = [];
	firstSum = 0;
	secondSum = 0;
	first = [];
	second = [];
	display.innerHTML = "";

}
 

 
function keysPressed(e) {
    
    keys[e.keyCode] = true;
    

    if (keys[13]) {
    	calc.push(" ");
    	calculate();
    	document.querySelector("input[value='=']").style.boxShadow = "0 0 3px 1px red inset";
    	document.querySelector("input[value='=']").style.fontSize = "1.2em";
    	document.querySelector("input[value='=']").style.color = "red";

    }

    if(keys[8]) {
    	calc.pop();
    	display.innerHTML = calc.join("");
	document.querySelector("input[value='clear']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='clear']").style.fontSize = "1.2em";
	document.querySelector("input[value='clear']").style.color = "red";

    }

     if (keys[18] && keys[8]) {
	reset();	
	document.querySelector("input[value='clear']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='clear']").style.fontSize = "1.2em";
	document.querySelector("input[value='clear']").style.color = "red";

    }
     
    if (keys[16] && keys[59]) {
	display.innerHTML += ".";
	calc.push(".");    
	document.querySelector("input[value='.']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='.']").style.fontSize = "1.2em";
	document.querySelector("input[value='.']").style.color = "red";
    }

    if (keys[16] && keys[61]) {
	display.innerHTML += " + ";
	calc.push("+");
	document.querySelector("input[value='+']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='+']").style.fontSize = "1.2em";
	document.querySelector("input[value='+']").style.color = "red";
	e.preventDefault();
    }


    if (keys[16] && keys[58]) {
	display.innerHTML += " / ";
	calc.push("/");    
	document.querySelector("input[value='/']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='/']").style.fontSize = "1.2em";
	document.querySelector("input[value='/']").style.color = "red";
	e.preventDefault();	
    }

    if (keys[16] && keys[164]) {
	display.innerHTML += " x ";
	calc.push("x");    	
	document.querySelector("input[value='x']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='x']").style.fontSize = "1.2em";
	document.querySelector("input[value='x']").style.color = "red";
    }

    if (keys[173]) {
	display.innerHTML += " - ";
	calc.push("-");    	
	document.querySelector("input[value='-']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='-']").style.fontSize = "1.2em";
	document.querySelector("input[value='-']").style.color = "red";
    }

    if (keys[49]) {
	display.innerHTML += "1";
	calc.push("1");    	
	document.querySelector("input[value='1']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='1']").style.fontSize = "1.2em";
	document.querySelector("input[value='1']").style.color = "red";
    }

    if (keys[50]) {
	display.innerHTML += "2";
	calc.push("2");    	
	document.querySelector("input[value='2']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='2']").style.fontSize = "1.2em";
	document.querySelector("input[value='2']").style.color = "red";
    }

    if (keys[51]) {
	display.innerHTML += "3";
	calc.push("3");    	
	document.querySelector("input[value='3']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='3']").style.fontSize = "1.2em";
	document.querySelector("input[value='3']").style.color = "red";
    }

    if (keys[52]) {
	display.innerHTML += "4";
	calc.push("4");   
	e.preventDefault();
	document.querySelector("input[value='4']").style.boxShadow = "0 0 3px 1px red inset"; 
	document.querySelector("input[value='4']").style.fontSize= "1.2em";
	document.querySelector("input[value='4']").stylecolore= "red";
    }

    if (keys[53]) {
	display.innerHTML += "5";
	calc.push("5");    	
	document.querySelector("input[value='5']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='5']").style.fontSize = "1.2em";
	document.querySelector("input[value='5']").style.color = "red";
    }

    if (keys[54]) {
	display.innerHTML += "6";
	calc.push("6");    	
	document.querySelector("input[value='6']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='6']").style.fontSize = "1.2em";
	document.querySelector("input[value='6']").style.color = "red";
    }

    if (keys[55]) {
	display.innerHTML += "7";
	calc.push("7");    	
	document.querySelector("input[value='7']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='7']").style.fontSize = "1.2em";
	document.querySelector("input[value='7']").style.color = "red";
    }

    if (keys[56]) {
	display.innerHTML += "8";
	calc.push("8");    	
	document.querySelector("input[value='8']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='8']").style.fontSize = "1.2em";
	document.querySelector("input[value='8']").style.color = "red";
    }

    if (keys[57]) {
	display.innerHTML += "9";
	calc.push("9");    	
	document.querySelector("input[value='9']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='9']").style.fontSize = "1.2em";
	document.querySelector("input[value='9']").style.color = "red";
    }

    if (keys[48]) {
	display.innerHTML += "0";
	calc.push("0");    	
	document.querySelector("input[value='0']").style.boxShadow = "0 0 3px 1px red inset";
	document.querySelector("input[value='0']").style.fontSize = "1.2em";
	document.querySelector("input[value='0']").style.color = "red";
    }


}
 

function keysReleased(e) {
    keys[e.keyCode] = false;
    for (var i = 0; i<buttons.length; i++) {
    	buttons[i].style.color = "black";
    	buttons[i].style.fontSize = "1em";
    	buttons[i].style.boxShadow = "0 0 3px 1px black inset"
    }
}







	
		
			
		
			
		
			
		

		

		

		




