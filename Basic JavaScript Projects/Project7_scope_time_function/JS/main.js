X=10

function local_Variable()
{
    A=15
    document.write(20+A);
}

function global_Variable()
{
    document.write(20+X);
}

function wrong_Variable()
{
    document.write(X+A);
}

function get_Date()
{
    if (new Date().getHours() < 18) 
    {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function get_Time()
{
    if (new Date().getDate()<22)
    {
        document.getElementById("Hello").innerHTML="Howdy!";
    }
    else
    {
        document.getElementById("Hello").innerHTML="Hola!";
    }
}

function Age_Function()
{
    Age = document.getElementById("Age").value;
    if (Age >= 18) 
    {
        Vote = "You are old enough to vote!";
    }
    else
    {
        Vote ="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function drive_Function()
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

function Time_function()
{
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)
    {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)
    {
        Reply = "It is afternoon.";
    }
    else
    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}