function colorize(){
    var text = $('input').val(),
        html = '',
        i;
    for(i=0; i<text.length; i++){
        var code, coda, nucleus, onset, red, green, blue;
        code = text.charCodeAt(i);
        if ( code >= 0xAC00 && code <= 0xD7AF ){
            code -= 0xAC00;
            coda = code % 28;
            code = (code - coda) / 28;
            nucleus = code % 21;
            onset = (code - nucleus) / 21;
            red = Math.floor(255*onset/18);
            green = Math.floor(255*nucleus/20);
            blue = Math.floor(255*coda/27);
        }
        else {
            red = green = blue = 0;
        }
        html += '<div class="box" style="background: rgb(' + red + ',' +
                green + ',' + blue + ')">&nbsp</div>';
    }
    $('div.result').html(html);
    return false;
}

$(function(){
    $('button').click(colorize);
    $('form').submit(colorize);
    colorize();
    $('input').focus();
});
