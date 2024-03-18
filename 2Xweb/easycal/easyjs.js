var inputval=document.querySelector(".input-box");

function display(num)
{
    inputval.value += num;
}


function equal()
{
    try{
        inputval.value=eval(inputval.value)
    }
    catch(err)
    {
        alert("invalid")
        inputval.value="";
    }
}
function clearbox()
{
    inputval.value="";
}
function del()
{
    inputval.value=inputval.value.slice(0,-2);
}