//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

/*
Loops:
For loop
While loop
Do while loop

Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}

function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle(num)
{
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}

function oddFunction(low, high)
{
	var total = 0;
	var num = 1;
	
	for (var i=1;i<=50;){
		num = Math.floor((Math.random() * 150) +1);
		if (num >= 5 && num <= 150 && num % 2 != 0){
			console.log("Value #" + i + " is: " + num);
			total = total + num;
			i++;
		}
	}

	alert("Here is a sum of some odd numbers: " + total);
}

function gradeYourself()
{
	var grade = prompt("What was your score?");
	
	switch(true) {
		case grade <= 70:
			l = "F";
			break;
		case grade > 70 && grade <= 79:
			l = "C";
			break;
		case grade > 79 && grade <= 89:
			l = "B";
			break;
		case grade >= 90:
			l = "A";
			break;
		default:
			l = "Error";
	}
	
	alert("Your grade is " + l);
}

function luckyNumber()
{
	var str = "The multiples of 13 are: ";
	var count = 0;
	
	for (var i=0;i<=200;i = i + 13){
		str = str + ", " + i;
		count++;
	}
	
	alert(str + ".  \r\n And there were a total of " + count + " multiples.");
}

function triangle(includeCount){
	var rows = prompt("How many rows?");
	var out;
	for (var i=1;i<=rows;i++){
		switch(true){
			case i == 1:												// Initialize output
				out = "Here is your triangle: \r\n A \r\n"
				break;
			case i % 2 == 0:											// Even row
				var t = "";
				for (var j=1;j<=(i/2);j++){									// Loop Through AB
					t = t + "AB";
				}
				out = out + t + "\r\n";
				break;
			case i % 2 != 0:											// Odd row
				var t = "";
				for (var j=1;j<=(i/2);j++){									// Loop Through AB
					t = t + "AB";
				}
				out =out + t + "A \r\n";												// Add final A to the end
				break;
			default:
				out =out + "Huh? \r\n";
		}
	}
	
	if(includeCount == 1){
		out = out + "The total amount of As is: " + out.match(/A/g).length + " and the total number of Bs are: " + out.match(/B/g).length + ".\r\n";
	}

	alert(out);
}