let body = document.body;

body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
body.style.height = "800px";
body.style.overflow = "auto";


let myHeading = document.createElement("h1");
myHeading.textContent = "This is an assignment";

myHeading.style.background = "grey";
myHeading.style.backdropFilter = "20rem";
myHeading.style.width = "20rem";
myHeading.style.padding = "2rem";

myHeading.addEventListener("dblclick", function () {
  this.style.backgroundColor = "gray";
  this.style.color = "white";
});

myHeading.addEventListener("click", function () {
  this.style.backgroundColor = "black";
  this.style.color = "grey";
});

body.addEventListener('contextmenu', function () {
    alert('What do you want ?')
})

// body.addEventListener('mouseup', function () {
//     alert('Do you want to Scroll up ?')
// })

// body.addEventListener('mousedown', function () {
//     alert('Do you want to Scroll down ?')
// })

body.addEventListener('wheel', function () {
    alert('I don`t know what to do man')
})

body.append(myHeading);

let paragraph = document.getElementById("content");
paragraph.textContent =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur soluta, nostrum optio vel odit cumque. Ad nisi deserunt vitae eligendi beatae accusamus, accusantium laudantium nulla distinctio. Magni, nulla impedit fugiat eum, repudiandae reprehenderit reiciendis sequi illum quis exercitationem mollitia error!";

body.appendChild(paragraph);

paragraph.style.backgroundColor = "coral";
paragraph.style.color = "white";
paragraph.style.width = "30rem";
paragraph.style.textAlign = "center";
paragraph.style.padding = "2rem";

function para() {
    this.style.backgroundColor = "violet"
}

function out() {
    this.style.backgroundColor = "coral"
    this.style.color = 'white'
}

paragraph.addEventListener('mouseover', para)
paragraph.addEventListener('mouseout', out)


let myInput = document.createElement("input");
body.appendChild(myInput);

myInput.type = "text";
myInput.placeholder = "Do you wanna learn to code ?";
myInput.id = "myInput";

myInput.style.marginTop = "2rem";
myInput.style.width = "13rem";
myInput.style.padding = "1rem";
myInput.style.textAlign = "center";


