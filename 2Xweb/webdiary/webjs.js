
var popoverlay=document.querySelector(".popup-overlay")
var popbox=document.querySelector(".popbox")
var addbutton=document.getElementById("popbutton")

addbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popbox.style.display="block"
})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
   
     event.preventDefault()
     popoverlay.style.display="none"
    popbox.style.display="none"

})

var container=document.querySelector(".container");
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var  textarea=document.getElementById("short-des")

var addbook=document.getElementById("add")

addbook.addEventListener("click",function(event)
{
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","firstcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${textarea.value}</p>
    <button id="delete" onclick="deletethis(event)">delete</button>`
    container.append(div)
    booktitle.value=""
    bookauthor.value=""
    textarea.value=""
    popoverlay.style.display="none"
    popbox.style.display="none"

})

var dele=document.getElementById("delete")

function deletethis(event)
{
    event.target.parentElement.remove()
}