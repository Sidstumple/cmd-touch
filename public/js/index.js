(function(){
  "use strict";
  var config = {
    menuToggle: document.getElementById('menu-toggle'),
    nav: document.getElementById('nav'),
    filterContainer: document.getElementById('filter-container'),
    filterToggle: document.getElementById('filter'),
    filters: document.querySelectorAll('.filter-item'),
    closeFilters: document.getElementById('closeFilters'),
    navIdentifier: document.getElementById('nav-identifier'),
    navItems: document.querySelectorAll('.identify')
  }

  var app = {
    init: function(){
      serviceWorker.init();
      if (config.filterContainer) {
        filter.init();
      }
      if (config.nav) {
        nav.init();
      }
    }
  }

  var serviceWorker = {
    init: function(){
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
    }
  }

  var filter = {
    init: function(){
      // Show filter only if there is javascript
      config.filterContainer.classList.remove('hide');

      config.filterToggle.addEventListener('click', function(e){
        if (config.filterToggle.parentNode.parentNode.classList.contains('filter-toggled')) {
          config.filterToggle.parentNode.parentNode.classList.remove('filter-toggled');
        } else {
          config.filterToggle.parentNode.parentNode.classList.add('filter-toggled');
        }
      })

      config.closeFilters.addEventListener('click', function(e) {
        config.filterToggle.parentNode.parentNode.classList.remove('filter-toggled');
      })
      filter.spotlight();
    },
    spotlight: function(){
      config.filters.forEach(function(f) {
        if (document.querySelectorAll('.' + f.id).length == 0) {
          document.getElementById(f.id).classList.add('hide');
        }
        document.getElementById(f.id).addEventListener('click', function(e) {
          config.filters.forEach(function(fe) {
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
    }
  }

  var nav = {
    init: function(){
      // Let the user know on which page they are
      config.navItems.forEach(function(item) {
        if (config.navIdentifier.innerHTML == item.firstElementChild.children[1].innerHTML) {
          item.classList.add('active');
        }
      })

      // Show mobile menu when clicked
      config.menuToggle.addEventListener('click', function(e) {
        if (config.nav.classList.contains('mobile-hide')) {
          config.nav.classList.remove('mobile-hide');
        } else {
          config.nav.classList.add('mobile-hide')
        }
      })
    }
  }

  app.init();
}())
