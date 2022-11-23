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

const images = document.querySelector('#shoppingCart')
function updateImage(){
    images.src = 'Photo/Cart.png'
    images.alt = 'Shopping Cart'
    images.width = '50'
    images.height = '50'
}

const buttonContainer = document.querySelector('.button-container')
function changeBGGreen(e){
    if(e.target.tagName === 'BUTTON'){
    e.target.classList.add('greenBG');
    }
    e.stopPropagation
}

function colorChange(e){
        e.target.style.color = e.target.textContent;
}


// clickButton.addEventListener('click', clickme, {once:true});
// clickButton.addEventListener('click', changeBGPink);
// clickButton.addEventListener('click', clickme1 );
// clickButton.addEventListener('click', updateImage);
// buttonContainer.addEventListener('mouseover', changeBGGreen);
buttonContainer.addEventListener('mouseover', colorChange);



