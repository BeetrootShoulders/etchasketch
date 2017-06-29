$( document ).ready(function() {
    for(var i = 0; i < 256; i++){
    	$('<div class="myDivs"></div>').appendTo('#container');
    }
});

$('.myDivs').mouseenter(function(){
	$(this).addClass('black');
});
