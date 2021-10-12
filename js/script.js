let testDiv = document.querySelector(".testDiv");
let projCont = document.querySelector("#ProjCont");
let modalCont = document.querySelector(".overlayTest");
let modalTest = document.querySelector(".modalTest");
let nav = document.querySelector(".navbar");
let X = document.querySelector(".modal-close");
let arrowL = document.querySelector(".arrowL");
let arrowR = document.querySelector(".arrowR");
let currentDispTitle = document.querySelector(".dispTitle");
let buttonSend = document.querySelector("#btn1");
let inputEmail = document.querySelector("#exampleFormControlInput1");
let inputText = document.querySelector("#exampleFormControlTextarea1");

let projectsList = [];
let indexCards = 0;

class project {
    constructor (titel,href,img,text) {
        this.titel = titel;
        this.href = href;
        this.img = img;
        this.text = text;
    }
}

function getProject(){
    let myProject = [
        new project("Form","https://kahmed-byte.github.io/Registration_Form/","images/form.jpg", "Fill out contact info📝 and details of what you would prefer to get of newsletters with the form page."),
        new project("Responsive","https://kahmed-byte.github.io/Responsive_Layout/", "images/responsiveLayout.jpg", "On this project I used media queries to change size on the page to fit different view screen sizes.🖇"),
        new project("WebApp","https://kahmed-byte.github.io/WebApp/", "images/WebAppDashboard.jpg", "Check out this cool&#128526; page that shows graphs stats and updates on events. Alot of things happening hereˇ📴ˇ"),
        new project("Wheel of Sucsess","https://kahmed-byte.github.io/Game_Show_App/", "images/wheel of succsess.jpg", "Want to play a game 🎮? Try out my game app that lets you guess letters to form a word or sentence"),
        new project("Photo Gallery","https://kahmed-byte.github.io/Interactive_Photo_Gallery/", "images/photoGallery.PNG", "On this project I created a slideshow for picture galleries and used the search field to filter the wanted picture.📷"),
        new project("Employee dir API","https://kahmed-byte.github.io/Employee-dir-API/", "images/Employee-dir-API.PNG", "Retrieve info from external server and show random names and info. Click on the employee cards for interaction."),
    ]
    return myProject;
};

projectsList = getProject();


function showProjects(){
    
    var projects = projectsList
    for( let i = 0 ; i < projects.length; i++) {
        var titel = projects[i].titel;  
        var pic = projects[i].img;
        projCont.innerHTML+=`
        <div class="col-md col-lg-4 projectCard" data-index="${i}">
                <h1 id="${titel}">${titel}</h1>
                <div class="card" style="width: 18rem;">
                <img class="img-thumbnail rounded" src="${pic}" alt="">
                <p>Click for more info</p>
                </div>
        </div>`
    };
}


function modalDisplay(index){

modalCont.classList.remove("hidden");

modalTest.innerHTML= `<div class="col-md col-lg-4 modalMarg">
<h1 class="dispTitle"><a href="${projectsList[index].href}">--->Visit website here<---</a></h1>
<div class="card" style="width: 18rem;">
<img class="img-thumbnail rounded" src="${projectsList[index].img}" alt=""/>
<p class="dispInfo">${projectsList[index].text}</p>
</div>
</div>`
}


projCont.addEventListener('click', e => {
const projectCard = e.target.closest(".projectCard");
const index = projectCard.getAttribute('data-index');
indexCards = index;
modalDisplay(indexCards);
nav.style.display="none";
});

arrowL.addEventListener("click", () => {

    if(indexCards < 0) {
        indexCards = projectsList.length;
    }
modalDisplay(indexCards--);
    
})

arrowR.addEventListener("click", () => {

    if(indexCards == projectsList.length) {
        indexCards = 0;
    }
modalDisplay(indexCards++);
    
})


X.addEventListener("click", e => {
    modalCont.classList.add("hidden");
    nav.style.display="block";
})

buttonSend.addEventListener("click", () => {
    if(inputText.value === "" && inputEmail.value === "") {
        alert("Please fill E-mail & Message fields");
    }
    else if(inputEmail.value === "") {
        alert("Please fill E-mail field");
    }
    else if(inputText.value === "") {
        alert("Please fill Message field");

    }
    else {
        alert("Thank you for your e-mail :)");
    }
})

showProjects();

