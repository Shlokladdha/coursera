function upDate(previewPic){
	  document.getElementById("image").style.background=previewPic.src;
    document.getElementById("image").innerHTML=.previewPic.alt;
}

function unDo(){
		document.getElementById("image").style.background=#8e68ff;
		document.getElementById("image").innerHTML="Hover over an image below to display here.";
}
