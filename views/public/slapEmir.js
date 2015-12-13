
$( document ).ready(function() {
var soundEffect = new Audio("slap.wav");
		
$("#actionArea").on({
	mouseenter: function(){

		//(new Audio()).canPlayType("audio/ogg; codecs=vorbis");
	},
	 mouseleave: function() {
         $("#actionArea").stop();

     }
});
var xCoor,yCoor;
var myVar;

$("#actionArea").mousemove(function(event){
  xCoor = event.pageX;
  yCoor = event.pageY;

	$("face").mouseover(function(event){
	
	});

	$("#counter").text(event.pageX + "," + event.pageY);
});

	var album = ["emirGidikli.png","uzgunEmir.png","eeeDil3.png","xxEmir.png"];
	var photoNum=0;

	$("#faceLocation").mousedown(function(){
		alert("sss");
	});

	$("#face").mouseover(function(){



		var picName = "url(public/css/"+album[photoNum]+")";
		console.log(picName);
		photoNum++;
		if(photoNum>=album.length){
			photoNum=0;
		}
		
		$(this).css("content",picName);
		soundEffect.play();
	});

});





