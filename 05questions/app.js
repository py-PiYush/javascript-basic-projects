
//  TRAVERSING THE DOM

// const btns = document.querySelectorAll('.question-btn')


// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         let ans = e.currentTarget.parentElement.parentElement;
//         ans.classList.toggle('show-text')
//     })
// })
    


//USING SELECTORS INSIDE ELEMENT

const questions = document.querySelectorAll('.question');
questions.forEach(function(elem){
    const btn = elem.querySelector('.question-btn');
    btn.addEventListener('click', function(){

        questions.forEach(function(item){
            if(item !== elem){
                item.classList.remove('show-text');
            }
        })
        elem.classList.toggle('show-text');
    })
})

