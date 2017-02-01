 

$( window ).load(function() {

	$.getJSON( "/js/data.json", function( data ) {
	  
		$.each( data, function( key, val ) {
			var item = "<div id='" + key + "' class='video'><img class='thumbnail' src='" + val.thumbnail + "'/><h1>" + val.label + "</h1></div>" ;
			$('.container').append(item);

			$(".container").on("click", "#" + key, function() {
				var views = localStorage.getItem(val.label);
				if(views === null || views === "NaN"){
					views = 1
				}
				else{
					views++;
				}
				localStorage.setItem(val.label, views);

				var vid = "<div class='videoContainer animateIn'><video class='videoplayer' autoplay><source src='" + val.video +"' type='video/mp4'></video></div>";
				$('.video-library').append(vid);				
			});

		});

		$(".video-library").on("click", ".videoContainer", function() {
			closeVideoContainer();
		});

		$(".video-library").on("ended", ".videoContainer.videoplayer", function(){
			closeVideoContainer();
		});

	});
});

 function closeVideoContainer() {
 	$(".videoContainer").removeClass("animateIn");
	$(".videoContainer").addClass("animateOut");

	$(".videoContainer").on('webkitAnimationEnd oanimationend msAnimationEnd animationend',  function(e) {
		$(".videoContainer").remove();
	});
 }

