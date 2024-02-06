/* ==================== hide style switcher on scroll ==================== */
var typed = new Typed(".typing" , {
    strings:["" , "Web Designer" , "Web Developer" , "Graphic Designer" , "YouTuber"] ,
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ==================== Aside ==================== */
const nav = document.querySelector(".nav") , 
      navList = nav.querySelectorAll("li") ,
      navListLength = navList.length ,
      allSection = document.querySelectorAll("section") ,
      allSectionLength = allSection.length;
      for(let i = 0; i < navListLength; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener('click' , function() {
            removeBackSection();
            for(let j = 0; j < navListLength; j++) {
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
      }

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
      
function removeBackSection() {
    for(let i = 0; i < allSectionLength; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function showSection(element){
    for(let i = 0; i < allSectionLength; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for(let i = 0; i < navListLength; i++) {
        navList[i].querySelector("a").classList.remove("active"); 
        const target = element.getAttribute("href").slice(1);
        if(target === navList[i].querySelector("a").getAttribute("href").slice(1)) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
    // console.log(element.getAttribute("href").split("#")[1]);
}

document.querySelector(".hire-me").addEventListener("click" , function() {
    const sectionIndex = document.querySelector(".hire-me").getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection()
    addBackSection(sectionIndex)
})

const navTogglerBtn = document.querySelector(".nav-toggler") , 
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener('click' , () => {
    asideSectionTogglerBtn();
    })

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < allSectionLength; i++) {
        allSection[i].classList.toggle("open");
    }
}