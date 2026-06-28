// copy text
if (document.querySelector('.copy')) {
    let blockCopy = document.querySelectorAll('.copy');

        document.addEventListener('DOMContentLoaded', event => {

            blockCopy.forEach(el => {
                let copyInput = el.querySelector('.copy-input');

                    if(copyInput){
                       let inputValue = copyInput.value,
                            copyText = el.querySelector('.copy-text');

                        copyText.innerHTML = inputValue;

                        copyInput.addEventListener('click', e => {
                            e.stopPropagation()
                            copyInput.select();
                            el.classList.add('active');
                            document.execCommand('copy');

                            setTimeout(() => {
                                el.classList.remove('active');
                            }, 3000);
                        });
                    }
            });

       }); 
}