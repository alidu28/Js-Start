let theBody = document.body;

theBody.style.minHeight = "100vh";
theBody.style.background = "#212534";
theBody.style.display = "flex";
theBody.style.alignItems = "center";
theBody.style.justifyContent = "center";
theBody.style.flexDirection = "column";
theBody.style.paddingTop = "2rem";
theBody.style.paddingBottom = "2rem";
theBody.style.boxSizing = "border-box";

let myCard = document.querySelector(".card");

myCard.style.background = "#181c24";
myCard.style.width = "calc(65vh/2)";
myCard.style.height = "65vh";
myCard.style.padding = "4px";
myCard.style.position = "relative";
myCard.style.borderRadius = "0.5rem";
myCard.style.justifyContent = "center";
myCard.style.alignItems = "center";
myCard.style.display = "flex";
myCard.style.textAlign = "center";
myCard.style.color = "rgb(88 188 250 / 0%)";
myCard.style.cursor = "pointer";

let myHTwo = document.querySelector(".card h2")
myHTwo.style.fontSize = "1.5rem"
myHTwo.style.fontWeight = "500"

let card = document.querySelector(".card")
card.addEventListener("mouseover",() => {
    card.style.color = "rgb(88 188 250 / 100%)"
    card.style.transition = "1s"
})

card.addEventListener("mouseout",() => {
    card.style.color = "transparent"
    card.style.transition = "1s"
})