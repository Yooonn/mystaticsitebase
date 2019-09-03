document.addEventListener("DOMContentLoaded", function() {
    
    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-header .site-navigation');
    // console.log(myMenuButton);
    myMenuButton.addEventListener('click', function () {
        // console.log("I'm clicked")
        myMainMenu.classList.toggle('expanded');
    });

});
