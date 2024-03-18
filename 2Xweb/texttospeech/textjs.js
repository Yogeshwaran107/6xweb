
const textinput=document.querySelector(".text");
const play=document.querySelector("#playbutton");
const pauseval=document.querySelector("#pausebutton");
const stop=document.querySelector("#stopbutton");
const speed=document.querySelector("#speedtext");

play.addEventListener('click',()=>{
    playtext(textinput.value);
})
pauseval.addEventListener('click', ()=>{
    pausetext();
})

stop.addEventListener('click',()=>{
             stoptext();
})
speed.addEventListener('input',()=>{
  stoptext()
  
  playtext(utterance.text.substring(currentchar))
  console.log(currentchar)
})

const utterance=new SpeechSynthesisUtterance();

utterance.addEventListener('end',()=>{
    textinput.disabled=false;
  })
  utterance.addEventListener('boundary', e=>{
    currentchar=e.charIndex
  })
function playtext(text)
{
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
   
  

  utterance.text=text;
  utterance.rate=speed.value||1;
  
  textinput.disabled=true;
  speechSynthesis.speak(utterance);
}


function pausetext()
{
    if(speechSynthesis.speaking)
    {
      speechSynthesis.pause();
    }
}


function stoptext()
{
    speechSynthesis.resume();
    speechSynthesis.cancel();
    
    
    
}