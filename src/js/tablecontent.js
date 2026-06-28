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