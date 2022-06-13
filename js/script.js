// variable to store the panels
const panels = document.querySelectorAll('.panel');

// function to toggle open class on and off
const toggleOpen = function()  {
    this.classList.toggle('open');
}
const toggleActive = function (e) {
    // if the flex grow is triggered then assign open-active to that
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
    
}
// add a listener for each panel to toggle open class on
panels.forEach(function(panel){
    panel.addEventListener('click', toggleOpen);
})
// add an event listener for when the transition ends on a clicked panel
panels.forEach(function(panel) {
    panel.addEventListener('transitionend', toggleActive);
})