var ul = $('<ul/>').appendTo('body');
for(var i=1;i<20;i++)
    ul.append($('<li />').text('list item #' + i));

	 function fadeIn(i,elements,duration,callback){
		     if(i >= elements.length)
				          typeof callback == 'function' && callback();
			      else
						        elements.eq(i).fadeIn(duration,function(){
										             fadeIn(i+1,elements,duration,callback);
														         });        
	 }

fadeIn(0,ul.find('li'),100,function(){console.log("animation finished!");});
