let currentLength = 0;
let count = 0;
let images = [];
let imageDL, currentDL;

getFileName = (num = count) => (num < 100 ? "0" : "") + (num < 10 ? "0" : "") + num + ".png";

const nPages = document.querySelectorAll(".page").length;

let interval = setInterval(() => {
	nodes = document.querySelectorAll("canvas");
	nodes.forEach((node, index) => {
		if (images.length <= index || index >= nodes.length -2) {
			const uri = node.toDataURL();
			images[parseInt(node.id.replace(/\D/g,''), 10)] = uri;
		}
	});
	nodes[nodes.length - 1].scrollIntoView({behavior: "instant"});
	
	currentLength = Object.keys(images).length;
	console.log(nPages, currentLength);
	
	if (nPages <= currentLength) {
		clearInterval(interval);
		currentDL = 0;
		imageDL = setInterval(downloadAnImage, 1000);
	}
}, 1000);

downloadAnImage = () => {
	if (currentDL >= images.length) {
		clearInterval(imageDL);
		return;
	}
	link = document.createElement("a");
	link.download = getFileName(currentDL);
	link.href = images[currentDL];
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
	delete images[currentDL];
	currentDL++;
}

downloadImages = () => {
	images.forEach((image, index) => {
		link = document.createElement("a");
		link.download = getFileName(index);
		link.href = image;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		delete link;
	})	
}
