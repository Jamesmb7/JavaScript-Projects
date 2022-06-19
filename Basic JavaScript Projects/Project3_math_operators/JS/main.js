function Math_addition()
{
    var addition=2+2;
    document.getElementById("Math").innerHTML = "2 + 2 =" +  addition;
}

//function Math_question()
//{
   // var question="What is 2+2?"
   // document.getElementById("Math").innerHTML = question;
//}
    //how would I make this work in js? Think I could do this in css but not
    //sure how with js yet. 

function Subtraction() //subtraction function
{
    var subtraction=4-2;
    document.getElementById("Subtract").innerHTML = "4 - 2 = " + subtraction;
}

function Multiplication() //multiplication function
{
    var multiply=5*8
    document.getElementById("Multiplying").innerHTML = "5 x 8 = " + multiply;
}

function Division() //division function
{
    var divide=8/4;
    document.getElementById("Dividing").innerHTML = "8 / 4 = " +divide;
}

function more_Math() //combination of oporators function
{
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("moreMath").innerHTML="1 plus 2, multiplied by 10,\
    divided in half and then dubtracted by 5 = " + simple_Math;

}

function modulus_Operator() //modulus for division
{
    var simple_math = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6\
    you get 4 with a remainder of " +  simple_math;
}

function unary_Operator() //unary operatior, shows the opposite.
{
    var x=10;
    document.getElementById("unary").innerHTML = "The opposite of 10 is " +-x;
}

function random_Number()
{
    var randomize = Math.floor(Math.random() * 10) +1;
    document.getElementById("random").innerHTML = randomize + "! " + " Did you guess right!?" ;
}




var B = 10;
B++;
B--;
document.write(B); //why doesn't this work if I add var A below this and do the same?

window.alert (Math.random() * 100); // displays a random number between 0 and 99 as an alert when opening the webpage
// How do I make this an integer? ^

//I'm expecting to make a call Monday to go over all of this in more detail due to my 
//current confusion. I did this as well as possible with leaving notes that I intent
//to return to after the call monday. I know I am missing separating a ++ and -- in 
//this submission. As always, appreciate y'all and all the help you provide!