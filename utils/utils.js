exports.generateRandomUsername = () => {
	var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var result = "";
	for (var i = 0; i < 5; i++) {
		result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	}
	return `RandomUserName_${result}`;
};

exports.generateRandomScore = () => {
	return Math.floor(Math.random() * 1000) + 1;
};
