
$( document ).ready(function() {
var soundEffect = new Audio("/public/slap.wav");
		
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

	var album = [];
	var photoNum=0;

	$("#faceLocation").mousedown(function(){
		alert("sss");
	});

	$("#face").mouseover(function(){



		var picName = "url("+album[photoNum]+")";
		console.log(picName);
		photoNum++;
		if(photoNum>=album.length){
			photoNum=0;
		}
		
		$(this).css("content",picName);
		soundEffect.play();
	});

});





