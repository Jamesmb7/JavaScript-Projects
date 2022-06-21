//Document.write elements/

document.write(typeof "Word"); //will write "string"
document.write("<br>"); //breaks in js (starts a new line)
document.write(typeof 3); // will write "number"
document.write("<br>") //breaks in js (starts a new line)
document.write("35" + 5); //will put these numbers together to be 355
document.write("<br>") //breaks in js (starts a new line)
document.write(2E310); //will write "infinity"
document.write("<br>") //breaks in js (starts a new line)
document.write(-3e310); //will write "-infinity"

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

