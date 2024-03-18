





function find()
{
    var ageinput=document.getElementById("date");
    var birthdate=ageinput.value;

    var birth=new Date(birthdate);

    var currentdate=new Date();


    var age= currentdate.getFullYear()-birth.getFullYear();

    if(currentdate.getMonth()<birth.getMonth()|| 
    currentdate.getMonth()==birth.getMonth() && currentdate.getDate()<birth.getDate())
    {
        age--
    }
  var result=document.getElementById("result");
  result.innerHTML="your <span>age</span> is"+" "+age;

  

  console.log(result);

}