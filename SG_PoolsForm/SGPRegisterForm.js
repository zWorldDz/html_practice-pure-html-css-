function hasNumbers()
{
	var input = document.getElementById("Name").value;   
    if(/\d/.test(input)===true){
        document.getElementById("NameSpan").style.color="#FF7979";
		document.getElementById("NameSpan").innerHTML="Name must contain at least 2 alphabets. Numbers and symbols are not allowed.";
        document.getElementById("NameLabel").style.color="#FF7979";
        document.getElementById("Name").style.border="1px solid #E15050";
        document.getElementById("Name").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[0].style.color="transparent";
		field.focus();   
		field.select();
		return false;  
    }
    else if(input === "" || input  == null ||input ===" "){    
        document.getElementById("NameSpan").style.color="#FF7979";
		document.getElementById("NameSpan").innerHTML="This Field is required";
        document.getElementById("NameLabel").style.color="#FF7979";
        document.getElementById("Name").style.border="1px solid #E15050";
        document.getElementById("Name").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[0].style.color="transparent";
		field.focus();   
		field.select();
		return false;    
	} 
    else {
        document.getElementById("NameSpan").style.color="grey";
		document.getElementById("NameSpan").innerHTML="Enter your name as per NRIC or official document containing FIN.";
        document.getElementById("NameLabel").style.color="grey";
        document.getElementById("Name").style.border="2px solid #D1D1D1";
        document.getElementById("Name").style.backgroundColor="white";
        document.getElementsByClassName("checked")[0].style.color="#07B41C";
        return true;
    }    
    
}

function checkNric(){
	var input = document.getElementById("Nric").value;   
    if(input.charAt(0) !='S' && input.charAt(0)!='T'&& input.charAt(0)!='F'&& input.charAt(0)!='G' && input.charAt(0) !='s' && input.charAt(0)!='t'&& input.charAt(0)!='f'&& input.charAt(0)!='g'){
        document.getElementById("NricLabel").style.color="#FF7979";
        document.getElementById("Nric").style.border="1px solid #E15050";
        document.getElementById("Nric").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[1].style.color="transparent";
       }
    else if(input.charAt(8).search(/[^a-zA-Z]+/)===false){
        document.getElementById("NricLabel").style.color="#FF7979";
        document.getElementById("Nric").style.border="1px solid #E15050";
        document.getElementById("Nric").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[1].style.color="transparent";
       }
    else if(input.length != 9){
        document.getElementById("NricLabel").style.color="#FF7979";
        document.getElementById("Nric").style.border="1px solid #E15050";
        document.getElementById("Nric").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[1].style.color="transparent";       }
    else {
        document.getElementById("NricLabel").style.color="grey";
        document.getElementById("Nric").style.border="2px solid #D1D1D1";
        document.getElementById("Nric").style.backgroundColor="white";
        document.getElementsByClassName("checked")[1].style.color="#07B41C";
        return true;
    }    
}

function checkDate(){
	var input = document.getElementById("DateOfBirth").value;  
    var input2 = input.split('-');
    var year = input2[0];
    var month = input2[1];
    var day = input2[2];
    
    if(year < 1940 || year > 2017)
    {
        document.getElementById("DateSpan").style.color="#FF7979";
		document.getElementById("DateSpan").innerHTML="Enter date in correct format (MM/DD/YYYY).";
        document.getElementById("DateLabel").style.color="#FF7979";
        document.getElementById("DateOfBirth").style.border="1px solid #E15050";
        document.getElementById("DateOfBirth").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[2].style.color="transparent";
		field.focus();   
		field.select();
		return false; 
    } else {
		document.getElementById("DateSpan").innerHTML=" ";
        document.getElementById("DateSpan").style.color="grey";
        document.getElementById("DateLabel").style.color="grey";
        document.getElementById("DateOfBirth").style.border="2px solid #D1D1D1";
        document.getElementById("DateOfBirth").style.backgroundColor="white";
        document.getElementsByClassName("checked")[2].style.color="#07B41C";
        return true;
    } 
}

function checkEmail(){
	var input = document.getElementById("Email").value;  
    var strIndex = input.indexOf('@');
    var strIndex2 = input.indexOf('.');
    if(strIndex == -1 || strIndex2 ==-1)
    {
        document.getElementById("EmailSpan").style.color="#FF7979";
		document.getElementById("EmailSpan").innerHTML="Enter a valid email address (e.g. name@domain.com)";
        document.getElementById("EmailLabel").style.color="#FF7979";
        document.getElementById("Email").style.border="1px solid #E15050";
        document.getElementById("Email").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[3].style.color="transparent";
		field.focus();   
		field.select();
		return false; 
    }
    else{
        document.getElementById("EmailSpan").style.color="grey";
        document.getElementById("EmailLabel").style.color="grey";
        document.getElementById("Email").style.border="2px solid #D1D1D1";
        document.getElementById("Email").style.backgroundColor="white";
        document.getElementsByClassName("checked")[3].style.color="#07B41C";
        return true;
    }
}

function checkMobileNumber(){
	var input = document.getElementById("MobileNumber").value;  
    if(/\d/.test(input)===false){
        document.getElementById("MobileNumberSpan").style.color="#FF7979";
		document.getElementById("MobileNumberSpan").innerHTML="Enter a valid 8-digit number.";
        document.getElementById("MobileNumberLabel").style.color="#FF7979";
        document.getElementById("MobileNumber").style.border="1px solid #E15050";
        document.getElementById("MobileNumber").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[4].style.color="transparent";
		field.focus();   
		field.select();
		return false;  
    }else if(input.length != 8){
        document.getElementById("MobileNumberSpan").style.color="#FF7979";
		document.getElementById("MobileNumberSpan").innerHTML="Enter a valid 8-digit number.";
        document.getElementById("MobileNumberLabel").style.color="#FF7979";
        document.getElementById("MobileNumber").style.border="1px solid #E15050";
        document.getElementById("MobileNumber").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[4].style.color="transparent";
		field.focus();   
		field.select();
		return false;         
    }else {
        document.getElementById("MobileNumberSpan").style.color="grey";
		document.getElementById("MobileNumberSpan").innerHTML=" ";
        document.getElementById("MobileNumberLabel").style.color="grey";
        document.getElementById("MobileNumber").style.border="2px solid #D1D1D1";
        document.getElementById("MobileNumber").style.backgroundColor="white";
        document.getElementsByClassName("checked")[4].style.color="#07B41C";
        return true;
    }
}

function checkPostCode(){
	var input = document.getElementById("PostCode").value;  
    if(/\d/.test(input)===false){
        document.getElementById("PostCodeSpan").style.color="#FF7979";
		document.getElementById("PostCodeSpan").innerHTML="Enter a valid 6-digit postal code.";
        document.getElementById("PostCodeLabel").style.color="#FF7979";
        document.getElementById("PostCode").style.border="1px solid #E15050";
        document.getElementById("PostCode").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[5].style.color="transparent";
		field.focus();   
		field.select();
		return false;  
    }else if(input.length != 6){
        document.getElementById("PostCodeSpan").style.color="#FF7979";
		document.getElementById("PostCodeSpan").innerHTML="Enter a valid 6-digit postal code.";
        document.getElementById("PostCodeLabel").style.color="#FF7979";
        document.getElementById("PostCode").style.border="1px solid #E15050";
        document.getElementById("PostCode").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[5].style.color="transparent";
		field.focus();   
		field.select();
		return false;         
    }else {
        document.getElementById("PostCodeSpan").style.color="grey";
		document.getElementById("PostCodeSpan").innerHTML=" ";
        document.getElementById("PostCodeLabel").style.color="grey";
        document.getElementById("PostCode").style.border="2px solid #D1D1D1";
        document.getElementById("PostCode").style.backgroundColor="white";
        document.getElementsByClassName("checked")[5].style.color="#07B41C";
        return true;
    }
}

function checkBuildingName(){
	var input = document.getElementById("BuildingName").value;  
    
    if(input === "" || input  == null ||input ===" "){    
        document.getElementById("BuildingNameLabel").style.color="#FF7979";
        document.getElementById("BuildingName").style.border="1px solid #E15050";
        document.getElementById("BuildingName").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[7].style.color="transparent";
		field.focus();   
		field.select();
		return false;    
	} 
    else {
        document.getElementById("BuildingNameLabel").style.color="grey";
        document.getElementById("BuildingName").style.border="2px solid #D1D1D1";
        document.getElementById("BuildingName").style.backgroundColor="white";
        document.getElementsByClassName("checked")[7].style.color="#07B41C";
        return true;
    }    
}

function checkStreetName(){
	var input = document.getElementById("StreetName").value;  
    
    if(input === "" || input  == null ||input ===" "){    
        document.getElementById("StreetNameLabel").style.color="#FF7979";
        document.getElementById("StreetName").style.border="1px solid #E15050";
        document.getElementById("StreetName").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[6].style.color="transparent";
		field.focus();   
		field.select();
		return false;    
	} 
    else {
        document.getElementById("StreetNameLabel").style.color="grey";
        document.getElementById("StreetName").style.backgroundColor="white";
        document.getElementsByClassName("checked")[6].style.color="#07B41C";
        return true;
    }    
}
 
function checkUserName(){
	var input = document.getElementById("UserName").value;  
    if(input.length < 6){
        document.getElementById("UserNameSpan").style.color="#FF7979";
		document.getElementById("UserNameSpan").innerHTML="Username must be at least 6 characters long.";
        document.getElementById("UserNameLabel").style.color="#FF7979";
        document.getElementById("UserName").style.border="1px solid #E15050";
        document.getElementById("UserName").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[8].style.color="transparent";
		field.focus();   
		field.select();
		return false;         
    }else {
        document.getElementById("UserNameSpan").style.color="grey";
		document.getElementById("UserNameSpan").innerHTML=" ";
        document.getElementById("UserNameLabel").style.color="grey";
        document.getElementById("UserName").style.border="2px solid #D1D1D1";
        document.getElementById("UserName").style.backgroundColor="white";
        document.getElementsByClassName("checked")[8].style.color="#07B41C";
        return true;
    }
}

function checkPassword(){
	var input = document.getElementById("Password").value;  
	var input2 = document.getElementById("Password2").value;  
    
    var passw = /^(?=.*\d)(?=.*[A-Z]).{7,20}$/;  
    if(!input.match(passw))
    {
        document.getElementById("PasswordSpan").style.color="#FF7979";
		document.getElementById("PasswordSpan").innerHTML="At least 1 alphabet (A-Z) and 1 number (0-9)";
        document.getElementById("PasswordLabel").style.color="#FF7979";
        document.getElementById("Password").style.border="1px solid #E15050";
        document.getElementById("Password").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[9].style.color="transparent";
		field.focus();   
		field.select();
		return false;   
    }
    else if(input.length < 8)
    {
        document.getElementById("PasswordSpan").style.color="#FF7979";
		document.getElementById("PasswordSpan").innerHTML="Password must be at least 8 characters long.";
        document.getElementById("PasswordLabel").style.color="#FF7979";
        document.getElementById("Password").style.border="1px solid #E15050";
        document.getElementById("Password").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[9].style.color="transparent";
		field.focus();   
		field.select();
		return false;     
    }else {
        document.getElementById("PasswordSpan").style.color="grey";
		document.getElementById("PasswordSpan").innerHTML=" ";
        document.getElementById("PasswordLabel").style.color="grey";
        document.getElementById("Password").style.border="2px solid #D1D1D1";
        document.getElementById("Password").style.backgroundColor="white";
        return true;
    }
}

function checkPassword2(){
    
	var input = document.getElementById("Password").value;  
	var input2 = document.getElementById("Password2").value;
    
    var passw = /^(?=.*\d)(?=.*[A-Z]).{7,20}$/; 
    
    if(!input2.match(passw))
    {
        document.getElementById("PasswordSpan2").style.color="#FF7979";
		document.getElementById("PasswordSpan2").innerHTML="At least 1 alphabet (A-Z) and 1 number (0-9)";
        document.getElementById("PasswordLabel2").style.color="#FF7979";
        document.getElementById("Password2").style.border="1px solid #E15050";
        document.getElementById("Password2").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[9].style.color="transparent";
        document.getElementsByClassName("checked")[10].style.color="transparent";		
        field.focus();   
		field.select();
		return false;   
    }
    else if(input != input2)
    {
        document.getElementById("PasswordSpan2").style.color="#FF7979";
		document.getElementById("PasswordSpan2").innerHTML="Passwords must match.";
        document.getElementById("PasswordLabel2").style.color="#FF7979";
        document.getElementById("Password2").style.border="1px solid #E15050";
        document.getElementById("Password2").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[9].style.color="transparent";
        document.getElementsByClassName("checked")[10].style.color="transparent";
		field.focus();   
		field.select();
		return false;     
    }
    else {
        document.getElementById("PasswordSpan2").style.color="grey";
		document.getElementById("PasswordSpan2").innerHTML=" ";
        document.getElementById("PasswordLabel2").style.color="grey";
        document.getElementById("Password2").style.border="2px solid #D1D1D1";
        document.getElementById("Password2").style.backgroundColor="white";
        document.getElementsByClassName("checked")[9].style.color="#07B41C";
        document.getElementsByClassName("checked")[10].style.color="#07B41C";
        return true;
    }
}

function checkPin(){
	var input = document.getElementById("Pin").value;  
	var input2 = document.getElementById("Pin2").value;  
    
    var passw = /^(?=.*\d).{6,}$/;  
    if(!input.match(passw))
    {
        document.getElementById("PinSpan").style.color="#FF7979";
		document.getElementById("PinSpan").innerHTML="PIN must be 6 numbers (0-9).";
        document.getElementById("PinLabel").style.color="#FF7979";
        document.getElementById("Pin").style.border="1px solid #E15050";
        document.getElementById("Pin").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[11].style.color="transparent";
		field.focus();   
		field.select();
		return false;   
    }
    else if(input.length < 5 )
    {
        document.getElementById("PinSpan").style.color="#FF7979";
		document.getElementById("PinSpan").innerHTML="PIN must be 6 numbers.";
        document.getElementById("PinLabel").style.color="#FF7979";
        document.getElementById("Pin").style.border="1px solid #E15050";
        document.getElementById("Pin").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[11].style.color="transparent";
		field.focus();   
		field.select();
		return false;     
    }else {
        document.getElementById("PinSpan").style.color="grey";
		document.getElementById("PinSpan").innerHTML=" ";
        document.getElementById("PinLabel").style.color="grey";
        document.getElementById("Pin").style.border="2px solid #D1D1D1";
        document.getElementById("Pin").style.backgroundColor="white";
        return true;
    }
}

function checkPin2(){
    
	var input = document.getElementById("Pin").value;  
	var input2 = document.getElementById("Pin2").value;
    
    var passw = /^(?=.*\d).{6,}$/;  
    
    if(!input2.match(passw))
    {
        document.getElementById("PinSpan2").style.color="#FF7979";
		document.getElementById("PinSpan2").innerHTML="PIN must be 6 numbers (0-9).";
        document.getElementById("PinLabel2").style.color="#FF7979";
        document.getElementById("Pin2").style.border="1px solid #E15050";
        document.getElementById("Pin2").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[11].style.color="transparent";
        document.getElementsByClassName("checked")[12].style.color="transparent";		
        field.focus();   
		field.select();
		return false;   
    }
    else if(input != input2)
    {
        document.getElementById("PinSpan2").style.color="#FF7979";
		document.getElementById("PinSpan2").innerHTML="Pin must match.";
        document.getElementById("PinLabel2").style.color="#FF7979";
        document.getElementById("Pin2").style.border="1px solid #E15050";
        document.getElementById("Pin2").style.backgroundColor="#FFCCCC ";
        document.getElementsByClassName("checked")[11].style.color="transparent";
        document.getElementsByClassName("checked")[12].style.color="transparent";
		field.focus();   
		field.select();
		return false;     
    }
    else {
        document.getElementById("PinSpan2").style.color="grey";
		document.getElementById("PinSpan2").innerHTML=" ";
        document.getElementById("PinLabel2").style.color="grey";
        document.getElementById("Pin2").style.border="2px solid #D1D1D1";
        document.getElementById("Pin2").style.backgroundColor="white";
        document.getElementsByClassName("checked")[11].style.color="#07B41C";
        document.getElementsByClassName("checked")[12].style.color="#07B41C";
        return true;
    }
}

function checkFunding(){
    
	var input = document.getElementById("FundingLimit").value;  
    if(input === "Other")
    {
        document.getElementById("FundingLimitInput").disabled=false;   
    }
    else
    {
        document.getElementById("FundingLimitInput").disabled=true;   
    }
}

function checkExpenditure(){
    
	var input = document.getElementById("ExpenditureLimit").value;  
    if(input === "Other")
    {
        document.getElementById("ExpenditureLimitInput").disabled=false;   
    }
    else
    {
        document.getElementById("ExpenditureLimitInput").disabled=true;   
    }
}

function displayHideContent(){
    var x = document.getElementById("hidecontent2").style.display;

    if(x ===""){
    document.getElementById("hidecontent2").style.display="block";   
    }
    else
    {
    document.getElementById("hidecontent2").style.display="";   
    }

}