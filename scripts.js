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