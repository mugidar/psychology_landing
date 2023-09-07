const burgerMenuBtn = document.querySelector('.burger')

burgerMenuBtn.addEventListener('click', () => {
    if(burgerMenuBtn.classList.contains("active")){
        burgerMenuBtn.classList.remove("active")
    }else {
        burgerMenuBtn.classList.add("active")
    }
})