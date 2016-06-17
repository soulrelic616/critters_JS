$( document ).ready(function() {

var nextStage
    
function goneGizmo(){
    $('#top_banner .container, .counting_bad li').addClass('gizmo');
    $('.goneGood').html('...but they are good again!');
}

$('#submit').click(function(){
	
    $('#details').fadeIn('slow');
    
	var original = $('#replace').val();
    if(original.match(/[’\‘\£\…\“\”\\–\<\>]/g)) {
		// code to be executed if condition is true
        $('#details h1').text("Gremlins have been found in your text!");
        //hide bad gremlins container if they exist
        $('.gremlins_in').fadeOut('slow');
        $('.gizmos_out').fadeIn('slow');
        
        var countTotal = original.match(/[’\‘\£\…\“\”\\–\<\>\&]/g).length;
        var converted = original.replace(/[’\‘]/g, "'" ).replace( /£/g, "&pound;" ).replace( /…/g, "..." ).replace( /–/g, "-" ).replace( /[“\”]/g, '"' ).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(//g," ");
		$('#result').text(converted);
		$('#countTotal').text(countTotal);
		
		/*var Lsymbol = original.match(//g).length;
		$('#Lsymbol').text(Lsymbol);*/
        $('#details p').fadeIn('slow');
        
        var $GremlinCount;
        for (var i = 0; i < countTotal; i++) {
            $GremlinCount = $('<li/>').text(i);
            $('.counting_bad').append($GremlinCount);
        }
        
        nextStage = setTimeout(goneGizmo, 2000);
    }
    else if(original == ''){
        $('#details h1').text("Please paste some text in!");
    }
	else {
		// code to be executed if condition is false
		$('#result').text(original);
		$('#countTotal').text('0');
		$('#Lsymbol').text('0');
        $('#details h1').text("All good, your text doesn't contain gremlins");
	}
	
});

$('button#br').on('click', function () {
    var lines = $('#result').val().split(/\n/);
    for (var i = 0, z = lines.length; i < z; i++) {
        if (!lines[i]) lines[i] = "<br/>"  + '\n' + "<br/>";
    }
    $('#result').val(lines.join('\n'));
	
});


$('.reset').click(function(){
	location.reload();
});

//resizing of textareas
$('textarea').mousemove(function(){
    var divHeight = $(this).parent('div').outerHeight();
    $('#gremlins').css('height', divHeight);
    
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



