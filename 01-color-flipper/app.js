const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'] 

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    //generate a random hex code
    let code = '#';
    for(let i=0;i<6;i++){
        const randomNumber = getRandomNumber();
        code+=hex[randomNumber];
    }
    
    document.body.style.backgroundColor = code;
    color.textContent = code;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}