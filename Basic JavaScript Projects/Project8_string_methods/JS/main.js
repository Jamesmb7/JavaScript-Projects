function concatenate()
{
    var p1 = "This is the first"
    var p2 = " sentense of"
    var p3 = " Project8 methods."
    var whole_sentence = p1.concat(p2, p3);
    document.getElementById("concat1").innerHTML = whole_sentence;
}

function slice_Method() //runs the below code
{
    var Sentence = "All work and no play makes Johnny a dull boy."; //Sentence variable
    var Section = Sentence.slice(27, 33); //will cause "Johnny" to display.
    document.getElementById("Slice").innerHTML=Section;//references the html <p> element with id "Slice"
} // is there an easy way to see what 27 and 33 means without having to count it out?

function upper_Case() //name/title for the below code 
{
    var Sentence = "Take pride in your work!";//why not just type this in all caps?
    var Section = Sentence.toUpperCase(); //sets Section as a variable, and that variable takes the Sentence variable and makes it's content all uppercase. 
    document.getElementById("upper").innerHTML=Section;//references the "upper" id in html
}


function search_Method() //tells you the location of the specified search work. 
{
    var Sentence = "Take pride in your work!";
    var Section = Sentence.search("in");
    document.getElementById("searching").innerHTML=Section;
}

function numbers_Method()//returns the var number.
{
    var A = 125;
    document.getElementById("numbers_String").innerHTML = A.toString();
}

function precision_Click()//Returns a precise number depending onthe set amount (8 positions in this instance)
{
var B = 135682.039482711;
    document.getElementById("Precision").innerHTML = B.toPrecision(8);
}

function valueOf_Method() //Don't fully understand the purpose of this yet.
{
    var C = "How is everyone doing today?"
    document.getElementById("value").innerHTML = C.valueOf();
}

function toFixed_Method() //Sets a fixed number? Rounds to the specified decimal. (2 would be 5.59)?
{
    var D = 5.58773
    document.getElementById("fixed").innerHTML = D.toFixed(2);
}