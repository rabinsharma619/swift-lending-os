/* Swift Lending OS pitch site — nav: mobile toggle + active-page marking */
(function () {
  function init() {
    var toggle = document.querySelector('.nav__toggle');
    var links = document.querySelector('.nav__links');

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Mark the current page in the nav. Works from file:// and http://.
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var anchors = document.querySelectorAll('.nav__links a');
    for (var i = 0; i < anchors.length; i++) {
      var href = anchors[i].getAttribute('href');
      if (href === path) {
        anchors[i].classList.add('is-active');
        anchors[i].setAttribute('aria-current', 'page');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
