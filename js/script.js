let testDiv = document.querySelector(".testDiv");
let projCont = document.querySelector("#ProjCont");
let modalCont = document.querySelector(".overlayTest");
let modalTest = document.querySelector(".modalTest");

let projectsList = [];
class project {
    constructor (titel,img, text) {
        this.titel = titel;
        this.img = img;
        this.text = text;
    }
}

projectsList = getProject();
function getProject(){
    let myProject = [
        new project("Form", "images/form.jpg", "Fill out contact info📝 and details of what you would prefer to get of newsletters with the form page."),
        new project("responsive", "images/responsiveLayout.jpg", "This is a sample page that could be used for a personal website or others🖇"),
        new project("Circle UI", "images/webstylePic.jpg", "Check out this cool&#128526; page that responds and changes layout according to the width of the page you are viewing"),
        new project("Wheel of Sucsess", "images/wheel of succsess.jpg", "Want to play a game 🎮? Try out my game app that lets you guess letters to form a word or sentence"),
        new project("WebApp", "images/photoGallery.PNG", "If you love taking pictures and want a webpage to show your wonderful work then this would be a nice webpage for you.📷"),
        new project("Employee dir API", "images/Employee-dir-API.PNG", "Retrieve info from external server and show random names and info. If you click on the employee cards the page will display a modal with more info. Also use the search bar to filter names."),
    ]
    return myProject;
};

/*var index = 0;

var projects = getProject();
var titel = projects[index].titel;
var pic = projects[index].img;
var desc = projects[index].text;


testDiv.innerHTML=`<div class="modal">
<div class="modalCardContent">
        <h1>${titel}</h1>
        <img src="${pic}" id="modalImg" alt="modal picture"/>
        <p><a href="#">${desc}</a>
        </p>
</div>
</div>`*/


function showProjects(){
    var projects = projectsList

    for( let ind = 0 ; ind < projects.length; ind++) {
        var titel = projects[ind].titel;  
        var pic = projects[ind].img;
        var desc = projects[ind].text;
        projCont.innerHTML+=`
        <div class="col-md col-lg-4">
                <h1><a href="">${titel}</a></h1>
                <div class="card" style="width: 18rem;">
                <img class="img-thumbnail rounded" src="${pic}" alt="">
                <p>Click for more info</p>
                </div>
        </div>`
    };
}

function modalDisplay(){

modalCont.classList.remove("hidden");

modalTest.innerHTML= `<div class="col-md col-lg-4">
<h1><a href="">${projectsList[0].titel}</a></h1>
<div class="card" style="width: 18rem;">
<img class="img-thumbnail rounded" src="${projectsList[0].img}" alt=""/>
<p>${projectsList[0].text}</p>
</div>
</div>`

}

projCont.addEventListener('click', e => {
    modalDisplay();
});
showProjects();

