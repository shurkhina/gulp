// navigation mob
if(document.querySelector('.navigation')){
	let menuMob = document.querySelector('.navigation'),
		btnMenu = document.querySelector('.hamburger'),
		btnClose = menuMob.querySelector('.close'),
		bgMenu = menuMob.querySelector('.navigation-bg'),
		mobNavA = menuMob.querySelectorAll('a'),
		mobItem = menuMob.querySelectorAll('.menu-arr'),
		body = document.body;

		btnMenu.addEventListener('click', () => {
			if(btnMenu.classList.contains('is_active')){
				btnMenu.setAttribute('aria-expanded', false);
			} else {
				btnMenu.setAttribute('aria-expanded', true);
			}
			menuMob.classList.toggle('open');
			body.classList.toggle('body_scroll');
		})

		mobItem.forEach(el => {
			let menuBtn = el.querySelector('.menu-btn');

				menuBtn.addEventListener('click', () => {
					if(el.classList.contains('open')){
						menuBtn.setAttribute('aria-expanded', false);
					} else {
						menuBtn.setAttribute('aria-expanded', true);
					}

					el.classList.toggle('open');
				});
		});

		btnClose.addEventListener('click', () => {
			menuMob.classList.remove('open');
			body.classList.remove('body_scroll');
			btnMenu.setAttribute('aria-expanded', false);
		});

		bgMenu.addEventListener('click', () => {
			menuMob.classList.remove('open');
			body.classList.remove('body_scroll');
			btnMenu.setAttribute('aria-expanded', false);
		});

		mobNavA.forEach(el => {
			el.addEventListener('click', () => {
				menuMob.classList.remove('open');
				body.classList.remove('body_scroll');
				btnMenu.setAttribute('aria-expanded', false);
			});
		});

}