const accordion = document.getElementsByClassName('accordion-item-container');

for(let i = 0; i < accordion.length; i++ ) {
	accordion[i].addEventListener('click', function(){
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