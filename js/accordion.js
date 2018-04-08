var $titles = $('.title');
var $contents = $('.content');
var $lastTitleClicked = null;


$titles.on('click', function(){
	
	var $currentTitle = $(this);
	var $currentContent = $currentTitle.next();


	$contents.slideUp();
	if(!$currentContent.is(":visible"))
		{
			$currentContent.slideDown();
		}
});


