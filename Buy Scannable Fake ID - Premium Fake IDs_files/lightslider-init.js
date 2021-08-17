jQuery(document).ready(function($){
  $('.image-gallery').lightSlider({ 
		gallery:true, 
		item:1, 
		auto:false, 
		loop:true, 
		thumbItem: 6,
	});
	
	$(function() {
  $('.zoom-image').each(function(){
    var originalImagePath = $(this).find('img').data('original-image');
    $(this).zoom({
      url: originalImagePath,
      magnify: 1
    });
  });
}); 
});

