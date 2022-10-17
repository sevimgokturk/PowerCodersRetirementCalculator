let age ;
let retirementAge;
let result;
let yearOfRetirement;
let today;
let currentYear;


function calculator(){
    age = parseInt(document.getElementById("age").value); 
    retirementAge=parseInt(document.getElementById("retirement-age").value)
    if(!isNaN(age) && !isNaN(retirementAge)){
        today= new Date();
        currentYear= today.getFullYear();       
        if(retirementAge > age){
            result=retirementAge-age;
            yearOfRetirement=Number(currentYear)+result;
            document.getElementById("message").innerHTML = "";
            document.getElementById("result").innerHTML= result +" --- "+ yearOfRetirement;
        }else{
            document.getElementById("result").innerHTML="You are already retired"
            document.getElementById("message").innerHTML = "";
        }
    }else{
        document.getElementById("message").innerHTML="Enter correctly";
        document.getElementById("result").innerHTML="";
    }
}