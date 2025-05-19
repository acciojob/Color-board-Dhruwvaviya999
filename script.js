//your JS code here. If required.
const mainContainer = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
	mainContainer.innerHTML += `
		<div class="square"></div>
	`;
}