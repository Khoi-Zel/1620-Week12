const clickButton = document.querySelector('.click-me')

function clickme(){
    alert('You clicked me.');
    // clickButton.removeEventListener('click', clickme);
}

function changeBGPink(){
    // document.body.style.backgroundColor = "pink";   # Method 1
    document.body.classList.add("pinkBG")
}



// clickButton.addEventListener('click', clickme, {once:true});
// clickButton.addEventListener('click', changeBGPink);



