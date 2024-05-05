const obj=[
    {
        id:"01",
        title:"Consultation",
        content:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id:"02",
        title:"Research and Strategy Development",
        content:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id:"03",
        title:"Implementation",
        content:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id:"04",
        title:"Monitoring and Optimization",
        content:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id:"05",
        title:"Reporting and Communication",
        content:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    }
]

const accordion = document.querySelector(".accordion")

   obj.forEach((ele)=>{
        accordion.innerHTML += ` <div class="accord">
        <div class="accord-title">
           <div class="title">
            <span>${ele.id}</span>
            <h3>${ele.title}</h3>
           </div> 
           <img src="./assets/Plus icon.svg" alt="">
        </div>

        <hr>
        <p class="accord-content">${ele.content}</p>
       </div>`
   })

    const accord =document.querySelectorAll(".accord")
    console.log(accord)

    accord.forEach((element)=>{
        element.addEventListener("click",(e)=>{
             if(element.classList.contains("show-content")){
                element.classList.remove("show-content")
             }else{
                const show= document.querySelectorAll(".show-content")
                show.forEach((cont)=>{
                    cont.classList.remove("show-content")
                })

                element.classList.add("show-content")
             }
        })
    })
        
    let email=""
    let message =""
    const emails= document.querySelector("#email")
       emails.addEventListener("input",(e)=>{
        email = e.target.value
        console.log(email)
       })
    document.querySelector("#message").addEventListener("input",(e)=>{
        message=e.target.value
    })

    const contactForm = document.querySelector(".contact-form")
    contactForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        if(email !== ""){
            document.querySelector(".email-error").textContent =""
        }else{
            document.querySelector(".email-error").textContent ="Please enter a email"
        }

        if(message !== ""){
            document.querySelector(".message-error").textContent =""
        }else{
            document.querySelector(".message-error").textContent ="Please enter a message"
        }
    
        if(document.querySelector(".message-error").textContent =="" && document.querySelector(".email-error").textContent =="" ){
            alert("Sent sucessfully")
        }

    })

document.querySelector(".hamburger").addEventListener("click",()=>{
    const nav1=document.querySelector(".nav-menu");
    nav1.style.right="0"
})

document.querySelector(".close").addEventListener("click",()=>{
    const nav1=document.querySelector(".nav-menu");
    nav1.style.right="-1000px"
})


   