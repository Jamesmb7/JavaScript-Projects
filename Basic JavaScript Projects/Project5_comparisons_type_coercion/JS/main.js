//Assigned variables
X=15


//Document.write elements/

document.write(typeof "Word"); //will write "string"
document.write("<br>"); //breaks in js (starts a new line)
document.write(typeof 3); // will write "number"
document.write("<br>"); //breaks in js (starts a new line)
document.write("35" + 5); //will put these numbers together to be 355
document.write("<br>"); //breaks in js (starts a new line)
document.write("<br>"); //breaks in js (starts a new line)
document.write(2E310); //will write "infinity"
document.write("<br>"); //breaks in js (starts a new line)
document.write(-3e310); //will write "-infinity"
document.write("<br>"); //breaks in js (starts a new line)
document.write("<br>"); //breaks in js (starts a new line)
document.write(10>2);//Boolean logic either true or false, this will return true
document.write("<br>"); //breaks in js (starts a new line)
document.write(10<2);//Boolean logic either true or false, this will return false
document.write("<br>"); //breaks in js (starts a new line)
document.write("<br>"); //breaks in js (starts a new line)

//double equal sign checking tru and false statements 
document.write(10+3==13); //will return true, as both numbers are equal
document.write("<br>"); //breaks in js (starts a new line)
document.write(35+2==42); // will return false as the numbers on either side of "==" are not the same
document.write("<br>"); //breaks in js (starts a new line)

//tripple equal sign checking true and false statements but also data types
document.write("A"==="A");//compares both data types making sure they are equal (both strings, and both are "A")
document.write("<br>"); //breaks in js (starts a new line)
document.write("X"===X);//compares both data types making sure they are equal (both string and same value) this will equal false
document.write("<br>"); //breaks in js (starts a new line)
document.write(15===X); //same value same data type will be true
document.write("<br>"); //breaks in js (starts a new line)
document.write("15"===13); //different data type and different value, will be false
document.write("<br>"); //breaks in js (starts a new line)
document.write("<br>"); //breaks in js (starts a new line)

//Logical Operators "And"(written &&), OR (written ||), NOT (written !)
document.write(5>2 && 10>4);
document.write("<br>"); //breaks in js (starts a new line)
document.write(10<5 || 10>3);
document.write("<br>"); //breaks in js (starts a new line)





//console.logs
console.log(2+2);
console.log(4>5);


//Functions/ 

function my_function()
{
    document.getElementById("Test").innerHTML = 0/0; //NaN ("Not a Number")
}

function my_function1()
{
    document.getElementById("Test1").innerHTML = isNaN('This is a string'); //Will be true (this is a string, it's not a number)
}

function my_function2()
{
    document.getElementById("Test2").innerHTML = isNaN('007'); //Will be false (This is a number)
}

function infinity()
{
    document.getElementById("Infinity").innerHTML = document.write(3e310);//will display infinity
}

function not_infinity()
{
    document.getElementById("not_Infinity").innerHTML = document.write(-3e310); //will display -infinity
}
//personal note - how would you not overwrite everything else when doing infinity and -infinity here?

function not_Function1()
{
    document.getElementById("Not").innerHTML = !(300>10); // Will display as false, because 300 IS greater than 10
    document.getElementById("True").innerHTML = !(10>300);//will display as true, because 10 is NOT greater than 300
}