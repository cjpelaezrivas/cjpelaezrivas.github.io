
function updateImage(idImage) {
	var img = document.getElementById(idImage);

	if(!img) {
		return;
	}

	var src = img.src;
	var index = src.indexOf("?");

	if(index != -1) {
		src = src.substring(0, index);
	}

	var time = new Date().getTime();

	img.src = src + "?t=" + time;

	console.log(img.src)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
