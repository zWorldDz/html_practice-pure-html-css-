function checkValidation()
{
    var input,output;
    input = document.getElementById("input").value;
    
    if(isNaN(input))
        output="it is not a number";
    else
        output="it is a number";
    
    document.getElementById("output").innerHTML=output;
}