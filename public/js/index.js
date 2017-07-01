if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var menuToggle = document.getElementById('menu-toggle');
var nav = document.getElementById('nav');
var filterToggle = document.getElementById('filter');
var filters = document.querySelectorAll('.filter-item');
var closeFilters = document.getElementById('closeFilters');
var navIdentifier = document.getElementById('nav-identifier');
var navItems = document.querySelectorAll('.identify');

// Let the user know on which page they are
navItems.forEach(function(item) {
  // console.log();
  if (navIdentifier.innerHTML == item.firstElementChild.children[1].innerHTML) {
    item.classList.add('active');
  }
})

// Show menu when clicked
menuToggle.addEventListener('click', function(e) {
  if (nav.classList.contains('mobile-hide')) {
    nav.classList.remove('mobile-hide');
  } else {
    nav.classList.add('mobile-hide')
  }
})

filterToggle.addEventListener('click', function(e){
  if (filterToggle.parentNode.classList.contains('filter-toggled')) {
    filterToggle.parentNode.classList.remove('filter-toggled');
  } else {
    filterToggle.parentNode.classList.add('filter-toggled');
  }
})

closeFilters.addEventListener('click', function(e) {
  filterToggle.parentNode.classList.remove('filter-toggled');
})

// Throw some spotlight on clicked course types
filters.forEach(function(f) {
  if (document.querySelectorAll('.' + f.id).length == 0) {
    document.getElementById(f.id).classList.add('hide');
  }
  document.getElementById(f.id).addEventListener('click', function(e) {
    filters.forEach(function(fe) {
      document.getElementById(fe.id).classList.remove('filter-clicked');
    })
    document.getElementById(e.target.id).classList.add('filter-clicked');

    document.querySelectorAll('.course').forEach(function(vak) {
      vak.classList.remove('spotlight');
    })
    document.querySelectorAll('.' + this.id).forEach(function(vak) {
      vak.classList.add('spotlight');
    })
  })
})
