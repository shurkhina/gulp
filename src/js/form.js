// form
if(document.querySelector('.form-block')){
    let formBlock = document.querySelectorAll('.form-block');

        formBlock.forEach(el => {
            let formBtn = el.querySelector('.btn'),
                form = el.querySelector('form'),
                success = el.querySelector('.success');

                formBtn.addEventListener('click', () => {
                    form.style.display = 'none';
                    success.style.display = 'block';
                });
        });
}