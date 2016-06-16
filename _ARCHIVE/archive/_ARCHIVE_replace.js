$( document ).ready(function() {

$('#submit').click(function(){
	var original = $('#replace').val();

	//var converted = original.replace( /#|’/g, "'" );
	/*var converted = original.replace( /’/g, "'" ).replace( /#/g, "NUMBER" ).replace( /£/g, " $pound;" ).replace( /…/g, "..." ).replace( /–/g, "-" ).replace( /“/g, '"' ).replace( /”/g, '"' ).replace(/\n/g,"<br>").replace(//g," ");*/
	
	var countTotal = original.match(/[’\£\…\“\”\\–]/g).length;

	var converted = original.replace(/’/g, "'" ).replace( /£/g, " $pound;" ).replace( /…/g, "..." ).replace( /–/g, "-" ).replace( /[“\”]/g, '"' ).replace(/\n/g,"<br>").replace(//g," ");
	
	/*.replace(/</g,"&lt;").replace(/>/g,"&gt;")*/
	
	$('#result').html(converted);
	
	
	$('#countTotal').text(countTotal);
	
	
	var Lsymbol = original.match(//g).length;
	$('#Lsymbol').text(Lsymbol);
	
});


$('#reset').click(function(){
	/*$('#result').text('');
	$('#replace').val('');
	$('#countTotal').text('0');*/
	location.reload();
});

});



