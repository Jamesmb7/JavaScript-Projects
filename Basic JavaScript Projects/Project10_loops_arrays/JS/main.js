function Call_Loop() //counts from 1-10. 
{
    var Digit = "";
    var X = 1;
    while (X<11)
    {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function hello_There() // gives the length of "Hello, there!"
{
    X = "Hello, there!";
    length = X.length;
    document.getElementById("demo").innerHTML=length;
}

function for_Loop() //goes through the list in order. 
{
    var Animals = ["Cat", "Dog", "Snake", "Mouse", "Horse"];
    var Content = "";
    var Y;
    {for
        (Y = 0; Y < Animals.length; Y++)
        {
            Content += Animals[Y] + "<br>";
        }
    }
    document.getElementById("List_of_Animals").innerHTML=Content;
}

function array_Function() //creating an array function and selecting a specific array. 
{
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "Running";
    Cat_Picture[2] = "Eating";
    Cat_Picture[3] = "Jumping";
    Cat_Picture[4] = "Playing";
    document.getElementById("Array").innerHTML="In this picture, the cat is " + Cat_Picture[4] +"."
}


function constant_Function()
{
   const Animal = {Type:"Cat", Color:"Black", Weight:"15 lbs"} //what part of this is const and unable to change?//
   Animal.Mood="Angry";
   Animal.Type="Dog";
   document.getElementById("Constant").innerHTML= "The "+ Animal.Type + " was " + Animal.Color + " and weighed " + Animal.Weight +"." 
   + " It was " + Animal.Mood + ".";
}


var X = 35; //var changes, and works within the function
document.write(X);
{
    let X = 33; //let maintains value only in it's block of code. 
    document.write("<br> " + X);
}
document.write("<br> " + X); // if "let" was changed to "var" this would be 35, however it's 33 in this instance due to let and brackets.

function myFunctions() //How can you do this without an onclick element in html?
{
    let X = myFunction(4,3); //giving a value to a, b for the below block
    document.getElementById("Multiply").innerHTML=X; //references html "Multiply".
    function myFunction(a, b) //code to multiple a and b variables. 
    {
        return a*b;
    }
}


let house =
{
    type:"Wooden",
    year:"1950",
    color:"tan",
    description : function()
    {
        return "The house is " +this.type + "." + " It was built in " + this.year + 
        " and is " +this.color + ".";
    }
}
document.getElementById("Object").innerHTML=house.description();