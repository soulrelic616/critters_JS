$( document ).ready(function() {
	


$('#submit').click(function(){
	
	
	var original = $('#replace').val();
	
	
    if(original.match(/[’\‘\£\…\“\”\\–\<\>]/g)) {
		// code to be executed if condition is true
        var countTotal = original.match(/[’\‘\£\…\“\”\\–\<\>\&]/g).length;
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

$('button#br').on('click', function () {
    var lines = $('#result').val().split(/\n/);
    for (var i = 0, z = lines.length; i < z; i++) {
        if (!lines[i]) lines[i] = "<br/>"  + '\n' + "<br/>";
    }
    $('#result').val(lines.join('\n'));
	
});


$('#reset').click(function(){
	location.reload();
});


//code to auto select textbox contents
	 var textBox = document.getElementById("result");
    textBox.onfocus = function() {
        textBox.select();

        // Work around Chrome's little problem
        textBox.onmouseup = function() {
            // Prevent further mouseup intervention
            textBox.onmouseup = null;
            return false;
        };
    };


});



