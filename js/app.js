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
 * Define Global Variables
 * 
*/
const sections=[
    {
        id: 1,
        header:'Section 1',
        paragraph1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        paragraph2:'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
    },
    {
        id: 2,
        header:'Section 2',
        paragraph1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        paragraph2:'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
    },
    {
        id: 3,
        header:'Section 3',
        paragraph1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        paragraph2:'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
    },
    {
        id: 4,
        header:'Section 4',
        paragraph1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        paragraph2:'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
    }
];
let isScrolling;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
let addAndRemoveActiveClass = (currentElement)=>{
    //remove all active class 
    const activeSection= document.querySelector('.your-active-class');
    if(activeSection){
        activeSection.classList.remove('your-active-class');
    }
    //add active class to current element in viewport
    currentElement.setAttribute("class", "your-active-class");
}
let checkElementViewport=(element)=>{
    //get element coordinate
    let positionElement = element.getBoundingClientRect();
    return (
        positionElement.top >= 0 &&
        positionElement.left >= 0 &&
        positionElement.bottom <= (document. documentElement.clientHeight) &&
        positionElement.right <= (document. documentElement.clientWidth)
    );
}
let addAndRemoveNavActiveClass = (currentElement)=>{
    const activeNav= document.querySelector('.active');
    // check there is acrtive class
    if(activeNav){
        // remove all active class
        activeNav.classList.remove('active');
    }
    // get current active li
    const currentlinkElment =document.querySelector(`#${currentElement}`);
    if(currentlinkElment){
        // add active class
        currentlinkElment.parentNode.classList.add("active");
    }
}
let hideHeaderStopScroll =() =>{
    window.clearTimeout( isScrolling );
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
     // hide header
      document.querySelector('.page__header').style.display='none';
    }, 1000);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build sections
let initSections =() => {
    const fragment = document.createDocumentFragment();
    const mainElement = document.querySelector('main');

    for (let i = 0; i < sections.length; i++) {
        const newElement = document.createElement('section');
        // set section id
        newElement.id= 'section'+sections[i].id;
        // set section data-nav
        newElement.setAttribute("data-nav", `link${sections[i].id}`);
        // set section active class for first time
        if(i==0){
            newElement.setAttribute("class", "your-active-class");
        }
        // add html elements to current section
        newElement.innerHTML = `<div lass="landing__container"> 
        <h2>${sections[i].header}</h2>
        <p>${sections[i].paragraph1}</p>
        <p>${sections[i].paragraph2}</p>
        </div>`;
        fragment.appendChild(newElement);
    }
    mainElement.appendChild(fragment);
}
// build the nav li,a
let initMenu = ()=> {
    const navElement = document.querySelector('ul');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < sections.length; i++) {
        // add unorder list to ul
        const newElement = document.createElement('li');
        // add anchor
        const anchorElement = document.createElement('a');
        // add anchor label
        anchorElement.innerText=sections[i].header;
        // add anchor id
        anchorElement.id='link'+sections[i].id;
        // add anchor href
        anchorElement.href='#section'+sections[i].id;
        // add anchor class
        anchorElement.setAttribute('class','menu__link');
        // add click envent to anchor
        anchorElement.addEventListener('click',clickNavigateElment);
        newElement.appendChild(anchorElement)
        fragment.appendChild(newElement);
    }
    navElement.appendChild(fragment);
}
// Add class 'active' to section when near top of viewport
 let sectionActiveFunction = ()=> {
    // display header while user scroll
    document.querySelector('.page__header').style.display='block';
    // check user stopped scroll
    hideHeaderStopScroll();
    // get all sections
    const sectionlist=document.querySelectorAll('section');
    for(let i=0;i< sectionlist.length;i++){
        // get if element in viewport
        const result = checkElementViewport(sectionlist[i]);
        if(result == true){
            // remove active class and add class to active section element
            addAndRemoveActiveClass(sectionlist[i]);
            // get nav link id from data-nav
            const getlink=sectionlist[i].getAttribute('data-nav');
            // remove old class and add new class
            addAndRemoveNavActiveClass(getlink);
        }
    }
}
let initSectionActiveListenEvent = ()=> {
    // add event to listen for DOM scroll is changed
    document.addEventListener('scroll',sectionActiveFunction,false); 
}
// Scroll to anchor ID using scrollTO event
let clickNavigateElment =(event)=>{
    //prevent default function
    event.preventDefault();
    // get href attribute
    const lintAttribute=event.target.getAttribute('href');
    // scroll to section
    document.querySelector(lintAttribute).scrollIntoView({
        block: "start", 
        inline: "start",
        behavior: 'smooth'
    });
}
/**
 * End Main Functions
*/
initSections();
initMenu();
initSectionActiveListenEvent();