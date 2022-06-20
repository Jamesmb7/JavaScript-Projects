document.write(typeof "Word"); //will write "string"

document.write(typeof 3); // will write "number"

document.write("35" + 5);

function my_function()
{
    document.getElementById("Test").innerHTML = 0/0;
}

function my_function1()
{
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_function2()
{
    document.getElementById("Test2").innerHTML = isNaN('007');
}
// Why don't these work at all? What am I missing here?