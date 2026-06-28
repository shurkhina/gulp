// styling select 
function updateValue(select, index) {
    let nativeWidget = select.previousElementSibling,
        value = select.querySelector('.value'),
        optionList = select.querySelectorAll('.option');

    document.querySelectorAll('.option').forEach((other) => {
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
  
document.querySelectorAll('.choice').forEach((el) => {
  	let formSelect = el.querySelector('.select'),
      	formSelectValue = formSelect.querySelector('.value');
  
      	formSelectValue.addEventListener('click', () =>{
          // formSelect.classList.toggle('active');

          	document.querySelectorAll('.choice').forEach((el) => {
            	el.classList.add('highlight');
            	el.classList.remove('active');
          	});

          	el.classList.add('active');
      	});

		el.querySelectorAll('.option').forEach((option) => {
			option.addEventListener('click', () => {
				formSelect.classList.remove('active');
			});
		});
});
  
// Event binding //
window.addEventListener('load', () => {

    document.querySelectorAll('.select').forEach((select) => {
      let  selectedIndex = getIndex(select);
  
        select.tabIndex = 0;
        select.previousElementSibling.tabIndex = -1;
  
        updateValue(select, selectedIndex);

        select.querySelectorAll('.option').forEach((option, index) => {
          	option.addEventListener('click', (event) => {
            	updateValue(select, index);
          	});
        });
  
        select.addEventListener('keyup', (event) => {
          	let length = select.querySelectorAll('.option').length,
          		index  = getIndex(select);
    
          		if (event.keyCode === 40 && index < length - 1) { index++; }
          		if (event.keyCode === 38 && index > 0) { index--; }
    
          		updateValue(select, index);
        });
    });

});