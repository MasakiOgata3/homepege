(function () {
  // Mobile nav toggle
  var hamburger = document.querySelector('.hamburger');
  var siteNav = document.querySelector('.site-nav');

  if (hamburger && siteNav) {
    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('is-open');
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
      });
    });
  }

  // Contact form — Formspree AJAX submission
  var form = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (form && formSuccess) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = '送信中...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.hidden = true;
            formSuccess.hidden = false;
          } else {
            alert('送信に失敗しました。しばらく経ってから再度お試しください。');
            btn.disabled = false;
            btn.textContent = '送信する';
          }
        })
        .catch(function () {
          alert('送信に失敗しました。しばらく経ってから再度お試しください。');
          btn.disabled = false;
          btn.textContent = '送信する';
        });
    });
  }
})();
