
function Ride_Function()
{
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voter_Age()
{
    var age, can_Vote;
    age=document.getElementById("age").value;
    can_Vote=(age>=18) ? "You are old enough":"You are too young";
    document.getElementById("to_Vote").innerHTML = can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color)
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()
{
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
    document.getElementById("New_and_This").innerHTML= "Emily drives a " 
    + Emily.Vehicle_Color + " " + Emily.Vehicle_Model + " " + Emily.Vehicle_Make + ".";
}


function housePet(boolean, Type, First, Last, Age, Color)
{
    this.housePet_Type = boolean; 
    this.housePet_First = First;
    this.housePet_Last = Last;
    this.housePet_Age = Age;
    this.housePet_Color = Color;
    this.housePet_Type1 = Type;
}
var Jack = new housePet("Cat", "Cat", "Mr.", "Whiskers", 4, "Orange");
var James = new housePet("Cat", "Cat", "Obi", "Wan", 5, "Black");
function newAppointments()
{
    document.getElementById("pet2").innerHTML = "James has a " + James.housePet_Type1 + " named "//this is done without the reserved word, if I delete this code or put them in opposite order the code no longer works. 
    + James.housePet_First + " " + James.housePet_Last + "." + " It is " + James.housePet_Age + " years old and it is also " + James.housePet_Color + " in color.";
    document.getElementById("pet1").innerHTML = "boolean has a " + boolean.housePet_Type + " named "//this is done with boolean as a value to show it breaks the code using a reserved word.
    + boolean.housePet_First + " " + boolean.housePet_Last + "." + " It is " + boolean.housePet_Age + " years old and it is also " + boolean.housePet_Color + " in color.";
    
}

function count_Function()
{
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() //isn't count also a nested function under count_function()?
    {
        var Starting_point=9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}