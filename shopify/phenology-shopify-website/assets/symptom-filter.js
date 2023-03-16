
(function() {
	var show = function (menu, pressedButton, notPressedButton) {
		menu.style.display = 'flex';
		pressedButton.style.display = 'flex';
		notPressedButton.style.display = 'none';
	};

	var hide = function (menu, pressedButton, notPressedButton) {
		menu.style.display = 'none';
		pressedButton.style.display = 'none';
		notPressedButton.style.display = 'flex';
	};

	var toggle = function (elem) {

		var pressedButton = document.querySelector(".button-pressed");
		var notPressedButton = document.querySelector(".button-not-pressed");

		if (window.getComputedStyle(elem).display === 'flex') {
			hide(elem, pressedButton, notPressedButton);
			return;
		}

		show(elem, pressedButton, notPressedButton);

	};

	document.addEventListener('click', function (event) {

		if (!event.target.classList.contains("symptom-filter__main-button")){
			return;
		} 

		// Prevent default link behavior
		event.preventDefault();

		// Get the content
		var content = document.querySelector(".symptom-filter__menu-container");
		if (!content) {
			return
		};

		toggle(content);

	}, false);
})();