// JavaScript Document
//var strText =
//"’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’’";

/*var strReplaceAll = strText;
var intIndexOfMatch = strReplaceAll.indexOf( "’" );
 
// Loop over the string value replacing out each matching
// substring.
while (intIndexOfMatch != -1){
// Relace out the current instance.
strReplaceAll = strReplaceAll.replace( "’", "'" )
 
// Get the index of any next matching substring.
intIndexOfMatch = strReplaceAll.indexOf( "’" );
};*/
 
//alert( strReplaceAll );
//alert( strText );



$( document ).ready(function() {

$('#submit').click(function(){
	var original = $('#replace').val();
	/*var count = original.indexOf('#') >= 0;
	alert(count);*/
	
	/*var count = original.match(/#/g);
	alert(count);*/
	
	/*var count = original.match(/#/g).length;
	
	$('#replaceCount').text(count);*/
	
	
	/*var count = original.match(/#/g).length;
	
	$(function(){
		if (original.match(/#/g).length)
		  {
			$('#replaceCount').text(count)
		  }
		else
		  {
		  	$('#replaceCount').text('No characters to convert!')
		  }
	});*/
	
	/*original.val(function(){
		if ($(this).indexOf('#', 'L') == -1)
		  {
		  	alert($(this).length())
		  }
		else
		  {
		  
		  }
	});*/
	
	//var converted = original.replace( /#|’/g, "'" );
	var converted = original.replace( /’/g, "'" ).replace( /#/g, "NUMBER" ).replace( /£/g, " $pound;" ).replace( /…/g, "..." ).replace( /–/g, "-" ).replace( /“/g, '"' ).replace( /”/g, '"' ).replace(/\n/g,"<br>").replace(//g," ");
	
	$('#result').html(converted);
	
	
	
	var count = original.match(/#/g).length;
	
	$('#replaceCount').text(count);
	
		
});

});



