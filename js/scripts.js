//add event listener to accordion items
const accordionSlides = document.getElementsByClassName('accordion-item-container');

for(let i = 0; i < accordionSlides.length; i++ ) {
	accordionSlides[i].addEventListener('click', function(){
		//remove active class from siblings
		var sibs = getSiblings(accordionSlides[i])
		sibs.forEach((sib) => {
			sib.classList.remove('active');
		});

		//toggle active class to slide clicked
		this.classList.toggle('active');
	})
}

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