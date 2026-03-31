// makes text bigger
function makeBigger() {
	document.getElementById("myText").style.fontSize = "24pt";
}

// changes styling based on which radio button is picked
function applyStyle() {
	var textBox = document.getElementById("myText");

	if (document.getElementById("fancyShmancy").checked) {
		textBox.style.fontWeight = "bold";
		textBox.style.color = "blue";
		textBox.style.textDecoration = "underline";
	} else {
		// reset back to normal
		textBox.style.fontWeight = "normal";
		textBox.style.color = "";
		textBox.style.textDecoration = "none";
	}
}

// uppercases the text and adds -MOO to the end of each sentence
function mooify() {
	var textBox = document.getElementById("myText");
	var txt = textBox.value.toUpperCase();

	// split on periods, add -MOO to last word of each sentence
	var sentences = txt.split(".");
	for (var i = 0; i < sentences.length; i++) {
		var words = sentences[i].split(" ");
		words[words.length - 1] = words[words.length - 1] + "-MOO";
		sentences[i] = words.join(" ");
	}

	textBox.value = sentences.join(".");
}
