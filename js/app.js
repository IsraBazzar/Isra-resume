/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const mainSections = Array.from(document.querySelectorAll("section"));
let  navList = document.getElementById("navbar__list");

let navLink;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * createListItem function: generate items for navigation listdepending on sections
 */
function createListItem(){
    /**
     * 
     */
    for (let i = 0; i < mainSections.length; i++) {
        let navItem = document.createElement("li");
        navLink = document.createElement("a");
        //create link navigation item to append for list item
        navLink.innerHTML = mainSections[i].getAttribute("data-nav");
        navLink.classList.add("menu__link");
        //define attributes for navigation link
        navLink.setAttribute("href", "#section" + (i + 1));
        navLink.setAttribute("data-link", mainSections[i].getAttribute("data-nav"));
        
        navItem.append(navLink);
        //append list item to navigation list
        navList.append(navItem);
      }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/** Build menu 
 * Call our function to build navigation menu
*/ 
createListItem();

/**
 * End Main Functions
 * Begin Events
 * 
*/

/**
 * Added functionality to distinguish the section in view
 * EventListener to scrolling (while scrolling the section in action will be reset)
 */
window.onscroll = function(){
  document.querySelectorAll("section").forEach(function (active){
    if(
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ){
    active.classList.add("active__section");
    }
    else{
      active.classList.remove("active__section");
    }
  });
}
 
  /**  
   * Build list of links for navigation
   * */
  const linksList = document.querySelectorAll("a[href^='#section']");
  
  linksList.forEach(function (link) 
  {
    link.addEventListener("click", () => {
      linksList.forEach((link) => {
        if (link.classList.contains("active__link")) {
          link.classList.remove("active__link");
        }
      });
  
      link.classList.add("active__link");
  
      let ref = link.href.split("#section");
      ref = "#section" + ref[1];
      /**
       * Scroll to reference for each link
       */
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: document.querySelector(ref).offsetTop,
      });
    });
  });