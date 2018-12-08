function funcSubmit() {

document.getElementById("error").innerHTML = '';
document.getElementById("dvResult").innerHTML = '';




var houseSize = document.getElementById("myhousesize").value;
var temperature = document.getElementById("temperature").value;

if(temperature == '')
{
   document.getElementById("error").innerHTML = 'Please enter your house temperature in farenheit during winter';
   document.getElementById("temperature").focus();
}
else if(houseSize == '')
{
   document.getElementById("error").innerHTML = 'Please enter house size';
   document.getElementById("myhousesize").focus();
}
else
{
   if(houseSize <= 1000 && temperature <= 60 && temperature >= 30)
   {
       document.getElementById("dvResult").innerHTML = "You would need 1 heat insulator";
   }
   else if ( houseSize >= 1001 && houseSize <= 3000 && temperature <= 60 && temperature >= 30)
   document.getElementById("dvResult").innerHTML = "You would need 2 heat insulators";
   else
   document.getElementById("dvResult").innerHTML = "Our product would not be sufficient for your house size or your house temperature";
}
}


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}