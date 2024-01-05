let link = document.querySelectorAll("#link");
let planetTab = document.getElementsByClassName("destination-container");
let imageSection = document.getElementsByClassName("planet-content")

let currentValue = 1;

function activeLink(){
    for (l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
    showTab();
    showImage();
}

function showTab(){
    hideAllTabs();

    let tabId = "tab" + currentValue;
    let selectedTab = document.getElementById(tabId);
    if(selectedTab){
        selectedTab.style.display = "grid";
    }
}

function showImage(){
    hideAllImages();

    let imageId = "image" + currentValue;
    let selectedImages = document.getElementById(imageId);
    if(selectedImages){
        selectedImages.style.display = "block";
    }
}

function hideAllTabs(){
    let allTabs= document.querySelectorAll(".tab-change");

    allTabs.forEach(function(tab){
        tab.style.display = "none"
    });
}

function hideAllImages(){
    let allImages = document.querySelectorAll(".image-change");

    allImages.forEach(function(image){
        image.style.display = "none"
    });
}