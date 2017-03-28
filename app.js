var colors = ['#6CAEB0', '#CF9973', '#FA834F', '#e38e85', '#285687', '#812847', '#B82F2A'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
var firstNameLetter = document.querySelectorAll('.letter');

for (var i= 0; i < firstNameLetter.length; i++) {
	firstNameLetter[i].style.color = random_color;
}
