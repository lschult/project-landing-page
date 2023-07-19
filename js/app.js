// Start Global Variables
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const navMenu = document.querySelector(".navbar__menu");
// End Global Variables

// Start build the nav
function createNav(sections) {
  sections.forEach((section) => {
    // Create li elements which are making up the ul
    const sectionId = section.getAttribute("id");
    const sectionName = section.getAttribute("data-nav");
    const navElement = document.createElement("li");
    // The li element's HTML content is inserted
    navElement.insertAdjacentHTML(
      "afterbegin",
      `<a href="#${section.id}" class="nav__link">${section.dataset.nav}</a>`
    );
    // li is appended to ul
    navList.appendChild(navElement);
    // Function for the scrolling behavior is called
    scrollEvent(navElement, section);
  });
  // ul appended to nav
  navMenu.appendChild(navList);
}
createNav(sections);
//End build the nav

// Start of Scroll to anchor ID using scrollTO event
function scrollEvent(navElement, section) {
  navElement.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      left: section.offsetLeft,
      behavior: "smooth",
    });
  });
}
// End of Scroll to anchor ID using scrollTO event

// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection(event) {
  event.preventDefault();
  // Anchors selected
  const navItems = document.querySelectorAll(".nav__link");
  sections.forEach((section, index) => {
    // Access the sections's boundingRect
    const area = section.getBoundingClientRect();
    //Get minimum size of section in the viewport
    const sectionFirstLinePosition = getSectionParagraphPosition(section);

    const minimumPartInView = window.innerHeight > sectionFirstLinePosition;
    // A section is active when the minimum part of a section is in the view, and the end of the section is not above the user's viewport top and the next section is not in the viewport
    const isActive =
      minimumPartInView &&
      area.bottom > 0 &&
      !nextSectionParagraphInView(index);

    if (isActive) {
      section.classList.add("your-active-class");
      navItems[index].classList.add("active_btn");
      section.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      navItems[index].classList.remove("active_btn");
      section.classList.remove("active");
    }
  });
}

function nextSectionParagraphInView(sectionIndex) {
  const nextSectionIndex = sectionIndex + 1;
  const nextSection = sections[nextSectionIndex];

  if (nextSection === undefined) {
    return false;
  }
  const inView = getSectionParagraphPosition(nextSection) < window.innerHeight;
  return inView;
}

function getSectionParagraphPosition(section) {
  const pEl = section.querySelector("p");
  const area = pEl.getBoundingClientRect();
  // + 18 (font-size) so the first line in the next paragraph is visible
  //TODO: get the font size of the paragraph programmatically
  const position = area.top + 18;
  return position;
}

document.addEventListener("scroll", function (event) {
  activeSection(event);
});
// End of Set the Section class 'active' when it near to the top of viewport

// Start of Toggle the NavBar According to User Scroll Activity
//Show navmenu by removing hidden nav class
function displayNavmenu() {
  const navBar = document.querySelector(".page__header");
  navBar.classList.remove("hidden-nav");
}
//Hide navmenu by adding hidden nav class
function hideNavmenu() {
  const navBar = document.querySelector(".page__header");
  navBar.classList.add("hidden-nav");
}

function manageActions() {
  window.addEventListener("scroll", displayNavmenu);

  let timeout;
  //timeout runs after scrolling stops an change on navmenu is exceuted after timeout finishes
  function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(hideNavmenu, 1500);
  }
  //While user is scrolling timeout remains reset
  window.addEventListener("scroll", resetTimeout);
}

manageActions();
// End of Toggle the NavBar According to User Scroll Activity

//Function to expand/collapse sections
sections.forEach((section) => {
  const paragraph = section.querySelector(".section-paragraph");
  //Button created in HTML called
  const button = section.querySelector(".expand-paragraph");

  if (button === null) {
    return;
  }
  // click button to toggle expand or collapse of the section
  button.addEventListener("click", () => {
    section.classList.toggle("open");
    // When the section is expanded, the entire paragraph is visible

    if (section.classList.contains("open")) {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
      button.innerHTML = "Read less";
      // When the section is collapsed, only a specific height of the paragraph is visible
    } else {
      paragraph.style.maxHeight = `${310}px`;
      button.innerHTML = "Read more";
    }
  });
});

// Scroll to top button of the Landing Page using scrollTo

function scrollTopBtn() {
  //Button created in HTML called
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  //Button visible as soon as user srolls underneath the fold of the page (on page load)
  document.addEventListener("scroll", function () {
    if (window.scrollY < window.innerHeight) {
      scrollTopBtn.classList.remove("visible");
    } else {
      scrollTopBtn.classList.add("visible");
    }
  });
  //ScrollTo event used to smoothly transition to the top of the page
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// Scroll to top button function called
scrollTopBtn();
// End of scroll to top button
