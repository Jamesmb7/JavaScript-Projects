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


function search_Method()
{
    var Sentence = "Take pride in your work!";
    var Section = Sentence.search("in");
    document.getElementById("searching").innerHTML=Section;
}