// Seth Preble

// ID section
document.getElementById("firstPara").innerHTML += "<span class=\"tan\">This is new tan text</span>"; 

// tag name
let images = document.getElementsByTagName("img"); 

for (let image of images) {
    image.width = "250"; 
}

// class name selection
let ltBlueSpans = document.getElementsByClassName("light-blue"); 

let medBlueSpans = document.getElementsByClassName("med-blue"); 

for (let span of ltBlueSpans){
    span.style.color = "#7C9EA6"; 
}

for (let span of medBlueSpans) {
    span.style.color = "#3C5E73"; 
}

// Selecting a group with CSS selector
let color = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"]; 

let svgs = document.querySelectorAll("#svgs svg"); 
for (let i = 0; i < svgs.length; i++) {
    svgs[i].style.stroke = color[i];
}
// console.log(svgs); 

// Selecting elements with CSS selector

document.querySelector(".bold").style.color = "#7C9EA6"; 

// changing dom node content
document.querySelector(".content_list li:first-of-type").textContent = "this is new list item text"; 

document.querySelectorAll(".content_list li")[2].innerHTML += "<strong>- Seth Preble</strong>"; 

document.querySelector("#remove a").removeAttribute("hidden"); 

