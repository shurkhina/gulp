
// copy bonus
if(document.querySelector('.copy')){
    let copy = document.querySelectorAll('.copy');

        copy.forEach((el) => {
            let copyCode = el.querySelector('.copy-code'),
                copyBtn = el.querySelector('.btn');

                copyBtn.addEventListener('click', function () {
                    el.classList.add('active');
                    copyCode.select();
                    document.execCommand('copy');
                });
        });
}

// copy code
if (document.querySelector('.code')) {
    let codeCopy = document.querySelector('.code-copy'),
        copyText = document.querySelector('code').textContent;

    codeCopy.addEventListener('click', function () {
        navigator.clipboard.writeText(copyText);
        this.setAttribute('aria-expanded', true);
        this.classList.add('active');
    });
}
// form
if(document.querySelector('.form-block')){
    let formBlock = document.querySelectorAll('.form-block');

        formBlock.forEach((el) => {
            let formBtn = el.querySelector('.btn'),
                form = el.querySelector('form'),
                success = el.querySelector('.success');

                formBtn.addEventListener('click', function(){
                    form.style.display = 'none';
                    success.style.display = 'block';
                });
        });
}
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

		mobNavA.forEach((el) => {
			el.addEventListener('click', () => {
				menuMob.classList.remove('open');
				body.classList.remove('body_scroll');
				btnMenu.setAttribute('aria-expanded', false);
			});
		});

}
// rating
let rating = document.getElementsByClassName('rating')[0];

if(rating){
    [...document.getElementsByClassName('rating')].forEach((el) => {
        let ratingSpan = el.getElementsByClassName('rating-span')[0];
       
        if(el.getElementsByClassName('rating-rating')[0]){
            let ratingText = el.getElementsByClassName('rating-text')[0].innerHTML,
                ratingTotal = (ratingText.replace(/[./,]/g, "")) * 2;

                ratingSpan.style.width = ratingTotal + '%';
        }
    });
}
// styling select 
function updateValue(select, index) {
    let nativeWidget = select.previousElementSibling,
        value = select.querySelector('.value'),
        optionList = select.querySelectorAll('.option');

    [...document.getElementsByClassName('option')].forEach((other) => {
      other.setAttribute('aria-selected', 'false');
    });
  
    optionList[index].setAttribute('aria-selected', 'true');
  
    nativeWidget.selectedIndex = index;
    value.textContent = optionList[index].textContent;
};
  
function getIndex(select) {
    let nativeWidget = select.previousElementSibling;
  
    return nativeWidget.selectedIndex;
};
  
[...document.getElementsByClassName('choice')].forEach((el) => {
    let formSelect = el.querySelector('.select'),
        langFlag = el.querySelector('.flag'),
        formSelectValue = formSelect.querySelector('.value');
    
        formSelectValue.addEventListener('click', () =>{
            formSelect.classList.toggle('active');
        });

        [...el.getElementsByClassName('option')].forEach((option) => {
            let optionFlag = option.querySelector('.option-flag');

            option.addEventListener('click', () => {
                formSelect.classList.remove('active');

                if(langFlag){
                  langFlag.src = optionFlag.src;
                }
            });
        });
});
  
// Event binding //
window.addEventListener('load', () => {

    [...document.getElementsByClassName('select')].forEach((select) => {
      let  selectedIndex = getIndex(select);
  
        select.tabIndex = 0;
        select.previousElementSibling.tabIndex = -1;
  
        updateValue(select, selectedIndex);

        [...select.getElementsByClassName('option')].forEach((option, index) => {
          option.addEventListener('click', (event) => {
            updateValue(select, index);
          });
        });
  
        select.addEventListener('keyup', (event) => {
          let length = [...select.getElementsByClassName('option')].length,
          index  = getIndex(select);
    
          if (event.keyCode === 40 && index < length - 1) { index++; }
          if (event.keyCode === 38 && index > 0) { index--; }
    
          updateValue(select, index);
        });
      });

  });
// info
if(document.querySelector('.tablecontent')){
    let tablecontent = document.querySelector('.tablecontent'),
        tablecontentBtn = tablecontent.querySelector('.tablecontent-btn');

            tablecontentBtn.addEventListener('click', () => {
                if(tablecontent.classList.contains('open')){
                    tablecontentBtn.setAttribute('aria-expanded', false);
                } else {
                    tablecontentBtn.setAttribute('aria-expanded', true);
                }

                tablecontent.classList.toggle('open');
            });
}
//# sourceMappingURL=../sourcemaps/js.js.map
