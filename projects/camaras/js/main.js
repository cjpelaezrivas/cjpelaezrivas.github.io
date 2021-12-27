
function updateImage(idImage) {
	var img = document.getElementById(idImage);

	if(!img) {
		return;
	}

	if(!checkIsVisibleInScreen(img)) {
		return;
	}

	var src = img.src;
	var index = src.indexOf("?");

	if(index != -1) {
		src = src.substring(0, index);
	}

	var time = new Date().getTime();

	img.src = src + "?dummy=" + time;
}

function checkIsVisibleInScreen(img) {

	var rect = img.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
