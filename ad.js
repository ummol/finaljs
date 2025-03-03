function pageHolder() {
    console.log("Good job");
    TabFocus();
}

function TabFocus() {
    let images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('focus', function() {
            console.log("Image focused: " + this.alt);
            this.style.border = "2px solid blue";
        });
        img.addEventListener('blur', function() {
            console.log("Image lost focus: " + this.alt);
            this.style.border = "2px solid transparent";
        });
    });
}
