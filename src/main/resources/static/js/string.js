String.format = function (text) {
	if (arguments.length <= 1) {
		return text;
	}

	var tokenCount = arguments.length - 2;
	for (var token = 0; token <= tokenCount; token++) {
		text = text.replace(new RegExp("\\{" + token + "\\}", "gi"),
                                                arguments[token + 1]);
	}
	return text;
};

String.prototype.trimStart = function (c) {
	if (this.length == 0)
		return this;
	c = c ? c : ' ';
	var i = 0;
	for (; this.charAt(i) == c && i < this.length; i++);
	return this.substring(i);
};

String.prototype.trimEnd = function (c) {
	c = c ? c : ' ';
	var i = this.length - 1;
	for (; i >= 0 && this.charAt(i) == c; i--);
	return this.substring(0, i + 1);
};

String.prototype.trim = function (c) {
	return this.trimStart(c).trimEnd(c);
};