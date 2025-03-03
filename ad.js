function pageHolder() {
    console.log("Page has loaded successfully.");
    TabFocus();
}

function TabFocus() {
    let images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('focus', function() {
            console.log("Image focused: " + this.alt);
            this.style.border = "2px solid blue";
        });
        images[i].addEventListener('blur', function() {
            console.log("Image lost focus: " + this.alt);
            this.style.border = "2px solid transparent";
        });
    }
}
