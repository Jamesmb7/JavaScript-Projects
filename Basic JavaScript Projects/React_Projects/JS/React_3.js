
window.addEventListener('DOMContentLoaded', () => {
document.body.classList.remove('fade-out');
});

function validateForm()
{
    let x = document.forms["myForm"]["pnumber"].value;
    if (x == "")
    {
        alert("Phone Number must be filled out");
        return false;
    }
}

function openForm()
{
    document.getElementById("myForms").style.display = "block";
}

function closeForm()
{
    document.getElementById("myForms").style.display = "none";
}