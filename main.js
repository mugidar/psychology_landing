const burgerMenuBtn = document.querySelector('.burger')

burgerMenuBtn.addEventListener('click', () => {
    if(burgerMenuBtn.classList.contains("active")){
        burgerMenuBtn.classList.remove("active")
    }else {
        burgerMenuBtn.classList.add("active")
    }
})



 document.addEventListener('scroll', (e)=> {
    window.scrollTo(0, document.body.getBoundingClientRect().height)

})