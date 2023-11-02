//Code references:

//[6] w3schools.com, 'Accordion', 1999-2021. [Source code]. https://www.w3schools.com/howto/howto_js_accordion.asp

//[7] w3schools.com, 'Collapsible', 1999-2021. [Source code]. https://www.w3schools.com/howto/howto_js_collapsible.asp

//The accordion and collapsible code were combined and editted to fit my site.

var exp = document.getElementsByClassName("expand");
var i;

for (i = 0; i < exp.length; i++) {
    exp[i].addEventListener("click", function() {
        this.classList.toggle("activeexpandpanel");
        var expandpanel = this.nextElementSibling;
        if (expandpanel.style.maxHeight) {
            expandpanel.style.maxHeight = null;
       } 
        else {
           expandpanel.style.maxHeight = expandpanel.scrollHeight + "px";
       } 
    });
}
