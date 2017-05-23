/*
var car = {
        type:"FIAT", 
        model:"500", 
        color:"white",
        fullName: function(){
            return this.type + " " + this.model;
        }
        
    }
    

function checkTime(){
    return Date();
}

function returnStrObj(a,b){
    var a = a;
    var b = new String(b);
    return typeof a+" "+ typeof b;
}
function returnArray(){
    var nameArray=["ABC","BBC","CBC"]; 
    return nameArray[1];
}

var day;
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;    
    case 6:
        day="Saturday";
        break;
    default:
        day="N";
        break;
                }
                
var cars = ["A","B","C","D","E","F"];
var text="";
for(var i=0;i<cars.length;i++)
    {
        text += cars[i] +"<br>";
    }
    
var x=100;
try{
    if(x == 100) throw "noo";
}catch(e)
    {
        document.getElementById("demo").innerHTML=e;
    }
    
if(typeof(Storage) !== "undefined"){
        localStorage.setItem("lastname","smith");
    
    document.getElementById("demo").innerHTML=
        localStorage.getItem("lastname");
}
else{
    document.getElementById("demo").innerHTML="NoSupported";
}

document.getElementById("demo").innerHTML=localStorage.getItem("lastname"); */


function storeStorage() {
var obj;
var text = '{"Employees":[{"firstName":"NoobB","lastName":"lazyB"}, {"firstName":"NoobB2","lastName":"lazyB2"}]}';
obj = JSON.parse(text);
localStorage.setItem("firstName",obj.Employees[1].firstName);
document.getElementById("demo").innerHTML = localStorage.getItem("firstName");
}

//function clearStorage() {
   // localStorage.removeItem("firstName");
   // document.getElementById("demo").innerHTML = localStorage.getItem("firstName");
//}



