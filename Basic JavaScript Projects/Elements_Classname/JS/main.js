function Hello_World_Function() //will change text with the class name "Click".
{
    var A = document.getElementsByClassName("Click"); //references the class name "Click"
    A[0].innerHTML = "The text has changed!"; //A[0] tells you which specific class name of "Click" to change. If you wanted to change the second class name "Click" you'd make this a [1].
}