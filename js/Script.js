//requires weight and heoght to be passed
 
function calculateBmi() {


//alert("test");


//var wieght = document.bmiForm.weight.value;


let weight = $('#weight').val();


//var height = document.bmiForm.haight.value;


let height = $('#height').val(); 





//console.log("weight:"+ weight+ "height:" + height);





if(weight > 0 && height > 0){ 





let finalBmi = weight/(height/100*height/100)


$('#Bmi').val(finalBmi);


console.log(finalBmi);


switch (true) {


  case (finalBmi < 18.5):


  $('#feedback').html("That you are too thin.");


  break;


 


  case (finalBmi > 25):


  $('#feedback').html("That you are overweight.");


  break;





default:


$('#feedback').html("You are healthy");


}


}else{


//alert("Please Fill in everything correctly");


$('#feedback').html("<strong>This Means:</strong>Please fill in everything correctly");


}

}