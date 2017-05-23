function callHiddenContent(className) {
    
    var x = document.getElementsByClassName(className);
    if(x)
        alert("YES");
    
    button-content.onclick = function(){
        if(this.style.display === "none")
            {
                x.style.display = 'block';
            }
    
}
    /*
    if (x.style.display === "none") 
    {
        x.style.display = 'block';
    } else 
    {
        x.style.display = 'none';
    }

}
*/

