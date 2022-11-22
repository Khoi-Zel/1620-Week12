const clickButton = document.querySelector('.click-me')

function clickme(){
    alert('You clicked me.');
    // clickButton.removeEventListener('click', clickme);
}

function changeBGPink(){
    // document.body.style.backgroundColor = "pink";   # Method 1
    document.body.classList.add("pinkBG")
}

function clickme1(){
    if(clickButton.textContent === 'Click me !'){
        clickButton.textContent = 'Clicked!'
    }
    else(clickButton.textContent = 'Click me !');
}

function updateImage(){
    
}


// clickButton.addEventListener('click', clickme, {once:true});
// clickButton.addEventListener('click', changeBGPink);
clickButton.addEventListener('click', clickme1 )



