const logDiv = document.getElementById('log')
const stateDiv = document.getElementById('state')
const startbtn = document.getElementById('start-button')
const stopbtn = document.getElementById('stop-button')

startbtn.addEventListener("click",()=>{
    document.addEventListener('keydown',handleDown)
    document.addEventListener('keyup',handleUp)
    startbtn.disabled = true;
    stopbtn.disabled = false;
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener('keydown',handleDown)
    document.removeEventListener('keyup',handleUp)
    logDiv.textContent="";
    stateDiv.textContent="";
    stopbtn.disabled = true;
    startbtn.disabled = false;
})

function handleDown(e){
    logDiv.textContent= `Key ${e.key} pressed down`
    stateDiv.textContent= `Key is down`
}

function handleUp(e){
    logDiv.textContent= `Key ${e.key} is released`
    stateDiv.textContent= `Key is up`
}