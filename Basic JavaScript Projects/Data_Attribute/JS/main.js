function displayType(character)//function to display a fictional universe and character. 
{
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
} //why is character.innerHTML linked to the ID in html?