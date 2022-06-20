//Dictionary Function

function my_Dictionary()
{
    var Animal= 
    {
        species:"Cat",
        Color:"Black",
        Age:"4",
        Sound:"meow",
        Color:"Red", //cannot have 2 keys in a kvp function
    };
    delete Animal.Color; //can use words as operatiors (+, -, *, /, % etc, like delete in this case to get rid of the color variable.)
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}
