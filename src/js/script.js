const hamburger = document.querySelector(".hamburger_link"),
      menu = document.querySelector(".menu"),
      menuClose = document.querySelector(".menu__close-link"),
      percents = document.querySelectorAll(".knowlage__percent"),
      lines = document.querySelectorAll(".knowlage__fill-line");

hamburger.addEventListener("click", (e)=>{
    e.preventDefault();
    menu.classList.add("menu_active");
});

menuClose.addEventListener("click", (e)=>{
    e.preventDefault();
    menu.classList.remove("menu_active");
});

percents.forEach((per, num) => {
    lines[num].style.width=per.innerHTML;
});

//---SEND FORM-------------///


const form = document.querySelector('.contact__form')
const f = document.querySelector('.contact__f')
const wrapper = document.querySelector(".contact__wrapper")    

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    document.querySelector('.contact__send').disabled = true;

    const data = Object.fromEntries(new FormData(form))

    const sendRequest = async () => {
        const response = await fetch('./mailer/smart.php', 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        body: data,
        })

        return response;
    }

    sendRequest()
    .then(r => {
        f.classList.add('contact__hidden');

        const h2 = document.createElement("h2");
        h2.classList.add("title")
        h2.classList.add("title__fz36");
        h2.innerHTML = "Сообщение отправлено";
        wrapper.appendChild(h2);

    })
    .catch(r=> console.dir(r));

    
})
