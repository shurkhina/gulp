// faq
if(document.querySelector('.faq__item')){
  let faqs = document.querySelectorAll('.faq__item');

      faqs.forEach(el => {
        let heading = el.querySelector('.faq-heading');

            heading.addEventListener('click', () => {
              if(el.classList.contains('open')){
                heading.setAttribute('aria-expanded', false);
              } else {
                heading.setAttribute('aria-expanded', true);
              }

              el.classList.toggle('open');
            });
      });
}