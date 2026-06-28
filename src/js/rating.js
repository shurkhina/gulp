// rating
if(document.querySelector('.rating')){
    let rating = document.querySelectorAll('.rating');

        rating.forEach(el => {
            let ratingOverAll = el.querySelector('.rating-overall');

                if(ratingOverAll){
                    let ratingBtn = el.querySelector('.rating-btn'),
                        ratingClose = el.querySelector('.close');

                        ratingBtn.addEventListener('click', () => {
                            if(headerBonus.classList.contains('open')){
                                ratingBtn.setAttribute('aria-expanded', false);
                            } else {
                                ratingBtn.setAttribute('aria-expanded', true);
                            }

                            el.classList.toggle('open');
                        });

                        ratingClose.addEventListener('click', () => {
                            ratingBtn.setAttribute('aria-expanded', false);

                            el.classList.toggle('open');
                        });
                }
        });
}

if(document.querySelector('.rating-svg')){
	let ratingSvg = document.querySelectorAll('.rating-svg'),
        ratingOverall = document.querySelectorAll('.rating-overall');

        ratingOverall.forEach(el => {
            let ratingOverallText = el.querySelector('.rating-procent'),
                ratingResultAmount = document.querySelectorAll('.rating-line-total'),
                retingResultTotal = (Array.from(ratingResultAmount).map(item => +item.innerHTML.replace('.', '')).reduce((sum, current) => sum + current) / ratingResultAmount.length).toFixed(),
                ratingTextResult = retingResultTotal / 10;

                if(ratingOverallText){
                    ratingOverallText.innerHTML = ratingTextResult;
                }

        });

        ratingSvg.forEach(el => {
            let ratingProcent = el.querySelector('.rating-procent'),
                text = ratingProcent.innerHTML,
                textMath = Math.floor(parseInt(text)) + '0',
                circle = el.querySelector('.circle');

                if(textMath <= 40){
                    el.classList.remove('great');
                    el.classList.remove('good');
                    el.classList.add('bad');
                    circle.setAttribute('stroke-dasharray', textMath + ', 100');
                } else if(textMath >= 70){
                    el.classList.remove('bad');
                    el.classList.remove('good');
                    el.classList.add('great');
                    circle.setAttribute('stroke-dasharray', textMath + ', 100');
                } else if (textMath >= 41){
                    el.classList.remove('bad');
                    el.classList.remove('great');
                    el.classList.add('good');
                    circle.setAttribute('stroke-dasharray', textMath + ', 100');
                }
        });
}

if(document.querySelector('.rating-line')){
    let line = document.querySelectorAll('.rating-line');

    line.forEach(el => {
        if(el.querySelector('.rating-line-total')){
            let lineTotal = el.querySelector('.rating-line-total').innerHTML,
                lineText = lineTotal.replace('.', ''),
                lineProgress = el.querySelector('.rating-range');

                lineProgress.style.width = lineText + '%';

                if(lineText <= 40){
                    lineProgress.classList.add('bad');
                    lineProgress.classList.remove('great');
                    lineProgress.classList.remove('good');
                } else if(lineText >= 70){
                    lineProgress.classList.remove('bad');
                    lineProgress.classList.remove('good');
                    lineProgress.classList.add('great');
                } else if (lineText >= 41){
                    lineProgress.classList.remove('bad');
                    lineProgress.classList.add('good');
                    lineProgress.classList.remove('great');
                }
        }
    });
}

// rating start
if(document.querySelector('.rating-star')){
    let rating = document.querySelectorAll('.rating-star');
    

        rating.forEach(el => {
            if(el.querySelector('.rating-total-span')){
                let ratingText = el.querySelector('.rating-total-span').innerHTML,
                    ratingSpan = el.querySelector('.rating-range'),
                    ratingTotal = (ratingText.replace(/[./,]/g, "")) * 2;

                ratingSpan.style.width = ratingTotal + '%';
            }
        });
}