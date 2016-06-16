$( document ).ready(function() {

$('#submit').click(function(){
	var original = $('#replace').val();
	var countTotal = original.match(/[’\£\…\“\”\\–]/g).length;
	var converted = original.replace(/’/g, "'" ).replace( /£/g, "&pound;" ).replace( /…/g, "..." ).replace( /–/g, "-" ).replace( /[“\”]/g, '"' ).replace(/\n/g,"<br>").replace(//g," ");
	
	$('#result').text(converted);
	$('#countTotal').text(countTotal);
	
	
	var Lsymbol = original.match(//g).length;
	$('#Lsymbol').text(Lsymbol);
});

$('#reset').click(function(){
	location.reload();
});

});



