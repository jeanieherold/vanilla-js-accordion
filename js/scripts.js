
const accordBtns = document.querySelectorAll('.accordion-btn');

accordBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const siblings = getSiblings(button.parentElement);
        siblings.forEach((sibling) => {
            if (sibling.classList.contains('active')) {
                sibling.classList.remove('active');
            }
        })
        button.parentElement.classList.toggle('active');      
    });
});

//find all siblings of an element
var getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};