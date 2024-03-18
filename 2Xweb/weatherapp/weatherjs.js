

const apiurl="https://api.openweathermap.org/data/2.5/weather?appid=7ab2770a7cd0331daf4c0dc5e51cd235&units=metric&q="

const searchbox=document.querySelector(".search input");

const searchbtn=document.querySelector(".search button");

const weathericoni=document.querySelector(".weathericon")

async function checkweather(city)
{
    const response=await fetch(apiurl+city);

    if(response.status== 404)
    {
        document.querySelector(".error").style.display="block";
        
   document.querySelector(".weather").style.display="none";
    }

    else
    {
    var data=await response.json();


    
    
    document.querySelector(".city").textContent=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
   
    if(data.weather[0].main=="Clouds")
    {
        weathericoni.src="clouds.png";
    }
   else if(data.weather[0].main=="Clear")
   {
       weathericoni.src="clear.png";
   }
   else if(data.weather[0].main=="Rain")
   {
       weathericoni.src="rain.png";
   }
   else if(data.weather[0].main=="Drizzle")
   {
       weathericoni.src="drizzle.png";
   }
   else if(data.weather[0].main=="Mist")
   {
       weathericoni.src="mist.png";
   }

   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";

    
   }
  
}


searchbtn.addEventListener("click" ,()=>{

    checkweather(searchbox.value)
    
})