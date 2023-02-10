if(jQuery(this).width()>=960)
{
	var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
	
	jQuery(".horizontal_gallery").mousewheel(function(event) {
	    if(navigator.userAgent.search("MSIE") >= 0 || isIE11)
	    {
	    	this.scrollLeft -= (event.deltaY * 40);
	    }
	    else
	    {
	    	this.scrollLeft -= (event.deltaY * 3);
	    }
	    event.preventDefault();
	});
}

jQuery(window).resize(function(){
	if(jQuery(this).width()>=960)
	{
		var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
	
		jQuery(".horizontal_gallery").mousewheel(function(event) {
		    if(navigator.userAgent.search("MSIE") >= 0 || isIE11)
		    {
		    	this.scrollLeft -= (event.deltaY * 40);
		    }
		    else
		    {
		    	this.scrollLeft -= (event.deltaY * 3);
		    }
		    event.preventDefault();
		});
	}
});