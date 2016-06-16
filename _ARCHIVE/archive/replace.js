$( document ).ready(function() {

$('#submit').click(function(){
	var original = $('#replace').val();
	
	
	if(original.match(/[’\‘\£\…\“\”\\–\<\>]/g)) {
		// code to be executed if condition is true
		var countTotal = original.match(/[’\‘\£\…\“\”\\–\<\>]/g).length;
		var converted = original.replace(/[’\‘]/g, "'" ).replace( /£/g, "&pound;" ).replace( /…/g, "..." ).replace( /–/g, "-" ).replace( /[“\”]/g, '"' ).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(//g," ");
		$('#result').text(converted);
		$('#countTotal').css('color', 'red').text(countTotal);
		
		var Lsymbol = original.match(//g).length;
		$('#Lsymbol').css('color', 'red').text(Lsymbol);
	} 
	else {
		// code to be executed if condition is false
		$('#result').text(original);
		$('#countTotal').css('color', 'green').text('0');
		$('#Lsymbol').css('color', 'green').text('0');
	}
	
});

$('#reset').click(function(){
	location.reload();
});

});



