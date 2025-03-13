const icons=document.querySelectorAll(".accord h1 i");
icons.forEach((icon)=>{
    icon.addEventListener("click",toggleAccordian);
});

function toggleAccordian(e){
    const clickIcon=e.target;
    const nextpara=clickIcon.parentElement.nextElementSibling;

    if(nextpara.classList.contains("active"))
        {
        nextpara.classList.remove("active")
        clickIcon.classList.remove("fa-xmark");
        clickIcon.classList.add("fa-plus")
        
    }
    else{

        nextpara.classList.add("active");
        clickIcon.classList.remove("fa-plus");
        clickIcon.classList.add("fa-xmark")
    }
}