X=10 //Assigns a value to a Global variable that can be called by many functions

function local_Variable() //Assigns a value to a local variable (A) because it is inside of the functions {}
{
    A=15
    document.write(20+A);
}

function global_Variable() // Calling the Global Variable to use in this function
{
    document.write(20+X);
}

function wrong_Variable() //Using the Global variable with the Local variable for the function local_Variable() to show you can't call local variables from other functions
{
    document.write(X+A);
}

function get_Date() // Date().getHours gets the hour from your PC 0-23. Get Date Methods for JS. 
{
    if (new Date().getHours() < 18) 
    {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function get_Time() //Date().getDate gets the day from your PC 1-31. Get Date Methods for JS. 
{
    if (new Date().getDate()<22)
    {
        document.getElementById("Hello").innerHTML="Howdy!";
    }
    else //if the above code is false, the else statement will be called and executed, causing the p statement "Hello" to write "Hola!"
    {
        document.getElementById("Hello").innerHTML="Hola!";
    }
}

function Age_Function() //If, Else statement. Input for your age and tells you if you are old enough to vote or not. 
{
    Age = document.getElementById("Age").value;
    if (Age >= 18) // if you age is 18 or older it executes "Vote" below.
    {
        Vote = "You are old enough to vote!";
    }
    else //if your age is 17 or younger Age_Function() executes the below code.
    {
        Vote ="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function drive_Function() // If, Else statement determining if you are old enough to drive or not. 
{
    Age2 = document.getElementById("Age2").value;
    if (Age2 >= 16)
    {
        Say = "You can drive the car.";
    }
    else
    {
        Say = "You cannot drive the car.";
    }
    document.getElementById("can_you_Drive?").innerHTML = Say;
}
//customized these and did them without reference to the example
//as best I could. I'm not sure all the different ways you can use these yet.

function Time_function() //Pulls the time of day from your PC
{
    var Time = new Date().getHours(); //Gets the hour of day from your PC. 
    var Reply; //creates Reply as a local Variable for Time_function()
    if (Time < 12 == Time > 0) //states if time is less than 12 and greater than 0 to Reply "It is morning time!"
    {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)//States that if the above statement is false, this statement will be checked. If time is >=12 and <18 will Reply "It is afternoon."
    {
        Reply = "It is afternoon.";
    }
    else//States that if both above statements are false, this will Reply with "It is evening time."
    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//why use else if and not just else for multiple new condition statements. 