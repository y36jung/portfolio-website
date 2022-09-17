// Introduction
var introContainer = document.getElementById('section_intro');
var introTitle = document.getElementById('section_intro_title');
var introSubtitle = document.getElementById('section_intro_subtitle');

// About Me
var aboutContainer = document.getElementById('section_about');
var aboutTitle = document.getElementById('section_about_title');
var aboutContent = document.getElementById('section_about_content_parent');

// Skills
var skillsContainer = document.getElementById('section_skills');

// Projects
var projectsContainer = document.getElementById('section_projects');

// Socials
var socialsContainer = document.getElementById('section_socials');

// Images
var imageDiv = document.getElementById('div_background');
var sat = document.getElementById('idle_sat');
var desk = document.getElementById('idle_desk');
var bookshelf = document.getElementById('idle_bookshelf');
var bookshelfNobook = document.getElementById('idle_bookshelf_nobook');

// Gifs
var deskStand = document.getElementById('active_desk_stand');
var walk = document.getElementById('active_walk');
var snatchBook = document.getElementById('active_snatch');
var closeBook = document.getElementById('active_close');
var walkBook = document.getElementById('active_walk_book');
var standAway = document.getElementById('active_stand_away');
var standTo = document.getElementById('active_stand_to');
var deskSit = document.getElementById('active_desk_sit');

// Clickable
var clickMain = document.getElementById('click_main');

window.addEventListener('load', function() {
  introContainer.classList.add('fade-in');
  restartGif();
})

function restartGif() {
  deskStand.src = deskStand.getAttribute('src');
  snatchBook.src = snatchBook.getAttribute('src');
  closeBook.src = closeBook.getAttribute('src');
  standAway.src = standAway.getAttribute('src');
  standTo.src = standTo.getAttribute('src');
  deskSit.src = deskSit.getAttribute('src');
}

var id = 0;
function nextSection() {
  clickMain.style.zIndex = -2;
  if (id == 0) {
    introContainer.classList.remove('fade-in');
    sat.style.opacity = 0;
    deskStand.style.opacity = 1;
  } else if (id == 1) {
    aboutContainer.classList.remove('pop-in');
    aboutTitle.classList.remove('pop-in_title');
    aboutContent.classList.remove('pop-in_content');
  } else if (id == 2) {
    skillsContainer.classList.remove('fade-in');
    standAway.style.opacity = 0;
    standTo.style.opacity = 1;
  } else {
    projectsContainer.classList.remove('pop-in_projects');
    socialsContainer.classList.remove('pop-in_socials');
  }
  ++id;
  if (id == 4) {
    id = 0;
  }
  console.log(id);
}

introContainer.addEventListener('transitionend', function() {
  if (id == 0) {
    clickMain.style.zIndex = 1;
  }
  if (id == 1) {
    desk.style.opacity = 1;
    walk.classList.add('step-back');
  }
})

walk.addEventListener('transitionstart', function() {
  if (id == 1) {
    deskStand.style.opacity = 0;
    walk.style.opacity = 1;
    bookshelf.style.opacity = 1;
    bookshelf.classList.add('slide-in');
    desk.classList.add('slide-out');
  }
})

walk.addEventListener('transitionend', function() {
  walk.style.opacity = 0;
})


desk.addEventListener('animationend', function() {
  if (id == 1) {
    desk.style.opacity = 0;
    desk.classList.remove('slide-out');
  }
  if (id == 3) {
    walkBook.style.opacity = 0;
    desk.style.opacity = 0;
    deskSit.style.opacity = 1;
    projectsContainer.classList.add('pop-in_projects');
    socialsContainer.classList.add('pop-in_socials');
  }
})



bookshelf.addEventListener('animationend', function() {
  if (id == 1) {
    snatchBook.style.opacity = 1;
    walk.style.opacity = 0;
    bookshelf.style.opacity = 0;
    aboutContainer.classList.add('pop-in');
    aboutTitle.classList.add('pop-in_title');
    aboutContent.classList.add('pop-in_content');
  }
})

aboutContainer.addEventListener('transitionstart', function() {
  if (id == 1) {
    aboutContainer.style.opacity = 1;
  }
})

aboutContainer.addEventListener('transitionend', function() {
  if (id == 1) {
    clickMain.style.zIndex = 1;
  }
  if (id == 2) {
    aboutContainer.style.opacity = 0;
    snatchBook.style.opacity = 0;
    closeBook.style.opacity = 1;
    walkBook.classList.remove('step-back');
    walk.classList.remove('step-back');
  }
})

walkBook.addEventListener('transitionstart', function() {
  if (id == 2) {
    closeBook.style.opacity = 0;
    walkBook.style.opacity = 1;
    bookshelfNobook.style.opacity = 1;
    bookshelfNobook.classList.add('slide-out');
  }
})

bookshelfNobook.addEventListener('animationend', function() {
  if (id == 2) {
    bookshelfNobook.style.opacity = 0;
    walkBook.style.opacity = 0;
    standAway.style.opacity = 1;
    skillsContainer.classList.add('fade-in');
  }
})

skillsContainer.addEventListener('transitionend', function() {
  if (id == 2) {
    clickMain.style.zIndex = 1;
  }
  if (id == 3) {
    standTo.style.opacity = 0;
    walkBook.style.opacity = 1;
    desk.style.opacity = 1;
    desk.style.marginRight = '0%';
    desk.classList.add('slide-in');
  }
})


projectsContainer.addEventListener('transitionstart', function() {
  if (id == 3) {
    projectsContainer.style.opacity = 1;
    socialsContainer.style.opacity = 1;
  }
})

projectsContainer.addEventListener('transitionend', function() {
  if (id == 3) {
    clickMain.style.zIndex = 1;
  }
  if (id == 0) {
    projectsContainer.style.opacity = 0;
    socialsContainer.style.opacity = 0;
    deskSit.classList.add('to-start');
  }
})

deskSit.addEventListener('animationend', function() {
  if (id == 0) {
    deskSit.style.opacity = 0;
    desk.style.marginRight = '55%';
    desk.classList.remove('slide-in');
    sat.style.opacity = 1;
    introContainer.classList.add('fade-in');

    // Reset
    walkBook.classList.add('step-back');
    bookshelf.classList.remove('slide-in');
    bookshelfNobook.classList.remove('slide-out');
    deskSit.classList.remove('to-start');
    restartGif();
  }
})


