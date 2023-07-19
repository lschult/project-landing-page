# Project Title

UDACITY - Landing Page Project

# Summary

This is the landing page project, which is part of the of the Udacity Nanodegree Front End Developer Program. It is based on the JavaScript/DOM course.

Starter file with HTML/CSS code was provided by Udacity, and the project was completed using JavaScript in order to achieve a dynamic, multi section landing page. Certain modifications to the HTML and CSS structure were implemented, and a separate JavaScript file was created which made the static version of the landing page interactive.

# Table of Contents

- [Project Title](#project-title)
- [Summary](#summary)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
- [License](#license)

# Installation

This project can be installed by cloning the repository through Github and downloading it onto a computer.

# Usage

By following the installation instructions, the projects' files can be opened on any code text editor of choice (such as VS Code).

# Development

This project consists of 4 distinct files:

- index.html

- js/app.js

- css/styles.css

- README.md

  1.) Modifications within styles.css were performed in order to achieve the dynamic fucntionality which is visible on the project
  2.) SLight modifications done to index.html (2 buttons and 2 sections were added)
  3.) app.js contains the majority of the work which was performed. This includes:

  - Created the Navbar by using the createNav() function, which looped through each section and built the appropriate li elements (including html text), which were appended to the the navbar.
  - Made scrolling between sections smooth by using EventListener and the srcollTo fucntion.
  - Highlighted the active section that is being viewed by the user by using the method getBoundingClientRect(), if/else statement, and establishing when the active section changes. In addition to the actual section being highlighted, the appropriate element in the navbar was modified with CSS to change accordingly.
  - Added functionality to show the navbar when user is scrolling, and hide it when scrolling stops using setTimeout method.
  - Additional button was created to toggle between sections being expanded or collapsed. This was achieved by using EventListener and if/else statement, showing different paragraph heights depending on which state is active.
  - Created Scroll Top Button within the footer, and modified it by using EventListener and if/else to only be visible if the user scrolls below the fold of the page. Added functionality to smoothly transition to the top of the page when clicked.

# Contribute

Udacity

# License

© Udacity
