// // Jquery style
// let $q = function(selector) {
//   let document = window.document;
//   let el = document.querySelector(selector);
//   return el != null ? el : false;
// } 

(function currentYear() {
  let year = new Date().getFullYear();
  document.querySelector('.current__year').innerHTML = year;
})();

(function toggleMenu() {
  document.querySelector('.menu__toggle').addEventListener('click', function () {
    let menu = document.querySelector('.menu__drop');
    let classes = menu.classList;
    let x = 'menu__open';
    let y = 'menu__hide'

    let open = classes.contains(x) ? true : false;
    let closed = (classes.contains(y) || open === false) ? true : false;
    if (open) {
      classes.add(y)
      classes.remove(x);
    }
    if (closed) {
      classes.add(x)
      classes.remove(y);
    }

  });
})();