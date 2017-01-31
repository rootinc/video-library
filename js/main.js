 

$( window ).load(function() {

	$.getJSON( "/js/data.json", function( data ) {
	  
	  $.each( data, function( key, val ) {
	   var item = "<div id='" + key + "' class='video'><img class='thumbnail' src='" + val.thumbnail + "'/><h1>" + val.label + "</h1></div>" ;
	    $('.container').append(item);
	  });
	});
});
