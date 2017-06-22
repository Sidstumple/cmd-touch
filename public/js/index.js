var menuToggle = document.getElementById('menu-toggle');
var nav = document.getElementById('nav');
var filters = document.querySelectorAll('.filter-item');

menuToggle.addEventListener('click', function(e) {
  if (nav.classList.contains('mobile-hide')) {
    nav.classList.remove('mobile-hide');
  } else {
    nav.classList.add('mobile-hide')
  }
  console.log('click');
})

filters.forEach(function(f) {
  document.getElementById(f.id).addEventListener('click', function(e) {
    document.querySelectorAll('.course').forEach(function(vak) {
      console.log(vak);
      vak.classList.remove('spotlight');
    })
    document.querySelectorAll('.'+this.id).forEach(function(vak) {
      vak.parentNode.classList.add('spotlight');
    })
  })
})
