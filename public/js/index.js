var menuToggle = document.getElementById('menu-toggle');
var nav = document.getElementById('nav');
var filterToggle = document.getElementById('filter');
var filters = document.querySelectorAll('.filter-item');
var closeFilters = document.getElementById('closeFilters');

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
  console.log('click');
  console.log(filterToggle.parentNode);
  filterToggle.parentNode.classList.remove('filter-toggled');
})

// Throw some spotlight on clicked course types
filters.forEach(function(f) {
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
    if (document.querySelectorAll('.' + this.id).length == 0) {
      alert('Geen vakken gevonden met dit type')
    }
  })
})
