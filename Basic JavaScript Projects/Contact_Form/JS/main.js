function validateForm()
{
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["Email"].value;
    let z = document.forms["myForm"]["Message"].value;
    if (x == "")
    {
        alert("Name must be filled out");
        return false;
    }
    else if (y == "")
    {
        alert("Email must be filled out");
    }
    else if (z == "")
    {
        alert("Please leave a message, thank you!");
    }
}